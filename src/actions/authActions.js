import firebase from 'firebase'
import {push} from 'react-router-redux'
import fire from "../firebase/fire";
import {showError} from "./alertActions";

export const successLogin = (username, password, userId) => {
    console.log('successLogin action', username, password, userId)
    return {
        type: 'LOGIN',
        username: username,
        password: password,
        userId: userId
    }
}

export const errorLogin = () => {
    return {
        type: 'LOGIN_ERROR',
        username: '',
        password: '',
        userId: ''
    }
}

export const signOut = () => {
    return (dispatch) => {
        return fire.auth().signOut()
            .then(t => {
                    dispatch(logout())
                }
            )
            .catch(error => {
                dispatch(errorLogin(error.message));
            })
    }
}

const logout = () => {
    return {
        type: 'LOGOUT',
        username: '',
        password: '',
        userId: ''
    }
}

export const loginAndRedirect = (email, password, url) => {

    return (dispatch) => {
        return fire.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
            .then(function () {
                return fire.auth().signInWithEmailAndPassword(email, password);
            })
            .then(user => {
                console.log('fb auth data', user)
                dispatch(successLogin(email, password, user.uid))
                console.log('navigate', url);
                dispatch(push(url));
            })
            .catch(error => {
                dispatch(errorLogin());
                dispatch(showError(error.message));
            })
    }
}

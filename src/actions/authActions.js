import firebase from 'firebase'
import {push} from 'react-router-redux'
import fire from "../firebase/fire";
import {hideProgress, showError, showProgress} from "./alertActions";
import {fetchGroups} from "./todoActions";

export const successLogin = (username, password, userId) => {
    return {
        type: 'LOGIN',
        username: username,
        password: password,
        userId: userId
    }
}

export const errorLogin = (message) => {
    return {
        type: 'LOGIN_ERROR',
        username: '',
        password: '',
        userId: '',
        errorMessage: message
    }
}

export const signOut = () => {
    return (dispatch) => {
        dispatch(showProgress())
        return fire.auth().signOut()
            .then(t => {
                    dispatch(hideProgress())
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
        dispatch(showProgress())
        return fire.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
            .then(function () {
                return fire.auth().signInWithEmailAndPassword(email, password);
            })
            .then(user => {
                dispatch(successLogin(email, password, user.uid))
                dispatch(fetchGroups())
            })
            .catch(error => {
                dispatch(errorLogin());
                dispatch(showError(error.message));
            })
    }
}

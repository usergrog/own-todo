import firebase from 'firebase'
import {push} from 'react-router-redux'
import fire from "../firebase/fire";

export const successLogin = (username, password, userId) => {
    console.log('successLogin action', username, password, userId)
    return {
        type: 'LOGIN',
        username: username,
        password: password,
        userId: userId,
        loginError: undefined
    }
}

export const errorLogin = (message) => {
    return {
        type: 'LOGIN_ERROR',
        username: '',
        password: '',
        userId: '',
        loginError: message
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

    // return () => {
    //     type: 'LOGOUT',
    //     username: '',
    //     password: '',
    //     loginError: undefined
    // }
}

const logout = () => {
    return {
        type: 'LOGOUT',
        username: '',
        password: '',
        userId: '',
        loginError: undefined
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
                dispatch(errorLogin(error.message));
            })
    }
}

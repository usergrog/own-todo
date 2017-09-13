import firebase from 'firebase'
import {push} from 'react-router-redux'
import fire from "../firebase/fire.jsx";

export const successLogin = (username, password) => {
    console.log('successLogin action', username, password)
    return {
        type: 'LOGIN',
        username: username,
        password: password,
        loginError: undefined
    }
}

export const errorLogin = (message) => {
    return {
        type: 'LOGIN_ERROR',
        username: '',
        password: '',
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
        loginError: undefined
    }
}

export const loginAndRedirect = (email, password, url) => {

    return (dispatch) => {
        return fire.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
            .then(function () {
                return fire.auth().signInWithEmailAndPassword(email, password);
            })
            .then(t => {
                console.log('fb auth data', t)
                dispatch(successLogin(email, password))
                console.log('navigate', url);
                dispatch(push(url));
            })
            .catch(error => {
                dispatch(errorLogin(error.message));
            })
    }
}

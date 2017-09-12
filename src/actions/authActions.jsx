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

export const logout = () => {
    return {
        type: 'LOGOUT',
        username: '',
        password: '',
        loginError: undefined
    }
}

export function loginAndRedirect(email, password, url) {

    return function (dispatch) {
        return fire.auth().signInWithEmailAndPassword(email, password)
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

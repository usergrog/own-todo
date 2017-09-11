import { push } from 'react-router-redux'

export const login = (username, password) => {
    console.log('login action', username, password)
    return {
        type: 'LOGIN',
        username: username,
        password: password
    }
}

export const logout = () => {
    return {
        type: 'LOGOUT',
        username: '',
        password: ''
    }
}

export function loginAndRedirect(username, password, url ) {

    return function (dispatch) {
        dispatch(login(username, password))
        console.log('navigate', url);
        dispatch(push(url));
    }
}

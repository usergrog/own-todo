const initialState = {
    username: '',
    password: '',
    loginError: undefined
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
        case 'LOGOUT':
            console.log('logout', action.username)
            return {
                username: action.username,
                password: action.password,
                loginError: undefined
            }
        case 'LOGIN_ERROR':
            return {
                username: '',
                password: '',
                loginError: action.loginError
            }
        default:
            return state
    }
}


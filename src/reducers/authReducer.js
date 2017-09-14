const initialState = {
    username: '',
    password: '',
    userId: '',
    loginError: undefined
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
        case 'LOGOUT':
            console.log(action.type, action.username)
            return {
                username: action.username,
                password: action.password,
                userId: action.userId,
                loginError: undefined
            }
        case 'LOGIN_ERROR':
            return {
                username: '',
                password: '',
                userId: '',
                loginError: action.loginError
            }
        default:
            return state
    }
}


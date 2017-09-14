// const initialState = {
//     username: '',
//     password: '',
//     userId: '',
//     loginError: undefined
// }

export const authReducer = (state= []/* = initialState*/, action) => {
    switch (action.type) {
        case 'LOGIN':
        case 'LOGOUT':
            console.log(action.type, action.username)
            return Object.assign({}, state, {
                username: action.username,
                password: action.password,
                userId: action.userId,
                loginError: undefined
            })
        case 'LOGIN_ERROR':
            return Object.assign({}, state, {
                username: '',
                password: '',
                userId: '',
                loginError: action.loginError
            })
        default:
            return state
    }
}


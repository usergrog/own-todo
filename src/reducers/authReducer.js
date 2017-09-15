const initialState = {
    username: '',
    password: '',
    userId: ''
}

export const authReducer = (state= [], action) => {
    switch (action.type) {
        case 'LOGIN':
        case 'LOGOUT':
            return Object.assign({}, state, {
                username: action.username,
                password: action.password,
                userId: action.userId
            })
        case 'LOGIN_ERROR':
            return Object.assign({}, state, {
                username: '',
                password: '',
                userId: ''
            })
        default:
            return state
    }
}


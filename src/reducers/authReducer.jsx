const initialState = {
    username: '',
    password: ''
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
        case 'LOGOUT':
            return {
                username: action.username,
                password: action.password
            }

        default:
            return state
    }
}


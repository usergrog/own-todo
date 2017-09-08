const initialState = {
    username: '',
    password: ''
}

const auth = (state = initialState, action) => {
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


export default auth

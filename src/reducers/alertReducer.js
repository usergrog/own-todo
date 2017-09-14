const initialState = {
    appError: ''
}

export const alertReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SHOW_ERROR':
            return {
                appError: action.appError
            }
        case 'HIDE_ERROR':
            return {
                appError: ''
            }
        default:
            return state
    }
}


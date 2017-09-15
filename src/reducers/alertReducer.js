const initialState = {
    appError: '',
    showProgress : false
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
        case 'SHOW_PROGRESS':
            return {
                showProgress: true
            }
        case 'HIDE_PROGRESS':
            return {
                showProgress: false
            }
        default:
            return state
    }
}


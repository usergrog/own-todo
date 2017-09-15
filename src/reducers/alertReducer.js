import {RECEIVED_TODOS} from "../actions/todoActions";

const initialState = {
    appError: '',
    showProgress: false
}

export const alertReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_ERROR':
        case 'SHOW_ERROR':
            return {
                showProgress: false,
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
        case 'LOGIN':
        case 'LOGOUT':
        case RECEIVED_TODOS:
        case 'HIDE_PROGRESS':
            return {
                showProgress: false
            }
        default:
            return state
    }
}



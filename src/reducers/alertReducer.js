import {RECEIVED_GROUPS, RECEIVED_TODOS} from "../actions/todoActions";

const initialState = {
    appError: '',
    showProgress: false
}

export const alertReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_ERROR':
        case 'SHOW_ERROR':
            return Object.assign({}, state, {
                showProgress: false,
                appError: action.appError
            })
        case 'HIDE_ERROR':
            return Object.assign({}, state, {
                appError: ''
            })
        case 'SHOW_PROGRESS':
            return Object.assign({}, state, {
                showProgress: true
            })
        case 'LOGIN':
        case 'LOGOUT':
        case RECEIVED_TODOS:
        case RECEIVED_GROUPS:
            return Object.assign({}, state, {
                showProgress: false,
                appError: ''
            })
        case 'HIDE_PROGRESS':
            return Object.assign({}, state, {
                showProgress: false,
            })
        default:
            return state
    }
}



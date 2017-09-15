export const showError = (message) => {
    return {
        type: 'SHOW_ERROR',
        appError: message
    }
}

export const hideError = () => {
    return {
        type: 'HIDE_ERROR'
    }
}

export const showProgress = () => {
    return {
        type: 'SHOW_PROGRESS'
    }
}

export const hideProgress = () => {
    return {
        type: 'HIDE_PROGRESS'
    }
}


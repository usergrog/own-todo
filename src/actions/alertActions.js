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


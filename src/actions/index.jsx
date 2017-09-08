export {SELECT_SUBREDDIT, INVALIDATE_SUBREDDIT,
    REQUEST_POSTS, RECEIVE_POSTS, selectSubreddit, fetchPosts} from './redditActions.jsx'

export const login = (username, password) => {
    console.log('login action', username, password)
    return {
        type: 'LOGIN',
        username: username,
        password: password
    }
}

export const logout = () => {
    return {
        type: 'LOGOUT',
        username: '',
        password: ''
    }
}



import {combineReducers} from 'redux'
// import todos from './todos'
import auth from './auth.jsx'
import reddit from "./reddit.jsx";

const appReducer = combineReducers({
    auth,
    reddit
    // todos
})

export default appReducer

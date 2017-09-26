import createHistory from 'history/createBrowserHistory'
import {ConnectedRouter, routerMiddleware, routerReducer} from 'react-router-redux'
import {createLogger} from 'redux-logger'
import {applyMiddleware, combineReducers, createStore} from 'redux'
import {authReducer} from "./reducers/authReducer"
import {todoReducer} from "./reducers/todoReducer"
import thunk from 'redux-thunk'
import {alertReducer} from "./reducers/alertReducer";
import compose from "redux/es/compose";

// Create a history of your choosing (we're using a browser history in this case)
export const history = createHistory()

// Build the middleware for intercepting and dispatching navigation actions
const routerAppMiddleware = routerMiddleware(history)

// const loggerMiddleware = createLogger()

const rootReducer = combineReducers({
    authReducer,
    routerReducer,
    todoReducer,
    alertReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(
            thunk,
            // loggerMiddleware,
            routerAppMiddleware
        ))
)

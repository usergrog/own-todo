import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {applyMiddleware, combineReducers, createStore} from 'redux'
import {selectSubreddit} from './actions/index.jsx'
import {createLogger} from 'redux-logger'
import {fetchPostsIfNeeded} from "./actions/redditActions.jsx";
import {ConnectedRouter, routerMiddleware, routerReducer} from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import {authReducer} from "./reducers/authReducer.jsx";
import {redditReducer} from "./reducers/redditReducer.jsx";

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()

// Build the middleware for intercepting and dispatching navigation actions
const routerAppMiddleware = routerMiddleware(history)

const loggerMiddleware = createLogger()

const rootReducer = combineReducers({
    authReducer,
    redditReducer,
    routerReducer
})


const store = createStore(
    rootReducer,
    applyMiddleware(
        thunk,
        loggerMiddleware,
        routerAppMiddleware
    )
)

store.dispatch(selectSubreddit('reactjs'))

store.dispatch(fetchPostsIfNeeded('reactjs')).then(() =>
    console.log(store.getState())
)

const render = Component => {
    ReactDOM.render(
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Component/>
            </ConnectedRouter>
        </Provider>,
        document.getElementById('root'));
}

registerServiceWorker();

render(App); // Renders App on init

if (module.hot) {
    // Renders App every time a change in code happens.
    module.hot.accept('./App.js', () => {
        render(Root)
    });
}

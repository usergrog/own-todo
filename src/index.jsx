import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {applyMiddleware, combineReducers, createStore} from 'redux'
import {selectSubreddit} from './actions/index'
import {createLogger} from 'redux-logger'
import {fetchPostsIfNeeded} from "./actions/redditActions";
import {ConnectedRouter, routerMiddleware, routerReducer} from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import {authReducer} from "./reducers/authReducer";
import {redditReducer} from "./reducers/redditReducer";
import {todoReducer} from "./reducers/todoReducer";
import {loginAndRedirect} from "./actions/authActions";
import fire from "./firebase/fire";
import {successLogin} from "./actions/authActions";
import {push} from 'react-router-redux'
import {fetchTodos} from "./actions/todoActions";

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()

// Build the middleware for intercepting and dispatching navigation actions
const routerAppMiddleware = routerMiddleware(history)

const loggerMiddleware = createLogger()

const rootReducer = combineReducers({
    authReducer,
    redditReducer,
    routerReducer,
    todoReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(
        thunk,
        loggerMiddleware,
        routerAppMiddleware
    ))
)

// store.dispatch(selectSubreddit('reactjs'))
//
// store.dispatch(fetchPostsIfNeeded('reactjs')).then(() =>
//     console.log(store.getState())
// )

fire.auth().onAuthStateChanged((user) => {
    if (user) {
        console.log('currentUser', user)
        store.dispatch(successLogin(user.email, '', user.uid))
        store.dispatch(push('/'));
        store.dispatch(fetchTodos())
    } else {
        console.log('currentUser is empty')
    }
});

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
    module.hot.accept('./App.js', () => {
        const NextApp = require('./App.js').default;
        render(NextApp)
    });
}

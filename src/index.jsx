import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {BrowserRouter} from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {applyMiddleware, createStore} from 'redux'
import {selectSubreddit} from './actions/index.jsx'
import {createLogger} from 'redux-logger'
import rootReducer from "./reducers/index.jsx";
import {fetchPostsIfNeeded} from "./actions/redditActions.jsx";

const loggerMiddleware = createLogger()
const store = createStore(
    rootReducer,
    applyMiddleware(
        thunk,
        loggerMiddleware
    )
)

store.dispatch(selectSubreddit('reactjs'))
store.dispatch(fetchPostsIfNeeded('reactjs')).then(() =>
    console.log(store.getState())
)

function renderApp() {
    const App = require('./App').default;// fix for re-render after change code
    ReactDOM.render(
        <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>,
        document.getElementById('root'));
}

registerServiceWorker();

renderApp(); // Renders App on init

if (module.hot) {
    // Renders App every time a change in code happens.
    module.hot.accept('./App.js', renderApp);
}

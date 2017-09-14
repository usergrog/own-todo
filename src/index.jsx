import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux'
import {ConnectedRouter, routerMiddleware, routerReducer} from 'react-router-redux'
import fire from "./firebase/fire";
import {successLogin} from "./actions/authActions";
import {push} from 'react-router-redux'
import {fetchTodos} from "./actions/todoActions";
import {history, store} from "./store";

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

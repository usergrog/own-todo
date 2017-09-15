import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux'
import {ConnectedRouter} from 'react-router-redux'
import {history, store} from "./store";

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

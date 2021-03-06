import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';

const root = document.getElementById('root');

if (root !== null ) {
    ReactDOM.render(
        <Provider store={store}>
        <App/>
        </Provider>, root);
}
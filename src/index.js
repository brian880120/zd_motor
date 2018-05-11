import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import { loadAllProducts } from './actions/productActions'
import App from './components/App';

import './index.css';
import './include/bootstrap';

const store = configureStore();
store.dispatch(loadAllProducts());

render(
    <Provider store={store}>
        <Router>
            <Route path="/" component={App}></Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();

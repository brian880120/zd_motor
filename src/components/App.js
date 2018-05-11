import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './common/header/Header';
import HomePage from './home/HomePage';
import ProductPage from './product/ProductPage';
import TestPage from './test/TestPage';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/product/:id" component={ProductPage} />
                    <Route path="/test" component={TestPage} />
                </Switch>
            </div>
        );
    }
}

export default App;

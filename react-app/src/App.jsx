import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';

export const App = () => {
    return (
        <div className="App">
            <Route exact path="/" component={Login} />
            <Route path="/home" component={Home} />
        </div>
    );
};

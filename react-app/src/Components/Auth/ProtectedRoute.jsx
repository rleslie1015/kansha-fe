import React from 'react';
import { Route } from 'react-router-dom'
import { Login } from './'

const ProtectedRoute = ({path, component: Component, ...props}) => {
    return <Route path={path} component={props => <Login {...props} component={Component} />}/>
}
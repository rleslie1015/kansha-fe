import React from 'react';
import { Route } from 'react-router-dom';
import { Login } from './';

export const ProtectedRoute = ({ path, component: Component, refresh, ...props }) => {
	return (
		<Route
			path={path}
			{...props}
			component={props => <Login {...props} refresh={refresh} component={Component} />}
		/>
	);
};

import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

// import { Login } from './';

export const ProtectedRoute = ({ path, component: Component }) => {
	const { error } = useSelector(({ user }) => ({
		...user,
	}));

	return error ? (
		<Redirect to="/login" />
	) : (
		<Route path={path} component={Component} />
	);
};

import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Onboarding from './Onboarding';
import Profile from './Profile';

export const App = () => {
	return (
		<div className="App">
			<Route exact path="/" component={Login} />
			<Route path="/home" component={Home} />
			<Route path="/onboarding" component={Onboarding} />
			<Route path="/profile" component={Profile} />
		</div>
	);
};

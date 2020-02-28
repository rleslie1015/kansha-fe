import React, { useEffect, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { login, authorizeUser } from './store/actions/user-actions';

import Auth from './utils/auth';
import { ProtectedRoute } from './components/Auth';
import Onboarding from './components/Onboarding/Onboarding';

import Landing from './components/Landing';
// import Onboarding from './components/Onboarding';
import { UserProfile } from './components/Profile';
import { Login } from './components/Auth';
import Feed from './components/Feed';
import Workspace from './components/Workspace';
import FileUpload from './components/FileUpload';
import Settings from './components/Settings';
import { Cropper } from './components/FileUpload/FileCrop';
import Dashboard from './components/Dashboard';

const auth = new Auth();

export const App = () => {
	const [init, setInit] = useState({ fetched: false, error: false });
	const { profile, error } = useSelector(({ user }) => ({
		...user,
	}));
	const dispatch = useDispatch();

	useEffect(() => {
		if (!init.fetched) {
			if (window.location.hash) {
				dispatch(authorizeUser(auth));
			} else {
				dispatch(login());
			}
		}
	}, [dispatch, init]);

	useEffect(() => {
		if (profile.id) {
			setInit({ fetched: true, error: false });
		} else {
			setInit({ fetched: true, error: true });
		}
	}, [profile, error, setInit]);

	return !init.fetched ? (
		<h1>Loading...</h1>
	) : (
		<Switch>
			{init.error && <Route exact path="/" component={Landing} />}
			<Route path="/login" component={Login} />
			<ProtectedRoute path="/onboarding" component={Onboarding} />
			<Dashboard>
				<Switch>
					<ProtectedRoute exact path="/" component={Feed} />
					<ProtectedRoute
						path="/profile/:id"
						component={UserProfile}
					/>
					<ProtectedRoute path="/workspace" component={Workspace} />
					<ProtectedRoute path="/upload" component={FileUpload} />
					<ProtectedRoute path="/settings" component={Settings} />
					<ProtectedRoute path="/crop" component={Cropper} />
					<Route default render={() => <Redirect to="/" />} />
				</Switch>
			</Dashboard>
			<Route default render={() => <Redirect to="/" />} />
		</Switch>
	);
};

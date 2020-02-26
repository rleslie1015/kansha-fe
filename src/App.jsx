import React, { useEffect, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { login, authorizeUser } from './store/actions/user-actions';

import Auth from './utils/auth';

import Landing from './components/Landing';
import { ProtectedRoute } from './components/Auth';
import Onboarding from './components/Onboarding';
import { UserProfile, PeerProfile } from './components/Profile';
import { Login } from './components/Auth';
import Feed from './components/Feed';
import Workspace from './components/Workspace';
import FileUpload from './components/FileUpload';
import Settings from './components/Settings';
import { Cropper } from './components/FileUpload/FileCrop';

const auth = new Auth();

export const App = () => {
	const [profileFetched, setProfileFetched] = useState({
		fetched: false,
		error: false,
	});
	const { profile, error, authenticated } = useSelector(({ user }) => ({
		...user,
	}));
	const dispatch = useDispatch();

	useEffect(() => {
		if (window.location.hash) {
			dispatch(authorizeUser(auth));
		} else {
			dispatch(login());
		}
	}, [dispatch, authenticated]);

	useEffect(() => {
		if (profile) {
			setProfileFetched({ fetched: true, error: false });
		} else if (error) {
			setProfileFetched({ fetched: true, error: true });
		}
	}, [profile, error, setProfileFetched]);

	return !profileFetched.fetched ? (
		<h1>Loading...</h1>
	) : (
		<Switch>
			<Route
				exact
				path="/"
				component={profileFetched.error ? Landing : Feed}
			/>
			<Route path="/onboarding" component={Onboarding} />
			<Route path="/login" component={Login} />
			<ProtectedRoute path="/profile" component={UserProfile} exact />
			<ProtectedRoute path="/profile/:id" component={PeerProfile} />
			<ProtectedRoute path="/workspace" component={Workspace} />
			<ProtectedRoute path="/upload" component={FileUpload} />
			<ProtectedRoute path="/settings" component={Settings} />
			<ProtectedRoute path="/crop" component={Cropper} />
			<Route default render={() => <Redirect to="/" />} />
		</Switch>
	);
};

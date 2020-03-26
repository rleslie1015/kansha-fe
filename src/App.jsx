import React, { useEffect, useState } from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { login, authorizeUser } from './store/actions/user-actions';
import AboutUs from './components/Landing/AboutUs';
import Auth from './utils/auth';
import { ProtectedRoute } from './components/Auth';
import Onboarding from './components/Onboarding/Onboarding';
import UserUpload from './components/UserUpload/UserUpload';
import Landing from './components/Landing';
import { UserProfile } from './components/Profile';
import { Login } from './components/Auth';
// import Feed from './components/Feed';
import Workspace from './components/Workspace';
import FileUpload from './components/FileUpload';
import Settings from './components/Settings';
import Dashboard from './components/Dashboard';
import AdminDashboard from './components/AdminDashboard/AdminDashboard';
import OrganizationHome from './components/AdminTeams/OrganizationHome';

const auth = new Auth();

export const App = () => {
	const [init, setInit] = useState({
		fetched: false,
		error: false,
		onboarding: false,
	});
	const { profile, error, isOnboarding } = useSelector(({ user }) => ({
		...user,
	}));
	const dispatch = useDispatch();
	const history = useHistory();

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
			setInit(prev => ({ ...prev, fetched: true }));
		} else if (error) {
			setInit(prev => ({ ...prev, fetched: true, error: true }));
		} else if (isOnboarding) {
			setInit(prev => ({ ...prev, fetched: true, onboarding: true }));
			history.push('/onboarding/step-1');
		}
	}, [profile, error, isOnboarding, setInit, history]);

	if (init.error) {
		return (
			<Switch>
				<Route exact path="/" component={Landing} />
				<Route path="/login" component={Login} />)
				<Route path="/aboutus" component={AboutUs} />)
				<Route default render={() => <Redirect to="/" />} />
			</Switch>
		);
	} else if (init.onboarding) {
		return <Route path="/onboarding" component={Onboarding} />;
	} else if (init.fetched) {
		return (
			<Dashboard>
				<Switch>
					<ProtectedRoute exact path="/" component={AdminDashboard} />
					<ProtectedRoute
						path="/profile/:id"
						component={UserProfile}
					/>
					<ProtectedRoute
						path="/dashboard"
						component={AdminDashboard}
					/>
					<ProtectedRoute path="/workspace" component={Workspace} />
					<ProtectedRoute
						path="/organization"
						component={OrganizationHome}
					/>
					<ProtectedRoute path="/upload" component={FileUpload} />
					<ProtectedRoute path="/settings" component={Settings} />
					<ProtectedRoute path="/add-user" component={UserUpload} />
					<Route default render={() => <Redirect to="/" />} />
				</Switch>
			</Dashboard>
		);
	} else {
		return <h1>Loading...</h1>;
	}
};

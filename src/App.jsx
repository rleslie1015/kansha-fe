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
import Workspace from './components/Workspace';
import FileUpload from './components/FileUpload';
import Settings from './components/Settings';
import Dashboard from './components/Dashboard';
import AdminDashboard from './components/AdminDashboard/AdminDashboard';
import OrganizationHome from './components/AdminTeams/OrganizationHome';
import TeamMemberList from './components/AdminTeams/TeamMemberList';
import Loader from 'react-loader-spinner';

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
			setInit((prev) => ({ ...prev, fetched: true }));
		} else if (error) {
			setInit((prev) => ({ ...prev, fetched: true, error: true }));
		} else if (isOnboarding) {
			setInit((prev) => ({ ...prev, fetched: true, onboarding: true }));
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
					<ProtectedRoute
						exact
						path="/"
						component={
							profile.user_type.toLowerCase() === 'admin'
								? AdminDashboard
								: UserProfile
						}
					/>
					<ProtectedRoute
						exact
						path="/profile"
						component={UserProfile}
					/>

					<ProtectedRoute path="/workspace" component={Workspace} />
					<ProtectedRoute
						exact
						path="/organization"
						component={OrganizationHome}
					/>
					<ProtectedRoute
						exact
						path="/teams/:id"
						component={TeamMemberList}
					/>
					<ProtectedRoute path="/upload" component={FileUpload} />
					<ProtectedRoute path="/settings" component={Settings} />
					<ProtectedRoute path="/add-user" component={UserUpload} />
					<Route default render={() => <Redirect to="/" />} />
				</Switch>
			</Dashboard>
		);
	} else {
		return (
			<Loader
				type="Rings"
				color="#c91757"
				height={100}
				width={100}
				timeout={10000}
			/>
		);
	}
};

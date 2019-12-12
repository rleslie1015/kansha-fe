import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Landing } from './landing/Landing';
import { Route } from 'react-router-dom';
import { ProtectedRoute } from './Components/Auth';
import Onboarding from './Onboarding';
import { Profile } from './Components/Profile';
import { AuthLoader } from './Components/Auth';
import Workspace from './Workspace';
import FileUpload from './FileUpload';
import Settings from './Settings';

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		minHeight: '100vh',
		backgroundColor: '#26242D',
		color: '#ffffff',
	},
}));

export const App = () => {
	const classes = useStyles();
	return (
		<div id="App" className={classes.root}>
			<Route exact path="/" component={Landing} />
			<Route path="/auth" component={AuthLoader} />
			<Route path="/onboarding" component={Onboarding} />
			<ProtectedRoute path="/profile" component={Profile} refresh={true}/>
			<ProtectedRoute path="/workspace" component={Workspace} />
			<ProtectedRoute path="/upload" component={FileUpload} />
			<ProtectedRoute path="/settings" component={Settings} />
		</div>
	);
};

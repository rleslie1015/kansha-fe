import React from 'react';
import { Landing } from './landing/Landing';
import { Route } from 'react-router-dom';
import { ProtectedRoute } from './Components/Auth';
import Onboarding from './Onboarding';
import { UserProfile, PeerProfile } from './Components/Profile';
import { AuthLoader } from './Components/Auth';
import { Feed } from './Components/Feed';
import Workspace from './Workspace';
import FileUpload from './FileUpload';
import Settings from './Settings';
import { Cropper } from './Components/FileUpload/FileCrop';

export const App = () => {
	return (
		<div id="App">
			<Route exact path="/" component={Landing} />
			<Route path="/auth" component={AuthLoader} />
			<Route path="/onboarding" component={Onboarding} />
			<ProtectedRoute path="/home" component={Feed} />
			<ProtectedRoute path="/profile" component={UserProfile} exact />
			<ProtectedRoute path="/profile/:id" component={PeerProfile} />
			<ProtectedRoute path="/workspace" component={Workspace} />
			<ProtectedRoute path="/upload" component={FileUpload} />
			<ProtectedRoute path="/settings" component={Settings} />
			<ProtectedRoute path="/crop" component={Cropper} />
		</div>
	);
};

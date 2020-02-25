import React from 'react';
import { Route } from 'react-router-dom';

import Landing from './components/Landing';
import { ProtectedRoute } from './components/Auth';
import Onboarding from './components/Onboarding/Onboarding';
import { UserProfile, PeerProfile } from './components/Profile';
import { AuthLoader } from './components/Auth';
import Feed from './components/Feed';
import Workspace from './components/Workspace';
import FileUpload from './components/FileUpload';
import Settings from './components/Settings';
import { Cropper } from './components/FileUpload/FileCrop';

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

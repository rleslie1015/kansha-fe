import React from 'react';
import { Route } from 'react-router-dom';
//nested router goes here
import S1GetStarted from './S1GetStarted';
import S2CreateAccount from './S2CreateAccount';
import S3LetsGetSetUp from './S3LetsGetSetUp';
import S4AUserUpload from './S4AUserUpload';
import S4BUserUpload from './S4BUserUpload';
import S4CUserUpload from './S4CUserUpload';
import S5AccountCustomization from './S5AccountCustomization';
import S6AllDone from './S6AllDone';

function Onboarding() {
	//manage state using a useState slice

	//navbar
	//progress bar
	//routes
	//footer

	return (
		<>
			<Route path="/onboarding/step-1" component={S1GetStarted}></Route>
			<Route
				path="/onboarding/step-2"
				component={S2CreateAccount}></Route>
			<Route path="/onboarding/step-3" component={S3LetsGetSetUp}></Route>
			<Route path="/onboarding/step-4" component={S4AUserUpload}></Route>
			<Route path="/onboarding/step-4b" component={S4BUserUpload}></Route>
			<Route path="/onboarding/step-4c" component={S4CUserUpload}></Route>
			<Route
				path="/onboarding/step-5"
				component={S5AccountCustomization}></Route>
			<Route path="/onboarding/step-6" component={S6AllDone}></Route>
		</>
	);
}

export default Onboarding;

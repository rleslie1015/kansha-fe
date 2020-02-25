import React, { useState } from 'react';
import { Route } from 'react-router-dom';

import Nav from '../Landing/Nav';
// import ProgressBar from './ProgressBar';

//nested router goes here
import S1GetStarted from './S1GetStarted';
import S2CreateAccount from './S2CreateAccount';
import S3LetsGetSetUp from './S3LetsGetSetUp';
import S4AUserUpload from './S4AUserUpload';
import S4BUserUpload from './S4BUserUpload';
import S4CUserUpload from './S4CUserUpload';
import S5AccountCustomization from './S5AccountCustomization';
import S6AllDone from './S6AllDone';

import onboardingPic from '../../assets/onboardingPic.png';

function Onboarding() {
	const [user, setUser] = useState({
		first_name: '',
		last_name: '',
		email: '',
		job_title: '',
		org_id: '',
		user_type: '',
		org_name: '',
		company_size: '',
		industry: '',
		logo_url: '',
		primary_color: '',
	});

	//these slices will live in Upload components

	// const [indUser, setIndUser] = useState();

	// const [bulkFile, setBulkFile] = useState();

	const handleUser = e => {
		setUser({ ...user, [e.target.name]: e.target.value });
	};

	return (
		<>
			<Nav />
			{/* <ProgressBar /> */}
			<div className="s1-parent-container">
				<div className="s1-img">
					<img src={onboardingPic}></img>
				</div>
				<div className="s1-getting-started">
					<Route
						path="/onboarding/step-1"
						render={props => <S1GetStarted {...props} />}></Route>
					<Route
						path="/onboarding/step-2"
						render={props => (
							<S2CreateAccount
								{...props}
								user={user}
								handleUser={handleUser}
							/>
						)}></Route>
					<Route
						path="/onboarding/step-3"
						render={props => (
							<S3LetsGetSetUp
								{...props}
								user={user}
								handleUser={handleUser}
							/>
						)}></Route>
					<Route
						path="/onboarding/step-4"
						render={props => <S4AUserUpload {...props} />}></Route>
					<Route
						path="/onboarding/step-4b"
						render={props => (
							<S4BUserUpload
								{...props}
								user={user}
								setUser={setUser}
							/>
						)}></Route>
					<Route
						path="/onboarding/step-4c"
						render={props => (
							<S4CUserUpload
								{...props}
								user={user}
								setUser={setUser}
							/>
						)}></Route>
					<Route
						path="/onboarding/step-5"
						render={props => (
							<S5AccountCustomization
								{...props}
								user={user}
								handleUser={handleUser}
							/>
						)}></Route>
					<Route
						path="/onboarding/step-6"
						render={() => <S6AllDone />}></Route>
				</div>
			</div>
		</>
	);
}

export default Onboarding;

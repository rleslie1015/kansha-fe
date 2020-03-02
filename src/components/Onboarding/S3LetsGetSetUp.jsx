// import React from 'react';
// import { useHistory } from 'react-router-dom';
// import { useForm } from 'react-hook-form';
// import { axiosWithAuth } from '../../utils/axiosWithAuth';

// //post request to /organizations to create new org plus employee/user relationship

// function S3LetsGetSetUp({ user, setUser, handleUser }) {
// 	const { register, errors, formState } = useForm({ mode: 'onChange' });

// 	console.log(user);
// 	let history = useHistory();

// 	const handlePrevious = () => {
// 		history.push('/onboarding/step-2');
// 	};

// 	console.log(formState.dirty);
// 	console.log('isValid', formState.isValid);

// 	return (
// 		<div>
// 			<h1>Let's Get Set Up</h1>

// 			<form onSubmit={handleSubmit}>
// 				<div>

// 					<input
// 						type="text"
// 						ref={register({ required: true })}
// 						placeholder="organization name"
// 						name="org_name"
// 						defaultValue={user.org_name}
// 						onChange={handleUser}
// 					/>
// 					{errors.org_name && 'Organization Name is required'}

// 				</div>
// 			</form>
// 			<button
// 				disabled={
// 					!formState.dirty || (formState.dirty && !formState.isValid)
// 				}
// 				type="submit"
// 				onClick={handleSubmit}>
// 				Next
// 			</button>
// 			<div className="step-p-container">
// 				<span className="previousarrow">
// 					<i className="fas fa-arrow-left" />
// 					<div onClick={handlePrevious}>
// 						<p> Previous step</p>
// 					</div>
// 				</span>
// 			</div>
// 		</div>
// 	);
// }

// export default S3LetsGetSetUp;

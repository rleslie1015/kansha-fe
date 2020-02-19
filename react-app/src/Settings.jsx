import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { update } from './store/actions/user-actions';

function Settings({ update, isUpdating, profile, user }) {
	const classes = useStyles();

	const history = useHistory();

	const initialState = {
		first_name: user.profile.first_name,
		last_name: user.profile.last_name,
		job_title: user.profile.job_title,
		department: user.profile.department,
		org_name: user.profile.org_name,
		user_type: user.profile.user_type,
	};

	const [form, setForm] = useState(initialState);

	const handleChange = event => {
		setForm({ ...form, [event.target.name]: event.target.value });
	};

	const id = user.profile.id;

	const handleSubmit = event => {
		console.log(form);
		update(id, form);
		window.setTimeout(() => {
			history.push('/profile');
		}, 50);
	};

	return (
		<div id="App">
			<div />
			<div>
				<h5>Settings</h5>
				<div>
					<div>
						<h5>Edit Profile</h5>
						<div>
							<div>
								<div className="box">
									<input
										label="First Name*"
										placeholder="e.g. Jane"
										variant="outlined"
										name="first_name"
										margin="normal"
										onChange={handleChange}
										InputProps={{
											className: classes.input,
										}}
										InputLabelProps={{
											className: classes.label,
										}}
										value={form.first_name}
									/>
									<TextField
										label="Last Name*"
										placeholder="e.g. Doe"
										variant="outlined"
										name="last_name"
										margin="normal"
										onChange={handleChange}
										InputProps={{
											className: classes.input,
										}}
										InputLabelProps={{
											className: classes.label,
										}}
										value={form.last_name}
									/>
								</Box>
								<Box className={classes.twoInput}>
									<TextField
										label="Job Title*"
										placeholder="e.g. Manager"
										variant="outlined"
										name="job_title"
										margin="normal"
										onChange={handleChange}
										InputProps={{
											className: classes.input,
										}}
										InputLabelProps={{
											className: classes.label,
										}}
										value={form.job_title}
									/>
									<FormControl className={classes.textField}>
										<Select
											variant="outlined"
											defaultValue="standard"
											value={form.user_type}
											onChange={handleChange}
											name="user_type"
											margin="normal"
											MenuProps={{
												classes: {
													paper:
														classes.dropdownStyle,
												},
											}}
											input={<StyledBase />}
											InputProps={{
												className: classes.input,
											}}
											InputLabelProps={{
												className: classes.label,
											}}>
											<MenuItem value="standard">
												Standard
											</MenuItem>
											<MenuItem value="mod">Mod</MenuItem>
											<MenuItem value="admin">
												Admin
											</MenuItem>
										</Select>
									</FormControl>
								</Box>
								<Box className={classes.oneInput}>
									<TextField
										label="Organization*"
										placeholder="Organization Name"
										variant="outlined"
										name="org_name"
										margin="normal"
										onChange={handleChange}
										InputProps={{
											className: classes.input,
										}}
										InputLabelProps={{
											className: classes.label,
										}}
										value={form.org_name}
									/>
								</Box>
								<Box className={classes.oneInput}>
									<TextField
										label="Department"
										placeholder="e.g. Marketing Department"
										variant="outlined"
										name="department"
										margin="normal"
										onChange={handleChange}
										InputProps={{
											className: classes.input,
										}}
										InputLabelProps={{
											className: classes.label,
										}}
										value={form.department}
									/>
								</Box>
								<button
									className={classes.button}
									variant="contained"
									color="primary"
									onClick={handleSubmit}>
									Save Changes
								</button>
							</div>
							<Card>
								<div>
									<img
										src={user.profile.profile_picture}
										alt="user profile"
									/>
								</div>
								<div variant="h5">
									{user.profile.first_name}{' '}
									{user.profile.last_name}
								</div>
								<div>{user.profile.job_title}</div>
								<div>{user.profile.department}</div>
							</Card>
						</FormControl>
					</Paper>
				</Container>
			</Container>
		</div>
	);
}

const mapStateToProps = state => {
	return {
		...state,
	};
};

export default connect(mapStateToProps, { update })(Settings);

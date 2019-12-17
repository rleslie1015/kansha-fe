import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { update } from './store/actions/user-actions';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles, withStyles, createStyles } from '@material-ui/core/styles';
import {
	Container,
	Typography,
	Paper,
	Button,
	FormControl,
	TextField,
	MenuItem,
	Select,
	Box,
	InputBase,
	Card,
} from '@material-ui/core';
import 'typeface-montserrat';
import 'typeface-roboto';

const StyledBase = withStyles(theme =>
	createStyles({
		input: {
			width: '100%',
			height: '53%',
			marginTop: '.3rem',
			border: '1px solid rgba(255, 255, 255, 0.7)',
			padding: '1rem',
			color: '#FFFFFF',
			borderRadius: '0',
			fontFamily: 'Montserrat',
			fontStyle: 'normal',
			fontWeight: 'normal',
			fontSize: '24px',
			lineHeight: '20px',
		},
	}),
)(InputBase);

const useStyles = makeStyles(theme => ({
	mainContainer: {
		display: 'flex',
		flexDirection: 'column',
		maxWidth: '90%',
	},
	formContainer: {
		maxWidth: '100%',
		padding: 0,
	},
	formControl: {
		display: 'flex',
		flexDirection: 'row',
	},
	onboard: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		width: '100%',
		height: '70%',
		backgroundColor: '#2D2C35',
		borderRadius: '2px',
		padding: '2rem 2rem',
	},
	header: {
		color: 'white',
		fontFamily: 'Montserrat',
		fontStyle: 'normal',
		fontWeight: '600',
		fontSize: '2.2rem',
		lineHeight: '2rem',
		letterSpacing: '0.15px',
		margin: '3rem 0',
	},
	leftContainer: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		width: '50%',
		marginRight: '2em',
	},
	editProfile: {
		color: 'white',
		fontFamily: 'Montserrat',
		fontSize: '1.6rem',
		lineHeight: '2rem',
		letterSpacing: '0.15px',
		marginBottom: '2rem',
	},
	textField: {
		margin: '.5rem',
		width: '100%',
		'& input:valid + fieldset': {
			borderColor: 'rgba(255, 255, 255, 0.7)',
			borderWidth: '2',
		},
		'& input:valid:hover + fieldset': {
			borderColor: '#FFFFFF',
		},
		'& input:valid:focus + fieldset': {
			borderColor: '#EE4D71',
		},
		'& label.Mui-focused': {
			color: '#FFFFFF',
			fontFamily: 'Montserrat',
			fontStyle: 'normal',
			fontWeight: 'normal',
			fontSize: '20px',
			lineHeight: '20px',
		},
	},
	select: {
		border: '1px solid #FFFFFF',
	},
	label: {
		color: 'rgba(255, 255, 255, 0.7)',
		fontSize: '24px',
	},
	input: {
		color: '#FFFFFF',
		borderRadius: '0',
		fontFamily: 'Montserrat',
		fontStyle: 'normal',
		fontWeight: 'normal',
		fontSize: '24px',
		lineHeight: '20px',
	},
	dropdownStyle: {
		backgroundColor: '#3A3845',
		color: '#FFFFFF',
		fontSize: '24px',
	},
	twoInput: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		width: '100%',
		'@media(max-width: 700px)': {
			display: 'flex',
			flexDirection: 'column',
		},
	},
	oneInput: {
		display: 'flex',
		justifyContent: 'center',
		width: '100%',
	},
	button: {
		width: '50%',
		fontSize: '1rem',
		margin: '2rem auto',
		borderRadius: '0',
		backgroundColor: '#2D2C35',
		boxShadow: 'none',
		border: '1px solid #EE4D71',
		color: '#EE4D71',
		textDecoration: 'none',
		'&:hover': {
			background: 'linear-gradient(172.54deg, #EE4D71 0%, #F15A3F 100%);',
			color: '#FFFFFF',
		},
	},
	paper: {
		marginTop: '1rem',
	},
	typo: {
		display: 'flex',
		justifyContent: 'center',
		padding: '1rem .5rem',
	},
	form: {
		width: '90%',
		marginTop: '1rem',
		marginLeft: '1.5rem',
	},
	loaderContainer: {
		position: 'absolute',
		top: 'calc(50% - 50px)',
		left: 'calc(50% - 50px)',
		width: 100,
		height: 100,
	},
	userInfo: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		width: '50%',
		height: 'auto',
		backgroundColor: '#3A3845',
		padding: '3rem 0',
		boxShadow: 'none',
		borderRadius: '0%',
		marginLeft: '2em',
	},
	pictureContainer: {
		width: 'auto',
		borderRadius: '100%',
		'&:hover': {
			cursor: 'pointer',
		},
	},
	profilePic: {
		borderRadius: '100%',
		width: '272px',
		height: '272px',
		background: 'linear-gradient(135deg, #EE4D71 0%, #F15A3F 100%)',
		objectFit: 'cover',
		objectPosition: '50% 50%',
	},
	name: {
		paddingTop: '1.5rem',
		color: '#FFFFFF',
		fontFamily: 'Montserrat',
		fontStyle: 'normal',
		fontSize: '24px',
		lineHeight: '29px',
		textAlign: 'center',
	},
	jobTitle: {
		paddingTop: '.5rem',
		color: 'rgba(255, 255, 255, 0.7)',
		fontFamily: 'Montserrat',
		fontStyle: 'normal',
		fontSize: '24px',
		lineHeight: '29px',
		textAlign: 'center',
	},
	department: {
		paddingTop: '.5rem',
		color: 'rgba(255, 255, 255, 0.5)',
		fontFamily: 'Montserrat',
		fontStyle: 'normal',
		fontSize: '24px',
		lineHeight: '29px',
		fontWeight: '500',
		textAlign: 'Center',
		verticalAlign: 'Top',
		paddingBottom: '3rem',
	},
}));

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
		<div id="App" className={classes.root}>
			<CssBaseline />
			<Container className={classes.mainContainer}>
				<Typography className={classes.header} variant="h5">
					Settings
				</Typography>
				<Container className={classes.formContainer}>
					<Paper className={classes.onboard}>
						<Typography className={classes.editProfile}>
							Edit Profile
						</Typography>
						<FormControl className={classes.formControl}>
							<div className={classes.leftContainer}>
								<Box className={classes.twoInput}>
									<TextField
										label="First Name*"
										placeholder="e.g. Jane"
										className={classes.textField}
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
										className={classes.textField}
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
										className={classes.textField}
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
										className={classes.textField}
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
										className={classes.textField}
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
								<Button
									className={classes.button}
									variant="contained"
									color="primary"
									onClick={handleSubmit}>
									Save Changes
								</Button>
							</div>
							<Card className={classes.userInfo}>
								<div className={classes.pictureContainer}>
									<img
										src={user.profile.profile_picture}
										className={classes.profilePic}
										alt="user profile"
									/>
								</div>
								<Typography
									className={classes.name}
									variant="h5">
									{user.profile.first_name}{' '}
									{user.profile.last_name}
								</Typography>
								<Typography className={classes.jobTitle}>
									{user.profile.job_title}
								</Typography>
								<Typography className={classes.department}>
									{user.profile.department}
								</Typography>
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

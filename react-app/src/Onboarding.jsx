import React, { useState, useEffect } from 'react';
import { onboard } from './store/actions/user-actions';
import { connect } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import {
	Container,
	Typography,
	Paper,
	Button,
	FormControl,
	TextField,
	Select,
	MenuItem,
	InputLabel,
} from '@material-ui/core';
import Auth from './auth'

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		minHeight: '100vh',
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
	button: {
		width: '50%',
		margin: '1rem 8rem',
		backgroundColor: '#349AFA',
		color: 'white',
		textDecoration: 'none',
	},
}));

const auth = new Auth();

function Onboarding(props) {
	const classes = useStyles();
	const [form, setForm] = useState({
		first_name: '',
		last_name: '',
		job_title: '',
		department: '',
		org_name: '',
		user_type: '',
		sub: ''
	});

	const handleChange = event => {
		setForm({ ...form, [event.target.name]: event.target.value });
	};

	const handleSubmit = event => {
		props.onboard(form);
	};

	useEffect(() => {
		const { sub } = auth.getProfile()
		setForm(f => ({...f, sub}))
	}, [])

	return (
		<div id="App" className={classes.root}>
			<CssBaseline />
			<Container fixed>
				<Paper className={classes.paper}>
					<Typography className={classes.typo} variant="h5">
						Welome, Please specify your role.
					</Typography>
					<FormControl className={classes.form}>
						<TextField
							label="First Name"
							name="first_name"
							onChange={handleChange}
						/>
						<TextField
							label="Last Name"
							name="last_name"
							onChange={handleChange}
						/>

						<TextField
							label="Job Title"
							name="job_title"
							onChange={handleChange}
						/>
						<FormControl>
							<InputLabel id="Role-label">
								<em>Select A Role</em>
							</InputLabel>
							<Select
								labelId="Role-label"
								id="Role"
								name="user_type"
								value={form.role}
								onChange={handleChange}>
								<MenuItem value="admin">Admin</MenuItem>
								<MenuItem value="mod">Mod</MenuItem>
								<MenuItem value="standard">Standard</MenuItem>
							</Select>
						</FormControl>
						<TextField
							label="Organization"
							name="org_name"
							onChange={handleChange}
						/>
						<TextField
							label="Department"
							name="department"
							onChange={handleChange}
						/>
						<Button
							className={classes.button}
							variant="contained"
							color="primary"
							onClick={handleSubmit}>
							Register
						</Button>
					</FormControl>
					<Typography>
						{form.sub}
					</Typography>
				</Paper>
			</Container>
		</div>
	);
}

const mapStateToProps = state => {
	return {
		profile: state.user.profile,
	};
};

export default connect(mapStateToProps, { onboard })(Onboarding);

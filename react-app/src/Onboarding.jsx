import React, { useState, useEffect } from 'react';
import { onboard } from './store/actions/user-actions';
import { connect } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
<<<<<<< HEAD
import { makeStyles, withStyles, createStyles } from '@material-ui/core/styles';
import logo from './assets/logo38.png';
import kanshaLogo from './assets/logo39.png';
=======
import { makeStyles } from '@material-ui/core/styles';
>>>>>>> 7d0e4e738085353d1c6d2f6923df9a0c1c128c8a
import {
	Container,
	Typography,
	Paper,
	Button,
	FormControl,
	TextField,
<<<<<<< HEAD
	MenuItem,
	Select,
	Box,
	InputBase
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
=======
	Select,
	MenuItem,
	InputLabel,
} from '@material-ui/core';
import Auth from './auth'
>>>>>>> 7d0e4e738085353d1c6d2f6923df9a0c1c128c8a

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
<<<<<<< HEAD
		flexDirection: 'row',
		minHeight: '100vh',
		backgroundColor: '#26242D',
	},
	imageContainer: {
		width: '48%',
	},
	kanshaLogo: {
		width: '30%',
	},
	logo: {
		width: '90%',
		height: 'auto',
		marginTop: '1rem',
		marginLeft: '1rem',
	},
	formContainer: {
		width: '48%',
	},
	onboard: {
		display: 'flex',
		flexDirection: 'column',
		margin: '7rem 3rem 0 3rem',
		width: '80%',
		height: '80%',
		backgroundColor: '#2D2C35',
		borderRadius: '2px',
		padding: '2rem 2rem',
	},
	getStarted: {
		display: 'flex',
		justifyContent: 'center',
		padding: '1rem .5rem 3rem .5rem',
		color: '#EE4D71',
		fontFamily: 'Montserrat',
		fontStyle: 'normal',
		fontWeight: '600',
		fontSize: '42px',
		lineHeight: '24px',
		letterSpacing: '0.15px',
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
		backgroundColor:'#3A3845',
		color: '#FFFFFF',
		fontSize: '24px',
	  },
	twoInput: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		width: '100%',
		padding: '1rem',
	},
	oneInput: {
		display: 'flex',
		justifyContent: 'center',
		width: '100%',
		padding: '1rem',
	},
	button: {
		width: '70%',
		fontSize: '24px',
		margin: '2rem 6rem',
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
=======
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
>>>>>>> 7d0e4e738085353d1c6d2f6923df9a0c1c128c8a
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
<<<<<<< HEAD
	});

	const handleChange = event => {
		setForm({ ...form, [event.target.name]: event.target.value });
	};

	const handleSubmit = event => {
		props.onboard(form);
	};
	return (
		<div id="App" className={classes.root}>
			<CssBaseline />
			<Container className={classes.imageContainer}>
				<img
					src={kanshaLogo}
					alt="Kansha Logo"
					className={classes.kanshaLogo}
				/>
				<img
					src={logo}
					alt="Kansha Logo People"
					className={classes.logo}
				/>
			</Container>
			<Container className={classes.formContainer}>
				<Paper className={classes.onboard}>
					<Typography className={classes.getStarted} variant="h5">
						Let's Get Started!
					</Typography>
					<FormControl>
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
							/>
							<FormControl
								className={classes.textField}>
								<Select
									variant="outlined"
									defaultValue="standard"
									value={form.role}
									onChange={handleChange}
									margin="normal"
									MenuProps={{ classes: { paper: classes.dropdownStyle } }}
									input={<StyledBase />}
									InputProps={{
										className: classes.input,
									}}
									InputLabelProps={{
										className: classes.label,
									}}>
									<MenuItem value="standard">Standard</MenuItem>
									<MenuItem value="mod">Mod</MenuItem>
									<MenuItem value="admin">Admin</MenuItem>
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
							/>
						</Box>
						<Button
							className={classes.button}
							variant="contained"
							color="primary"
							onClick={handleSubmit}>
							Confirm
						</Button>
					</FormControl>
				</Paper>
			</Container>
		</div>
	);
=======
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
				</Paper>
			</Container>
		</div>
	);

>>>>>>> 7d0e4e738085353d1c6d2f6923df9a0c1c128c8a
}

const mapStateToProps = state => {
	return {
		profile: state.user.profile,
	};
};

export default connect(mapStateToProps, { onboard })(Onboarding);

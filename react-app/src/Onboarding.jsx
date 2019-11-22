import React, { useState } from 'react';
import { onboard } from './store/actions/user-actions';
import { connect } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Paper, Button, FormControl, TextField, MenuItem } from '@material-ui/core';
import 'typeface-montserrat';
import 'typeface-roboto';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
		minHeight: '100vh',
		backgroundColor: '#26242D',
    },
    onboardContainer: {
		marginTop: '1rem',
		backgroundColor: '#2D2C35',
		boxShadow: '0px 0px 25px rgba(33, 32, 40, 0.1)',
		borderRadius: '2px',
    },
    getStarted: {
        display: 'flex',
        justifyContent: 'center',
		padding: '1rem .5rem',
		color: '#EE4D71',
		fontFamily: 'Montserrat',
		fontStyle: 'normal',
		fontWeight: '600',
		fontSize: '24px',
		lineHeight: '24px',
		letterSpacing: '0.15px',
	},
	textField: {
		width: '200',
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
				color: '#EE4D71',
			},
	},
	label: {
		color: '#FFFFFF',
	},
	select: {
		'& .MuiSelect-outline': {
			borderColor: '#EE4D71',
		},
	},
	input: {
		color: '#FFFFFF',
	},
    form: {
        width: '100%',
        marginTop: '1rem'
    },
    button: {
        width: '10%',
        margin: '1rem 45%',
        backgroundColor: '#349AFA',
        color: 'white',
        textDecoration: 'none',
    },
}));

function Onboarding(props) {
    const classes = useStyles();
    const [ form, setForm ] = useState({ first_name: "", last_name: "", job_title: "", department: "", org_name: "", user_type: ""});

    const handleChange = event => {
        setForm({ ...form, [event.target.name] : event.target.value});
      };

    const handleSubmit = event => {
        props.onboard(form);
    }
    return (
        <div id="App" className={classes.root}>
            <CssBaseline />
            <Container fixed>
                <Paper className={classes.onboardContainer}>
                    <Typography className={classes.getStarted} variant="h5">
                        Let's Get Started! 
                    </Typography>
                    <FormControl>
                        <TextField 
							label="First Name*"
							placeholder="e.g. Jane"
							className={classes.textField}
							variant="outlined"
							name='first_name'
							margin="normal"
							onChange={handleChange}
							InputProps={{
								className: classes.input
							  }}
							InputLabelProps={{
								className: classes.label
							}}
                        />
                        <TextField 
							label="Last Name*"
							placeholder="e.g. Doe"
							className={classes.textField}
							variant="outlined"
							name='last_name'
							margin="normal"
							onChange={handleChange}
							InputProps={{
								className: classes.input
							  }}
							InputLabelProps={{
								className: classes.label
							}}
                        />
                        <TextField 
							label="Job Title*"
							placeholder="e.g. Manager"
							className={classes.textField}
							variant="outlined"
							name='job_title'
							margin="normal"
							onChange={handleChange}
							InputProps={{
								className: classes.input
							  }}
							InputLabelProps={{
								className: classes.label
							}}
                        />    
						<TextField
          					select
							label="Select a Role*" 
							defaultValue="standard"
							className={classes.textField}
							value={form.role}
							onChange={handleChange}
							margin="normal"
							// InputProps={{
							// 	className: classes.input
							//   }}
							// InputLabelProps={{
							// 	className: classes.label
							// }}
							SelectProps={{
								  className: classes.select
							  }}
							variant="outlined">
								<MenuItem value="standard">Standard</MenuItem> 
                                <MenuItem value="mod">Mod</MenuItem> 
                                <MenuItem value="admin">Admin</MenuItem> 
        				</TextField>
                        <TextField 
							label="Organization"
							placeholder="Organization Name"
							className={classes.textField}
							variant="outlined"
							name = "org_name"
							margin="normal"
							onChange = {handleChange}
							InputProps={{
								className: classes.input
							  }}
							InputLabelProps={{
								className: classes.label
							}}
                        />
                        <TextField 
							label="Department"
							placeholder="e.g. Marketing Department"
							className={classes.textField}
							variant="outlined"
							name= "department"
							margin="normal"
							onChange = {handleChange}
							InputProps={{
								className: classes.input
							  }}
							InputLabelProps={{
								className: classes.label
							}}
                        />
                        <Button
                            className={classes.button}
                            variant="contained"
                            color="primary"
                            onClick={handleSubmit}
                        >
                            Confirm
                        </Button>
                    </FormControl>
                </Paper>
            </Container>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        profile: state.user.profile,
    }
}

export default connect(mapStateToProps, { onboard })(Onboarding);
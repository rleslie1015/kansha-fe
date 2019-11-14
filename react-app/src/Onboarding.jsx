import React, { useState } from 'react';
import { onboard } from './store/actions/user-actions';
import { connect } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Paper, Button, FormControl, TextField, Select, MenuItem, InputLabel } from '@material-ui/core';

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
    const [ form, setForm ] = useState({ first_name: "", last_name: "", job_title: "", department: "", email: "", org_name: "", user_type: "", password: ""});

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
                <Paper className={classes.paper}>
                    <Typography className={classes.typo} variant="h5">
                        Welome, Please specify your role. 
                    </Typography>
                    <FormControl>
                        <TextField 
                            label="First Name"
                            name = "first_name"
                            onChange = {handleChange}
                        />
                        <TextField 
                            label="Last Name"
                            name = "last_name"
                            onChange = {handleChange}
                        />
                        <TextField 
                            label="email"
                            name = "email"
                            onChange = {handleChange}
                        />
                        <TextField 
                            label="password"
                            name = "password"
                            onChange = {handleChange}
                        />
                        <TextField 
                            label="Job Title"
                            name= "job_title"
                            onChange = {handleChange}
                        />    
                        <FormControl>
                            <InputLabel id="Role-label"><em>Select A Role</em></InputLabel> 
                            <Select     
                                labelId="Role-label"
                                id="Role"
                                name="user_type"
                                value={form.role}
                                onChange={handleChange}
                            >
                                <MenuItem value="admin">Admin</MenuItem> 
                                <MenuItem value="mod">Mod</MenuItem> 
                                <MenuItem value="standard">Standard</MenuItem> 
                            </Select>
                        </FormControl>
                        <TextField 
                            label="Organization"
                            name = "org_name"
                            onChange = {handleChange}
                        />
                        <TextField 
                            label="Department"
                            name= "department"
                            onChange = {handleChange}
                        />
                        <Button
                            className={classes.button}
                            variant="contained"
                            color="primary"
                            onClick={handleSubmit}
                        >
                            Register
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
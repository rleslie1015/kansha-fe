import React, { useState } from 'react';
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

export default function Onboarding() {
    const classes = useStyles();
    const [ role, setRole ] = useState("");

    const handleChange = event => {
        setRole(event.target.value);
      };

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
                        />
                        <TextField 
                            label="Last Name"
                        />
                        <TextField 
                            label="Job Title"
                        />    
                        <FormControl>
                            <InputLabel value={role} id="Role-label"><em>Select A Role</em></InputLabel> 
                            <Select     
                                labelId="Role-label"
                                id="Role"
                                value={role}
                                onChange={handleChange}
                            >
                                <MenuItem value="admin">Admin</MenuItem> 
                                <MenuItem value="mod">Mod</MenuItem> 
                                <MenuItem value="standard">Standard</MenuItem> 
                            </Select>
                        </FormControl>
                        <TextField 
                            label="Organization"
                        />
                        <TextField 
                            label="Department"
                        />
                        <Button
                            className={classes.button}
                            variant="contained"
                            color="primary"
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
        profile: state.profile,
    }
}
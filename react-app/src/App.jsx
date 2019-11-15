import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Paper, Link } from '@material-ui/core';
import { Landing }  from './landing/Landing';
import { Route } from 'react-router-dom';



const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    },
    paper: {
        marginTop: '1rem'
    },
    typo: {
        padding: '1rem .5rem'
    }
}));

export const App = () => {
    const classes = useStyles()
    return (
        <div id="App" className={classes.root}>
            <Route exact path='/' component={Landing} />
            
        </div>
    );
};

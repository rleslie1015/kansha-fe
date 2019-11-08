import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Paper } from '@material-ui/core';


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
            <CssBaseline />
            <Container fixed>
                <Paper className={classes.paper}>
                    <Typography className={classes.typo} variant="h5">
                        Welcome to Kansha{' '}
                        <span aria-label="folded hands emoji" role="img">
                            🙏
                        </span>
                    </Typography>
                </Paper>
            </Container>
        </div>
    );
};

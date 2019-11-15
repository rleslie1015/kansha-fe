import React, { useEffect } from 'react';
import Auth from './Auth';
import { Container, Typography, Paper, Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { login } from './store/actions/user-actions';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        minHeight: '100%',
    },
    paper: {
        marginTop: '1rem',
    },
    typo: {
        display: 'flex',
        justifyContent: 'center',
        padding: '1rem .5rem',
    },
    userInfo: {
        display: 'flex',
        justifyContent: 'center',
        width: '600px'
    },
    profilePic: {
        
    }
}))

const auth = new Auth();

function Profile({ login, user }) {
    const classes = useStyles();

    useEffect(() => {
		auth.handleAuthentication();
        login(auth.getProfile());
    }, [login]);

    console.log({user})
    return (
        <div id="Profile">
            <Container fixed className={classes.root}>
                <Container fixed className={classes.leftContainer}>
                    <Card className={classes.userInfo}>
                        <Paper className={classes.paper}>
                            <img src={user.profile.picture} className={classes.profilePic} />
                            <Typography className={classes.typo} variant="h5">
                                Name: { user.profile.nickname }
                            </Typography>
                            <Typography className={classes.typo}>
                                Job Title
                            </Typography>
                            <Typography className={classes.typo}>
                                Department
                            </Typography>
                        </Paper>
                    </Card>
                    <Card className={classes.badges}>
                        <Paper className={classes.paper}>
                            <Typography className={classes.typo} variant="h5">
                            BADGES
                            </Typography>
                        </Paper>
                    </Card>
                </Container>
                <Container fixed className={classes.rightContainer}>
                    <Paper className={classes.paper}>
                        <Typography className={classes.typo} variant="h5">
                            Activity
                                <Card className={classes.recCard}>
                                    <Typography className={classes.typo}>
                                        Thanks!
                                    </Typography>
                                </Card>
                        </Typography>
                    </Paper>
                </Container>
            </Container>
        </div>
    )
}

export default connect(state => ({ ...state }), { login })(Profile);

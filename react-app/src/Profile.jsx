import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Container, Typography, Card, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { login } from './store/actions/user-actions';
import badge1 from './assests/badge1.png';
import 'typeface-montserrat';
import 'typeface-roboto';

const useStyles = makeStyles(theme => ({
    profileDiv: {
        backgroundColor: '#212121'
    },
    root: {
        display: 'flex',
        flexDirection: 'row',
        width: '100vw',
        minHeight: '100vh',
        paddingTop: '2.5rem',
    },
    leftContainer: {
        width: '50%',
    },
    userInfo: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#252525',
        padding: '3rem 0'
    },
    profilePic: {
        borderRadius: '100%',
        width: '45%',
        height: 'auto'
    },
    name: {
        display: 'flex',
        justifyContent: 'center',
        padding: '2.5rem 1rem 1.5rem 1rem',
        color: '#FFFFFF',
        fontFamily: 'Montserrat',
        fontStyle: 'SemiBold',
        fontSize: '35px',
        lineHeight: '16px',
        lineHeight: '38%',
        align: 'Center',
        verticalAlign: 'Top'
    },
    jobTitle: {
        display: 'flex',
        justifyContent: 'center',
        color: '#FFFFFF',
        fontFamily: 'Roboto',
        fontStyle: 'Regular',
        fontSize: '22px',
        lineHeight: '26px',
        lineHeight: '100%',
        align: 'Center',
        verticalAlign: 'Top'
    },
    department: {
        display: 'flex',
        justifyContent: 'center',
        color: '#FFFFFF',
        fontFamily: 'Roboto',
        fontStyle: 'Light',
        fontSize: '16px',
        lineHeight: '19px',
        lineHeight: '100%',
        align: 'Center',
        verticalAlign: 'Top'
    },
    badgeCard: {
        marginTop: '2.5rem',
        backgroundColor: '#252525',
        height: '30%',
    },
    typo: {
        display: 'flex',
        justifyContent: 'center',
        padding: '1rem 2rem',
        color: '#FFFFFF',
        fontFamily: 'Montserrat',
    },
    header: {
        display: 'flex',
        justifyContent: 'flex-start',
        padding: '1rem 2rem',
        color: '#FFFFFF',
        fontFamily: 'Montserrat',
        fontStyle: 'Bold',
        fontSize: '25px',
    },
    badgeContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: '2rem'
    },
    badgeImg: {
        backgroundColor: '#252525',
        width: '100%',
        height: 'auto',
        paddingTop: '1.5rem'
    },
    rightContainer: {
        width: '50%',
    },
    activityInfo: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '86%',
        backgroundColor: '#252525',
    },
    recCard: {
        backgroundColor: 'rgba(255, 255, 255, 0.04)',
        margin: '1rem 1rem 0 1rem',
    }
}))

function Profile({ login, user }) {
    const classes = useStyles();

    /* useEffect(() => {

		auth.handleAuthentication();
        login(auth.getProfile());
    }, [login]);

    console.log({user}) */
    return (
        <div id="Profile" className={classes.profileDiv}>
            <Container fixed className={classes.root}>
                <Container fixed className={classes.leftContainer}>
                    <Card className={classes.userInfo}>
                            <img src={user.profile.picture} className={classes.profilePic} />
                            <Typography className={classes.name} variant="h5">
                                { user.profile.nickname }
                            </Typography>
                            <Typography className={classes.jobTitle}>
                                Job Title
                            </Typography>
                            <Typography className={classes.department}>
                                Department
                            </Typography>
                    </Card>
                        <Card className={classes.badgeCard}>
                            <Typography className={classes.header} variant="h5">
                                Badges
                            </Typography>
                            <Container className={classes.badgeContainer}>
                                <Box>
                                    <img src={badge1} className={classes.badgeImg} />
                                </Box>
                                <Box>
                                    <img src={badge1} className={classes.badgeImg} />
                                </Box>
                                <Box>
                                    <img src={badge1} className={classes.badgeImg} />
                                </Box>
                                <Box>
                                    <img src={badge1} className={classes.badgeImg} />
                                </Box>
                            </Container>
                        </Card>
                </Container>
                <Container fixed className={classes.rightContainer}>
                    <Card className={classes.activityInfo}>
                        <Typography className={classes.header} variant="h5">
                            Activity
                        </Typography>        
                            <Card className={classes.recCard}>
                                <Typography className={classes.typo}>
                                    Thanks!
                                </Typography>
                            </Card>
                            <Card className={classes.recCard}>
                                <Typography className={classes.typo}>
                                    Thanks Again!
                                </Typography>
                            </Card>
                    </Card>
                </Container>
            </Container>
        </div>
    )
}

export default connect(state => ({ ...state }), { login })(Profile);

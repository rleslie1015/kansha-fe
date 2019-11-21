import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
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
        display: 'flex',
        backgroundColor: 'rgba(255, 255, 255, 0.04)',
        margin: '1rem 1rem 0 1rem',
        height: '13%'
    },
    recProfilePic: {
        borderRadius: '100%',
        width: '10%',
        padding: '1rem',
        height: 'auto'
    },
    recSender: {
        display: 'flex',
    },
    recCardUser: {
        padding: '1rem 2rem',
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '16px',
        lineHeight: '20px',
        color: '#FFFFFF',
    },
    recCardTime: {
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '16px',
        lineHeight: '20px',
        color: 'rgba(255, 255, 255, 0.5)',
        opacity: '0.5',
        padding: '1rem'
    },
    recCardMessage: {
        padding: '0 2rem',
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '16px',
        lineHeight: '20px',
        color: 'rgba(255, 255, 255, 0.7)',
    }
}))

function Profile(id) {
    const classes = useStyles();

    const [user, setUser] = useState([]);

    useEffect((id) => {
		axios
			.get('https://kansha-staging.herokuapp.com/users/:id')
			.then(res => {
				setUser(res.data);
				console.log(res);
			})
			.catch(err => {
				console.log(err);
			});
	});

    console.log(user)

    return (
        <div id="Profile" className={classes.profileDiv}>
            <Container fixed className={classes.root}>
                {/* This is the profile card with the image on the top lefthand side, profile picture and "username" are coming from Auth0*/}
                <Container fixed className={classes.leftContainer}>
                    <Card className={classes.userInfo}>
                            <img src={user.profile_picture} className={classes.profilePic} />
                            <Typography className={classes.name} variant="h5">
                                { user.first_name + user.last_name }
                            </Typography>
                            <Typography className={classes.jobTitle}>
                                { user.job_title}
                            </Typography>
                            <Typography className={classes.department}>
                                { user.department }
                            </Typography>
                    </Card>
                        {/* This is the badges card at the bottom of the lefthand side, and is currently hardcoded with badge pictures */}
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
                {/* This is the activity container on the righthand side and is currently hardcoded with rewards entries */}
                <Container fixed className={classes.rightContainer}>
                    <Card className={classes.activityInfo}>
                        <Typography className={classes.header} variant="h5">
                            Activity
                        </Typography>        
                            <Card className={classes.recCard}>
                                <img src={user.profile_picture} className={classes.recProfilePic} />
                                <Box>
                                    <Box className={classes.recSender}>
                                <Typography className={classes.recCardUser}>
                                    User1
                                </Typography>
                                <Typography className={classes.recCardTime}>
                                    1 Hour Ago
                                </Typography>
                                    </Box>
                                <Typography className={classes.recCardMessage}>
                                    Thanks!
                                </Typography>
                                </Box>
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

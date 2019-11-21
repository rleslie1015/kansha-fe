import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Container, Typography, Card, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import badge1 from './assests/badge1.png';
import 'typeface-montserrat';
import 'typeface-roboto';

const useStyles = makeStyles(theme => ({
    profileDiv: {
        backgroundColor: '#26242D'
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
        backgroundColor: '#2D2C35',
        padding: '3rem 0'
    },
    profilePic: {
        borderRadius: '100%',
        width: '45%',
        height: 'auto'
    },
    name: {
        paddingTop: '1.5rem',
        color: '#FFFFFF',
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontSize: '24px',
        lineHeight: '29px',
        textAlign: 'center',
    },
    jobTitle: {
        paddingTop: '.5rem',
        color: 'rgba(255, 255, 255, 0.7)',
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontSize: '24px',
        lineHeight: '29px',
        textAlign: 'center',
    },
    department: {
        paddingTop: '.5rem',
        color: 'rgba(255, 255, 255, 0.5)',
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontSize: '24px',
        lineHeight: '29px',
        fontWeight: '500',
        textAlign: 'Center',
        verticalAlign: 'Top'
    },
    badgeCard: {
        marginTop: '2.5rem',
        backgroundColor: '#2D2C35',
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
        backgroundColor: '#2D2C35',
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
        backgroundColor: '#2D2C35',
    },
    recCard: {
        display: 'flex',
        backgroundColor: '#3A3845',
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

function Profile({ profile }) {
    const classes = useStyles();

    const [user, setUser] = useState([]);
    

    useEffect(() => {
		axios({ url: 'https://kansha-staging.herokuapp.com/users/2', method: 'get', headers: {Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IlFVUkVSVGhHTnpBek9USXpNelUwTlRKRE1ERkJORGMzT1RFMFFUZEdOVGRFT1RZeVJFSTRSQSJ9.eyJnaXZlbl9uYW1lIjoiS2Fuc2hhIiwiZmFtaWx5X25hbWUiOiJMYWJzIiwibmlja25hbWUiOiJsYWJzMTgua2Fuc2hhIiwibmFtZSI6IkthbnNoYSBMYWJzIiwicGljdHVyZSI6Imh0dHBzOi8vbGg2Lmdvb2dsZXVzZXJjb250ZW50LmNvbS8tMHNWRW9zZEhnY0UvQUFBQUFBQUFBQUkvQUFBQUFBQUFBQUEvQUNIaTNyZXZScmE1MVdWS2ZSczV4dG9ybXBfNm1pVlBjQS9waG90by5qcGciLCJsb2NhbGUiOiJlbiIsInVwZGF0ZWRfYXQiOiIyMDE5LTExLTIxVDE4OjMyOjQ3LjM2MloiLCJpc3MiOiJodHRwczovL2thbnNoYS5hdXRoMC5jb20vIiwic3ViIjoiZ29vZ2xlLW9hdXRoMnwxMDI4MjY1MjM5NTQ4NzU5MjM1MDQiLCJhdWQiOiI3ekxFTEhBM0p5cnQ3TzVNNTYxSGdCZzNFalJzb1Q1SyIsImlhdCI6MTU3NDM2MTE2NywiZXhwIjoxNTc0Mzk3MTY3LCJhdF9oYXNoIjoicWdUcnZXYkxrSVByRm5DbS1IQnYwZyIsIm5vbmNlIjoicGV4cEVTT2NraDhBTGNpNVlhcjBjaUhoZ0MzelI5WkUifQ.ujAMQC4N0dRjS_Jey4G_vRD54iWXQH8DAgOCCAqZ5-eF77-zox9d2xFCtA0_izHqhvLiSEZJdgyvZ7Sop3W7YAOucy0RoR_yBZYFhaMUL0y2gc73NLfiBk9iM3guQ3ZrsI_A8HYv1AXmuog5HrbTFHygkhQRUhNcEI9l5WskTUElFnub1lXcVZDijepO3BYKi4lnviJHDzx_2ijvHXv3V7LJ0AWbXfwgVABPOaNpZ2qkxrujh5U7qW0-a3ggU36JsyozrzwvDT2oSwqBO2Zh6R57OjIzj1mCHKPLSWB83JHnCxmSczKLE_XjYPb4qhcQP9COA0rZ3TS0UpZTa1sjoA'} })
			.then(res => {
                setUser(res.data[0]);
			})
			.catch(err => {
				console.log(err);
			});
    }, []);

    console.log({user})

    return (
        <div id="Profile" className={classes.profileDiv}>
            <Container fixed className={classes.root}>
                {/* This is the profile card with the image on the top lefthand side, profile picture and "username" are coming from Auth0*/}
                <Container fixed className={classes.leftContainer}>
                    <Card className={classes.userInfo}>
                            <img src={profile.profile_picture} className={classes.profilePic} />
                            <Typography className={classes.name} variant="h5">
                                { profile.first_name } { profile.last_name }
                            </Typography>
                            <Typography className={classes.jobTitle}>
                                { profile.job_title} 
                            </Typography>
                            <Typography className={classes.department}>
                                { profile.department } 
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
                                <img src={profile.profile_picture} className={classes.recProfilePic} />
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

export default connect(({ user }) => ({...user}), {})(Profile);

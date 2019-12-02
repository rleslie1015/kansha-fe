import React from 'react';
import { connect } from 'react-redux';
import { Container, Typography, Card, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import badge1 from '../../assests/badge1.png';
import 'typeface-montserrat';
import 'typeface-roboto';
import { RecognitionCard } from './RecognitionCard';

const useStyles = makeStyles(theme => ({
	profileDiv: {
		backgroundColor: '#26242D',
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
		padding: '3rem 0',
	},
	profilePic: {
		borderRadius: '100%',
		width: '45%',
		height: 'auto',
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
		verticalAlign: 'Top',
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
		marginBottom: '2rem',
	},
	badgeImg: {
		backgroundColor: '#2D2C35',
		width: '100%',
		height: 'auto',
		paddingTop: '1.5rem',
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
		height: '13%',
	},
	recProfilePic: {
		borderRadius: '100%',
		width: '10%',
		padding: '1rem',
		height: 'auto',
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
		padding: '1rem',
	},
	recCardMessage: {
		padding: '0 2rem',
		fontFamily: 'Montserrat',
		fontStyle: 'normal',
		fontWeight: 'normal',
		fontSize: '16px',
		lineHeight: '20px',
		color: 'rgba(255, 255, 255, 0.7)',
	},
}));

function Profile({ profile }) {
	const classes = useStyles();

	return (
		<div id="Profile" className={classes.profileDiv}>
			<Container fixed className={classes.root}>
				{/* This is the profile card with the image on the top lefthand side, profile picture and "username" are coming from Auth0*/}
				<Container fixed className={classes.leftContainer}>
					<Card className={classes.userInfo}>
						<img
							src={profile.profile_picture}
                            className={classes.profilePic}
                            alt="user profile"
						/>
						<Typography className={classes.name} variant="h5">
							{profile.first_name} {profile.last_name}
						</Typography>
						<Typography className={classes.jobTitle}>
							{profile.job_title}
						</Typography>
						<Typography className={classes.department}>
							{profile.department}
						</Typography>
					</Card>
					{/* This is the badges card at the bottom of the lefthand side, and is currently hardcoded with badge pictures */}
					<Card className={classes.badgeCard}>
						<Typography className={classes.header} variant="h5">
							Badges
						</Typography>
						<Container className={classes.badgeContainer}>
							<Box>
								<img
									src={badge1}
									className={classes.badgeImg}
									alt="badge of recgonition"
								/>
							</Box>
							<Box>
								<img
									src={badge1}
									className={classes.badgeImg}
									alt="badge of recgonition"
								/>
							</Box>
							<Box>
								<img
									src={badge1}
									className={classes.badgeImg}
									alt="badge of recgonition"
								/>
							</Box>
							<Box>
								<img
									src={badge1}
									className={classes.badgeImg}
									alt="badge of recgonition"
								/>
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
						{profile &&
							profile.rec.map(recognition => (
								<RecognitionCard
									profile={profile}
									recognition={recognition}
								/>
							))}
					</Card>
				</Container>
			</Container>
		</div>
	);
}

export default connect(({ user }) => ({ ...user }), {})(Profile);

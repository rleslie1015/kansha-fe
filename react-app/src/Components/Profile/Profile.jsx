import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { Container, Typography, Card, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import 'typeface-montserrat';
import 'typeface-roboto';
import { FileUpload } from '../FileUpload'
import { RecognitionCard } from './RecognitionCard';
import { login} from '../../store/actions/user-actions'

const useStyles = makeStyles(theme => ({
	profileDiv: {
		backgroundColor: '#26242D',
	},
	root: {
		display: 'flex',
		flexDirection: 'row',
		width: '100vw',
		maxHeight: '100vh',
		paddingTop: '2.5rem',
		'@global': {
			'*::-webkit-scrollbar': {
			  width: '.5rem',
			},
			'*::-webkit-scrollbar-corner': {
			  backgroundColor: 'transparent'	
			},
			'*::-webkit-scrollbar-thumb': {
			  backgroundColor: '#3A3845',
			  borderRadius: '10px',
			}
		},
	},
	leftContainer: {
		display: 'flex',
		flexDirection: 'column',
		width: '50%',
		height: '90vh',
	},
	userInfo: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		width: '100%',
		height: 'auto',
		backgroundColor: '#2D2C35',
		padding: '3rem 0',
	},
	pictureContainer: {
		position: 'relative',
		width: '50%',
		borderRadius: '100%',
		'&:hover': {
			cursor: 'pointer',
		},
	},
	profilePic: {
		borderRadius: '100%',
		// Hard coding until we can make a circle img cropper for users
		width: '272px',
		height: '272px',
		background: 'linear-gradient(135deg, #EE4D71 0%, #F15A3F 100%)',
		objectFit: 'cover',
  		objectPosition: '50% 50%',
	},
	camera: {
		width: '100%',
		height: 'auto',
	},
	addPic: {
		opacity: 0,
		borderRadius: '100%',
		position: 'absolute',
		transform: 'translate(0, -100%)',
		'&:hover': {
			opacity: 1,
			transition: '0.5s ease',
		},
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
		paddingBottom: '3rem',
	},
	badgeCard: {
		marginTop: '2.5rem',
		backgroundColor: '#2D2C35',
		height: '44%',
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
		height: 'auto',
	},
	activityInfo: {
		display: 'flex',
		flexDirection: 'column',
		
		width: '100%',
		height: '100%',
		backgroundColor: '#2D2C35',
	},
	activityContainer: {
		overflow: 'scroll',
	},
}));

function Profile({ profile, login }) {
	const classes = useStyles();

	useEffect(() => {
		
	}, [login])

	return (
		<div id="Profile" className={classes.profileDiv}>
			{/* <Link to="/workspace">workspace</Link> */}
			<Container fixed className={classes.root}>
				{/* This is the profile card with the image on the top lefthand side, profile picture and "username" are coming from Auth0*/}
				<Container fixed className={classes.leftContainer}>
					<Card className={classes.userInfo}>
						<div className={classes.pictureContainer}>
							<img
								src={profile.profile_picture}
								className={classes.profilePic}
								alt="user profile"
							/>
							<div className={classes.addPic}>
								<img
									src= 'https://kansha-bucket.s3-us-west-1.amazonaws.com/hoverimage.png'
									className={classes.camera}
									alt="upload icon"
								/>
								<FileUpload />
							</div>
							
						</div>
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
						</Container>
					</Card>
				</Container>
				{/* This is the activity container on the righthand side and is currently hardcoded with rewards entries */}
				<Container fixed className={classes.rightContainer}>
					<Card className={classes.activityInfo}>
						<Typography className={classes.header} variant="h5">
							Activity
						</Typography>
						<Box className={classes.activityContainer}>
						{profile &&
							profile.rec.reverse().map(recognition => (
								<RecognitionCard
									key={recognition.id}
									sent={profile.id === recognition.sender}
									profile={profile}
									recognition={recognition}
								/>
							))}
						</Box>
					</Card>
				</Container>
			</Container>
		</div>
	);
}

export default connect(({ user }) => ({ ...user }), { login })(Profile);

import React, { useMemo } from 'react';
import { Card, Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { timeAgo } from '../../utils/timeago';

const useStyles = makeStyles(theme => ({
	recCard: {
		display: 'flex',
		alignItems: 'center',
		backgroundColor: '#3A3845',
		margin: '1rem 1rem 1rem 1rem',
		maxHeight: '30%',
		height: 'auto',
		padding: '.5rem',
	},
	recCardSent: {
		display: 'flex',
		flexDirection: 'row-reverse',
		backgroundColor: '#3A3845',
		margin: '1rem 1rem 0 1rem',
		height: '13%',
	},
	recIcon: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		width: '25%',
		height: '100%',
		padding: '1rem 1rem 1rem 0',
	},
	recProfilePic: {
		borderRadius: '100%',
		width: '70%',
		maxWidth: '75px',
		maxHeight: '75px',
		display: 'flex',
		justifyContent: 'flex-start',
	},
	recSentLogo: {
		borderRadius: '100%',
		width: '70%',
		maxWidth: '75px',
		maxHeight: '75px',
	},
	recSender: {
		display: 'flex',
	},
	recCardUser: {
		fontFamily: 'Montserrat',
		fontStyle: 'normal',
		fontWeight: 'normal',
		fontSize: '20px',
		lineHeight: '20px',
		color: '#FFFFFF',
	},
	recInfo: {
		display: 'flex',
		flexDirection: 'column',
		width: '70%',
		margin: '.5rem 0 .5rem 0',
	},
	recCardTime: {
		fontFamily: 'Montserrat',
		fontStyle: 'normal',
		fontWeight: 'normal',
		fontSize: '16px',
		lineHeight: '20px',
		color: 'rgba(255, 255, 255, 0.5)',
		opacity: '0.5',
		width: '100%',
		paddingTop: '.5rem',

	},
	recCardMessage: {
		fontFamily: 'Montserrat',
		fontStyle: 'normal',
		fontWeight: 'normal',
		fontSize: '16px',
		lineHeight: '20px',
		color: 'rgba(255, 255, 255, 0.7)',
		width: '90%',
		paddingTop: '.5rem',
	},
}));

export function RecognitionCard({ profile, recognition, sent }) {
	const classes = useStyles();
	const time = useMemo(() => timeAgo(recognition.date), [recognition]);

	return (
		<Card className={classes.recCard}>
			<Box class={classes.recIcon}>
				<img
					src={
						sent ? 'https://kansha-bucket.s3-us-west-1.amazonaws.com/avatar.png'
                        : recognition.profile_pic
					}
					className={
						sent ? classes.recSentLogo : classes.recProfilePic
					}
					alt="user avatar"
				/>
			</Box>
			<Box className={classes.recInfo}>
				<Box className={classes.recSender}>
					<Typography className={classes.recCardUser}>
						{ sent ? `Sent to ${recognition.first_name} ${recognition.last_name}` : `${recognition.first_name} ${recognition.last_name}`}
					</Typography>
				</Box>
					<Box className={classes.message}>
				<Typography className={classes.recCardMessage}>
					{recognition.message}
				</Typography>
					</Box>
					<Box className={classes.time}>
				<Typography className={classes.recCardTime}>{time}</Typography>
					</Box>
			</Box>
		</Card>
	);
}

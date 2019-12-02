import React, { useMemo } from 'react';
import { Card, Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { timeAgo } from '../../utils/timeago';

const useStyles = makeStyles(theme => ({
	recCard: {
		display: 'flex',
		alignItems: 'center',
		backgroundColor: '#3A3845',
		margin: '1rem 1rem 0 1rem',
		height: '13%',
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
		padding: '1rem;',
	},
	recProfilePic: {
		borderRadius: '100%',
		width: '75%',
	},
	recSentLogo: {
        boxSizing: 'border-box',
		borderRadius: '100%',
        width: '25%',
        padding: '0 1rem',
		background: 'linear-gradient(135deg, #EE4D71 0%, #F15A3F 100%)',
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

export function RecognitionCard({ profile, recognition, sent }) {
	const classes = useStyles();
	const time = useMemo(() => timeAgo(recognition.date), [recognition]);

	return (
		<Card className={classes.recCard}>
			<Box class={classes.recIcon}>
				<img
					src={
						sent ? 'https://kansha-bucket.s3-us-west-1.amazonaws.com/SentLogo.svg'
                        : recognition.profile_pic
					}
					className={
						sent ? classes.recSentLogo : classes.recProfilePic
					}
					alt="user avatar"
				/>
			</Box>
			<Box>
				<Box className={classes.recSender}>
					<Typography className={classes.recCardUser}>
						{`${recognition.first_name} ${recognition.last_name}`}
					</Typography>
				</Box>
				<Typography className={classes.recCardMessage}>
					{recognition.message}
				</Typography>
				<Typography className={classes.recCardTime}>{time}</Typography>
			</Box>
		</Card>
	);
}

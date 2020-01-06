import React, { useMemo, useEffect, useState } from 'react';
import { Card, Box, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import { timeAgo } from '../../utils/timeago';
import trashcan from '../../assets/Trashcan.png'
import { useSelector } from 'react-redux';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

const useStyles = makeStyles(theme => ({
	recCard: {
		display: 'flex',
		alignItems: 'center',
		backgroundColor: '#3A3845',
		margin: '1rem 1rem 1rem 1rem',
		// maxHeight: '30%',
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
		// Hard coding until we can make a circle img cropper for users
		width: '75%',
		maxWidth: '75px',
		maxHeight: '75px',
		background: 'linear-gradient(135deg, #EE4D71 0%, #F15A3F 100%)',
		objectFit: 'cover',
		objectPosition: '50% 50%',
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
		position: 'relative',
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
		textTransform: 'uppercase',
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
		wordWrap: 'break-word'
	},
	deleteIcon: {
		position: 'absolute',
		top: '0px',
		right: '0px',
	},
	trashcan: {
		width: '20px',
		height: 'auto',
	},
	recBadgeBox: {
		paddingTop: '.5rem'
	},
	recBadgeImg: {
		width: '20%',
	},
}));

export function RecognitionCard({ recognition, sent, badge }) {
	const classes = useStyles();
	const time = useMemo(() => timeAgo(recognition.date), [recognition]);
	const history = useHistory()
	const profile = useSelector(state => state.user.profile)
	
	const handleDelete = (rec) => {
		// this will need to be turned into a confirmation modal, like the one on the figma.
		if(window.confirm('Are you sure you would like to delete this recognition?')){
		axiosWithAuth()
			.delete(`/rec/${rec.id}`)
			.then(() => {
				// i dunno how to get the user id of said profile.... 
				// is coming up object object
				// will figure out later... 
				history.push(`/profile/${rec.sender}`)
			})
		}
	}

	if(profile.user_type === 'admin'){
	return (
		<Card className={classes.recCard}>
			<Box class={classes.recIcon}>
				<img
					src={
						sent
							? 'https://kansha-bucket.s3-us-west-1.amazonaws.com/avatar.png'
							: recognition.profile_pic
					}
					className={
						sent ? classes.recSentLogo : classes.recProfilePic
					}
					onClick={()=>{ history.push(`/profile/${sent ? recognition.recipient : recognition.sender }`)}}
					alt="user avatar"
				/>
			</Box>

			<Box className={classes.recInfo}>
				<Box className={classes.deleteIcon} >
					<img src={trashcan} alt='trash can icon' className={classes.trashcan} onClick={() => handleDelete(recognition)}/>
				</Box>
				<Box className={classes.recSender}>
					<Typography className={classes.recCardUser} onClick={()=>{ history.push(`/profile/${sent ? recognition.recipient : recognition.sender }`)}}>
						{sent
							? `Sent to ${recognition.first_name} ${recognition.last_name}`
							: `${recognition.first_name} ${recognition.last_name}`}
					</Typography>
				</Box>
				<Box className={classes.message}>
					<Typography className={classes.recCardMessage}>
						{recognition.message}
					</Typography>
				</Box>
				{badge &&
					<Box className={classes.recBadgeBox}>
						<img src={badge.badge_URL} alt={badge.badge_name} className={classes.recBadgeImg} />
					</Box>
				}
				<Box className={classes.time}>
					<Typography className={classes.recCardTime}>
						{time}
					</Typography>
				</Box>
			</Box>
		</Card>
	);
	} else if(profile.user_type === 'mod' && profile.department === recognition.department) {
		return (
			<Card className={classes.recCard}>
				<Box class={classes.recIcon}>
					<img
						src={
							sent
								? 'https://kansha-bucket.s3-us-west-1.amazonaws.com/avatar.png'
								: recognition.profile_pic
						}
						className={
							sent ? classes.recSentLogo : classes.recProfilePic
						}
					onClick={()=>{ history.push(`/profile/${sent ? recognition.recipient : recognition.sender }`)}}
						alt="user avatar"
					/>
				</Box>
				<Box className={classes.recInfo}>
					<Box className={classes.deleteIcon} >
						<img src={trashcan} alt='trash can icon' className={classes.trashcan} onClick={() => handleDelete(recognition)}/>
					</Box>
					<Box className={classes.recSender}>
						<Typography className={classes.recCardUser} onClick={()=>{ history.push(`/profile/${sent ? recognition.recipient : recognition.sender }`)}}>
							{sent
								? `Sent to ${recognition.first_name} ${recognition.last_name}`
								: `${recognition.first_name} ${recognition.last_name}`}
						</Typography>
					</Box>
					<Box className={classes.message}>
						<Typography className={classes.recCardMessage}>
							{recognition.message}
						</Typography>
					</Box>
					{badge &&
						<Box className={classes.recBadgeBox}>
							<img src={badge.badge_URL} alt={badge.badge_name} className={classes.recBadgeImg} />
						</Box>
					}
					<Box className={classes.time}>
						<Typography className={classes.recCardTime}>
							{time}
						</Typography>
					</Box>
				</Box>
			</Card>
		);
	} else {
		return (
			<Card className={classes.recCard}>
				<Box class={classes.recIcon}>
					<img
						src={
							sent
								? 'https://kansha-bucket.s3-us-west-1.amazonaws.com/avatar.png'
								: recognition.profile_pic
						}
						className={
							sent ? classes.recSentLogo : classes.recProfilePic
						}
						onClick={()=>{ history.push(`/profile/${sent ? recognition.recipient : recognition.sender }`)}}
						alt="user avatar"
					/>
				</Box>
				<Box className={classes.recInfo}>
					<Box className={classes.recSender}>
						<Typography className={classes.recCardUser} onClick={()=>{ history.push(`/profile/${sent ? recognition.recipient : recognition.sender }`)}}>
							{sent
								? `Sent to ${recognition.first_name} ${recognition.last_name}`
								: `${recognition.first_name} ${recognition.last_name}`}
						</Typography>
					</Box>
					<Box className={classes.message}>
						<Typography className={classes.recCardMessage}>
							{recognition.message}
						</Typography>
					</Box>
					{badge &&
						<Box className={classes.recBadgeBox}>
							<img src={badge.badge_URL} alt={badge.badge_name} className={classes.recBadgeImg} />
						</Box>
					}
					<Box className={classes.time}>
						<Typography className={classes.recCardTime}>
							{time}
						</Typography>
					</Box>
				</Box>
			</Card>
		);
	}
}

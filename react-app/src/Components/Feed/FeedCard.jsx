import React, { useEffect, memo, useMemo } from 'react';
import {
	Typography,
	Card,
	IconButton,
	Box,
	Container,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { loadPostData } from '../../store/actions/feed-actions';
import { ReactionButton } from './ReactionButton';
import { timeAgo } from '../../utils/timeago';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import Trashcan from '../../assets/Trashcan.png'

import AddCommentOutlinedIcon from '@material-ui/icons/AddCommentOutlined';

const useStyles = makeStyles(theme => ({
	FeedCard: {
		boxSizing: 'border-box',
		justifyContent: 'flex-start',
		maxWidth: '100%',
		display: 'flex',
		padding: '20px',
		color: '#FFFFFF',
		background: '#2D2C35',
		margin: '10px 10px',
		'&:first-child': {
			marginTop: '0px'
		},
		'&:last-child': {
			marginBottom: '0px'
		}
	},
	FeedCardActive: {
		background: '#34323E',
	},
	FeedCardPicture: {
		boxSizing: 'border-box',
		position: 'relative',
		width: '100px',
		padding: 0
	},
	FeedCardContent: {
		boxSizing: 'border-box',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		width: 'calc(100% - 100px)',
		wordWrap: 'break-word',
	},
	ButtonBox: {
		boxSizing: 'border-box',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-end',
		width: '100%',
	},
	CommentButton: {
		display: 'flex',
		justifyContent: 'space-between',
		backgroundColor: 'rgba(80, 80, 80, 0.21)',
		padding: '2px 8px',
		borderRadius: '30px',
		width: '60px'
	},
	CommentIcon: {
		boxSizing: 'border-box',
		color: '#FFFFFF;',
		height: '22px',
		margin: 0,
		padding: 0,
	},
	Count: {
		boxSizing: 'border-box',
		fontFamily: 'Montserrat',
		fontStyle: 'normal',
		fontWeight: '500',
		fontSize: '16px',
		lineHeight: '22px',
		display: 'flex',
		alignItems: 'center',
		letterSpacing: '0.1px',
		color: 'rgba(255, 255, 255, 0.7)',
		margin: 0,
		padding: 0,
		paddingLeft: '5px',
		paddingTop: '1px',
	},
	Name: {
		boxSizing: 'border-box',
		color: '#EE4D71',
		textDecoration: 'none',
		'& :visited': {
			color: '#EE4D71',
		},
	},
	ProfilePic: {
		boxSizing: 'border-box',
		position: 'absolute',
		borderRadius: '100%',
		width: '40px',
		height: '40px',
		background: 'linear-gradient(135deg, #EE4D71 0%, #F15A3F 100%)',
		objectFit: 'cover',
		objectPosition: '50% 50%',
	},
	SentProfilePic: {
		left: '15px',
	},
	ReceivedProfilePic: {
		right: '15px',
	},
	Info: {
		boxSizing: 'border-box',
		fontFamily: 'Montserrat',
		fontStyle: 'normal',
		fontWeight: '500',
		fontSize: '16px',
		lineHeight: '15px',
		position: 'relative',
	},
	TimeStamp: {
		/* Body */
		boxSizing: 'border-box',
		fontFamily: 'Montserrat',
		fontStyle: 'normal',
		fontHeight: 'normal',
		fontSize: '16px',
		lineHeight: '20px',
		color: 'rgba(255, 255, 255, 0.5)',
		marginLeft: '10px'
	},
	Trashcan: {
		width: '17px',
		height: 'auto',
		position: 'absolute',
		top: '0',
		right: '10px',
	},
	feedBadgeBox: {
		paddingTop: '1rem',
		marginBottom: '-30px',
	},
	feedBadgeImg: {
		width: '17%',
	},
}));

export const FeedCard = memo(({ rec, badge, comments, reactions, profile, setSelectedRec, active }) => {
	const classes = useStyles();
	const { id: rec_id } = rec;
	const dispatch = useDispatch();
	useEffect(() => {
		if (!(reactions || comments)) {
			dispatch(loadPostData(rec_id));
		}
	}, [dispatch, rec_id, reactions, comments]);
	const time = useMemo(() => timeAgo(rec.date), [rec]);

	const handleDelete = id => {
		if(window.confirm('Are you sure you would like to delete this recognition?')){
		axiosWithAuth()
			.delete(`/rec/${id}`)
			.then(() => {
				//matt do work here.... :) 
			})
		}
	}

	if(profile.user_type === 'admin') {
		return (
			<Card className={clsx(classes.FeedCard,{[classes.FeedCardActive]: active})}>
				<Container className={classes.FeedCardPicture}>
					<Box>
						<img
							className={clsx(classes.SentProfilePic, classes.ProfilePic)}
							src={rec.profile_picture}
							alt="sender"
						/>
						<img
							className={clsx(classes.ReceivedProfilePic, classes.ProfilePic)}
							src={rec.recipient_picture}
							alt="recipient"
						/>
					</Box>
				</Container>
				<Container className={classes.FeedCardContent}>
					<Typography className={classes.Info}>
						<Link
							className={classes.Name}
							to={`/profile/${rec.sender}`}>
							{rec.first_name} {rec.last_name}
						</Link>{' '}
						sent to{' '}
						<Link
							className={classes.Name}
							to={`/profile/${rec.recipient}`}>
							{rec.recipient_first} {rec.recipient_last}
						</Link>{' '}
						<span className={classes.TimeStamp}>{time}</span>
						<img 
							src={Trashcan} 
							alt='trash can icon'
							onClick={() => handleDelete(rec.id)}
							className={classes.Trashcan}
						/>
					</Typography>
					<Typography>{rec.message}</Typography>
					{badge &&
						<Box className={classes.feedBadgeBox}>
							<img src={badge.badge_URL} className={classes.feedBadgeImg} />		
						</Box>
					}
					<Box className={classes.ButtonBox}>
						{comments && (
							<IconButton onClick={() => setSelectedRec(rec_id)} className={classes.CommentButton}>
								<AddCommentOutlinedIcon
									className={classes.CommentIcon}
								/>
								<Typography className={classes.Count}>
									{comments.length}
								</Typography>
							</IconButton>
						)}
						{reactions && (
							<>
								<ReactionButton
									id={profile.id}
									rec_id={rec_id}
									reactions={reactions}
								/>
							</>
						)}
					</Box>
				</Container>
				{/*
				<button onClick={() => dispatch(addComment(rec_id, comment))}>
					comment
				</button>
				*/}
			</Card>
		);
	} else {
		return (
			<Card className={clsx(classes.FeedCard,{[classes.FeedCardActive]: active})}>
				<Container className={classes.FeedCardPicture}>
					<Box>
						<img
							className={clsx(classes.SentProfilePic, classes.ProfilePic)}
							src={rec.profile_picture}
							alt="sender"
						/>
						<img
							className={clsx(classes.ReceivedProfilePic, classes.ProfilePic)}
							src={rec.recipient_picture}
							alt="recipient"
						/>
					</Box>
				</Container>
				<Container className={classes.FeedCardContent}>
					<Typography className={classes.Info}>
						<Link
							className={classes.Name}
							to={`/profile/${rec.sender}`}>
							{rec.first_name} {rec.last_name}
						</Link>{' '}
						sent to{' '}
						<Link
							className={classes.Name}
							to={`/profile/${rec.recipient}`}>
							{rec.recipient_first} {rec.recipient_last}
						</Link>{' '}
						<span className={classes.TimeStamp}>{time}</span>
					</Typography>
					<Typography>{rec.message}</Typography>
					{badge &&
						<Box className={classes.feedBadgeBox}>
							<img src={badge.badge_URL} className={classes.feedBadgeImg} />		
						</Box>
					}
					<Box className={classes.ButtonBox}>
						{comments && (
							<IconButton onClick={() => setSelectedRec(rec_id)} className={classes.CommentButton}>
								<AddCommentOutlinedIcon
									className={classes.CommentIcon}
								/>
								<Typography className={classes.Count}>
									{comments.length}
								</Typography>
							</IconButton>
						)}
						{reactions && (
							<>
								<ReactionButton
									id={profile.id}
									rec_id={rec_id}
									reactions={reactions}
								/>
							</>
						)}
					</Box>
				</Container>
				{/*
				<button onClick={() => dispatch(addComment(rec_id, comment))}>
					comment
				</button>
				*/}
			</Card>
		);
	}
});

import React, { useMemo } from 'react';
import { makeStyles, Box, Typography, Container } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { timeAgo } from '../../utils/timeago';


const useStyles = makeStyles(theme => ({
	Comment: {
		boxSizing: 'border-box',
		maxWidth: '100%',
        display: 'flex',
		color: '#FFFFFF',
        background: '#34323E',
        padding: '20px',
		'&:first-child': {
            paddingTop: 'unset'
        },
        '&:last-child': {
            marginBottom: '0px'
        },
        width: '100%',
        justifyContent: 'stretch',
	},
	CommentPicture: {
        boxSizing: 'border-box',
        width: '60px',
        padding: 0,
        margin: 0,
	},
	CommentContent: {
		boxSizing: 'border-box',
		display: 'flex',
		flexDirection: 'column',
        justifyContent: 'space-between',
        width: 'auto',
        padding: 0,
        margin: 0,
    },
    CommentContentTop: {
        marginBottom: '5px'
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
		borderRadius: '100%',
		// Hard coding until we can make a circle img cropper for users
		width: '40px',
		height: '40px',
		background: 'linear-gradient(135deg, #EE4D71 0%, #F15A3F 100%)',
		objectFit: 'cover',
		objectPosition: '50% 50%',
	},
	Info: {
		boxSizing: 'border-box',
		fontFamily: 'Montserrat',
		fontStyle: 'normal',
		fontWeight: '500',
		fontSize: '16px',
		lineHeight: '20px',
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
		marginLeft: '10px',
	},
}));

export const Comment = ({ comment }) => {
	const classes = useStyles();
	const time = useMemo(() => timeAgo(comment.date), [comment]);

	return (
		<Container className={classes.Comment}>
			<Container className={classes.CommentPicture}>
					<img
						className={classes.ProfilePic}
						src={comment.profile_picture}
						alt="sender"
					/>
			</Container>
			<Container className={classes.CommentContent}>
				<Box className={classes.CommentContentTop}>
					<Link
						className={classes.Name}
						to={`/profile/${comment.user_id}`}>
						{comment.first_name} {comment.last_name}
					</Link>
					<span className={classes.TimeStamp}>{time}</span>
				</Box>
				<Typography>{comment.message}</Typography>
			</Container>
		</Container>
	);
};

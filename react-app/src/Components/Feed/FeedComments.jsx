import React from 'react';
import {
	Card,
	makeStyles,
	Typography,
	Box
} from '@material-ui/core';
import { Comment } from './Comment';
import { SendComments } from './SendComment';

const useStyles = makeStyles(theme => ({
	CommentCard: {
		position: 'relative',
		display: 'flex',
		flexDirection: 'column',
		width: '40%',
		padding: '0',
		color: '#FFFFFF',
		background: '#34323E',
		margin: '10px 10px',
		paddingBottom: '74px',
	},
	CommentHeading: {
		background: '#2D2C35',
		padding: '20px',
	},
	CommentHeadingText: {
		fontFamily: 'Montserrat',
		fontStyle: 'normal',
		fontWeight: 'normal',
		fontSize: '24px',
		lineHeight: '29px',
		color: '#FFFFFF',
	},
	CommentsContainer: {
		paddingTop: '10px',
		overflowY: 'scroll',
		overflowx: 'hidden',
	},
	SendCommentsContainer: {
		width: '100%',
		margin: 0,
		padding: '10px',
		position: 'absolute',
		bottom: 0,
		background: '#34323E',
	},
	SendComments: {
		boxSizing: 'border-box',
		display: 'flex',
		justifyContent: 'stretch',
		alignItems: 'center',
		padding: '10px',
		border: '1px solid #6A6487',
		borderRadius: '8px',
	},
	SendCommentInput: {
		width: 'calc(100% - 60px)',
		color: '#FFFFFF',
		'& ::placeholder': {
			fontFamily: 'Montserrat',
			fontStyle: 'normal',
			fontWeight: '300',
			fontSize: '16px',
			lineHeight: '20px',
			color: 'rgba(255, 255, 255, 0.5)',
		},
	},
	SendCommentButton: {
		width: '60px',
		background: '#2D2C35',
		borderRadius: '3px',
		fontFamily: 'Montserrat',
		fontStyle: 'normal',
		fontWeight: 'normal',
		fontSize: '13px',
		lineHeight: '16px',
		textAlign: 'center',
		color: '#FFFFFF',
		border: 'none',
		padding: '4px 0',
		cursor: 'pointer',
	},
}));

export const FeedComments = ({ comments, id, profile }) => {
	const classes = useStyles();
	return (
		<Card className={classes.CommentCard}>
			<Box className={classes.CommentHeading}>
				<Typography className={classes.CommentHeadingText}>
					Comments
				</Typography>
			</Box>
			<div className={classes.CommentsContainer}>
				{comments.map(comment => (
					<Comment comment={comment} profile={profile}/>
				))}
			</div>
			<SendComments id={id}/>
		</Card>
	);
};

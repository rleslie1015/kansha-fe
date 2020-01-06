import React, { useState } from 'react';
import { makeStyles, Box, InputBase } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { addComment } from '../../store/actions/feed-actions';

const useStyles = makeStyles(theme => ({
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

export const SendComments = ({ id, scrollToBottom }) => {
	const [newComment, setNewComment] = useState('');
	const classes = useStyles();
	const dispatch = useDispatch();
	const handleSubmit = event => {
		dispatch(addComment(id, newComment, sendSuccess));
	};
	const handleInput = event => {
		setNewComment(event.target.value);
	};
	const sendSuccess = () => {
		setNewComment('');
		scrollToBottom()
	}
	return (
		<Box className={classes.SendCommentsContainer}>
			<div className={classes.SendComments}>
				<InputBase
					multiline
					placeholder="Write a comment..."
					className={classes.SendCommentInput}
					value={newComment}
                    onChange={handleInput}
                    inputProps={{maxLength: 255}}
				/>
				<button
					onClick={handleSubmit}
					className={classes.SendCommentButton}>
					Submit
				</button>
			</div>
		</Box>
	);
};

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addComment } from '../../store/actions/feed-actions';

export const SendComments = ({ id, scrollToBottom }) => {
	const [newComment, setNewComment] = useState('');
	const dispatch = useDispatch();
	const handleSubmit = event => {
		dispatch(addComment(id, newComment, sendSuccess));
	};
	const handleInput = event => {
		setNewComment(event.target.value);
	};
	const sendSuccess = () => {
		setNewComment('');
		scrollToBottom();
	};
	return (
		<div className="send-comments-container">
			<div className="send-comments">
				<input
					multiline
					placeholder="Write a comment..."
					className="send-comment-input"
					value={newComment}
					onChange={handleInput}
					inputProps={{ maxLength: 255 }}
				/>
				<button onClick={handleSubmit} className="send-comment-button">
					Submit
				</button>
			</div>
		</div>
	);
};

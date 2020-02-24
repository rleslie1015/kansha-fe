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
		<div>
			<div>
				<textarea
					placeholder="Write a comment..."
					value={newComment}
					onChange={handleInput}
				/>
				<button onClick={handleSubmit}>Submit</button>
			</div>
		</div>
	);
};

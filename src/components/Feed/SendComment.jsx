import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addComment } from '../../store/actions/feed-actions';

export const SendComments = ({ id, scrollToBottom }) => {
	const [newComment, setNewComment] = useState('');

	const dispatch = useDispatch();

	const handleInput = event => {
		setNewComment(event.target.value);
	};

	const handleSubmit = event => {
		event.preventDefault();
		console.log(newComment);
		dispatch(addComment(id, newComment, sendSuccess));
	};

	const sendSuccess = () => {
		setNewComment('');
		scrollToBottom();
	};
	return (
		<section className="rm-comment-box">
			<textarea
				//we want to be able to use the AddComment svg inside the placeholder
				placeholder={`Type message here`}
				value={newComment}
				onChange={handleInput}
			/>
			<button className="btn-modal" onClick={handleSubmit}>
				Send
			</button>
		</section>
	);
};

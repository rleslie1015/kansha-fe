import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addComment } from '../../store/actions/feed-actions';

export const SendComments = ({
	id,
	scrollToBottom,
	messageSent,
	setMessageSent,
}) => {
	const [newComment, setNewComment] = useState('');

	const dispatch = useDispatch();

	const handleInput = event => {
		setNewComment(event.target.value);
	};

	const handleSubmit = event => {
		event.preventDefault();
		dispatch(addComment(id, newComment, sendSuccess));
		setMessageSent(true);
		//on handleSumbit, also setState to having sent message so to close the textarea
	};

	const sendSuccess = () => {
		setNewComment('');
		scrollToBottom();
	};
	return (
		<>
			{!messageSent && (
				<section className="rm-comment-box">
					<textarea
						//we want to be able to use the AddComment svg inside the placeholder
						placeholder="Type message here"
						value={newComment}
						onChange={handleInput}
						maxLength="140"
					/>
					<button
						className="btn-onboarding-confirm"
						onClick={handleSubmit}>
						Send
					</button>
				</section>
			)}
		</>
	);
};

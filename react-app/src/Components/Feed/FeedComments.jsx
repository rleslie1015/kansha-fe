import React from 'react';
import { Comment } from './Comment';
import { SendComments } from './SendComment';
import { useRef } from 'react';

export const FeedComments = ({ comments, id, profile, close }) => {
	const containerRef = useRef();
	const scrollToBottom = () => {
		const { current } = containerRef;
		current.scrollTop = current.scrollHeight;
	};
	return (
		<div className="comment-card">
			<div className="comment-heading">
				<div className="comment-heading-text">Comments</div>
				<img
					src="https://kansha-bucket.s3-us-west-1.amazonaws.com/x.png"
					onClick={close}
					className="close-button"
					alt="close button"
				/>
			</div>
			<div ref={containerRef} className="comments-container">
				{comments.map(comment => (
					<Comment comment={comment} profile={profile} />
				))}
			</div>
			<SendComments scrollToBottom={scrollToBottom} id={id} />
		</div>
	);
};

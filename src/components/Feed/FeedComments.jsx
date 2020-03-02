import React, { useRef } from 'react';
import { Comment } from './Comment';
import { SendComments } from './SendComment';

export const FeedComments = ({ comments, id, profile, close }) => {
	const containerRef = useRef();
	const scrollToBottom = () => {
		const { current } = containerRef;
		current.scrollTop = current.scrollHeight;
	};
	return (
		<aside className={id ? 'open' : 'closed'}>
			<button type="button" onClick={close}>
				&#9587;
			</button>
			<h3>Comments</h3>
			<section ref={containerRef}>
				{comments.map(comment => (
					<Comment comment={comment} profile={profile} />
				))}
			</section>
			<SendComments scrollToBottom={scrollToBottom} id={id} />
		</aside>
	);
};

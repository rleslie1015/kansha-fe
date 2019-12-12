import React, { useEffect } from 'react';
import { Container, Typography } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import {
	loadLiveFeed,
	FEED_EVENT_NEW_REC,
} from '../../store/actions/feed-actions';

export const Feed = () => {
	const { feed } = useSelector(({ liveFeed }) => liveFeed);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(loadLiveFeed());
		let src = `${
			process.env.REACT_APP_BASE_URL
		}/feed/live/?token=Bearer ${localStorage.getItem('id_token')}`;
		let sse = new EventSource(src);

		sse.addEventListener('recognition', event =>
			dispatch({
				type: FEED_EVENT_NEW_REC,
				payload: JSON.parse(event.data),
			}),
		);

		return function cleanup() {
			sse.close();
		};
	}, [dispatch]);

	return (
		<Container>
			{feed.map(message => (
				<Typography>
					{message.first_name} {message.last_name} sent to{' '}
					{message.recipient_first} {message.recipient_last}
				</Typography>
			))}
		</Container>
	);
};

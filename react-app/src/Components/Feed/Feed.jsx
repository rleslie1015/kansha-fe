import React, { useEffect } from 'react';
import { Container } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { FeedCard } from './FeedCard'
import {
	loadLiveFeed,
	FEED_EVENT_NEW_REC,
	FEED_EVENT_NEW_REACTION,
	FEED_EVENT_NEW_COMMENT,
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

		sse.addEventListener('comment', event =>
			dispatch({
				type: FEED_EVENT_NEW_COMMENT,
				payload: JSON.parse(event.data),
			}),
		);

		sse.addEventListener('reaction', event =>
			dispatch({
				type: FEED_EVENT_NEW_REACTION,
				payload: JSON.parse(event.data),
			}),
		);

		return function cleanup() {
			sse.close();
		};
	}, [dispatch]);

	return (
		<Container>
			{feed.map(rec => (
                <FeedCard rec = {rec} />
			))}
		</Container>
	);
};

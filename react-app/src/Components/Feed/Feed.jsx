import React, { useEffect } from 'react';
import { Container } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { FeedCard } from './FeedCard';
import {
	loadLiveFeed,
	liveFeedListeners
} from '../../store/actions/feed-actions';

// Adds compatibility for SSE to older browsers
import { NativeEventSource, EventSourcePolyfill } from 'event-source-polyfill';

const EventSource = NativeEventSource || EventSourcePolyfill;

export const Feed = () => {
	const { feed, comments, reactions, profile } = useSelector(
		({ liveFeed, user }) => ({
			...liveFeed,
			...user,
		}),
	);

	const dispatch = useDispatch();

	useEffect(() => {
		// Loads most current batch feed data
		dispatch(loadLiveFeed());
		/*
		Constucting the url for live feed events
		For now the token is embedded as a query param
		This is to circumvent a limitation in the SSE API,
		that doesn't allow setting custom headers.

		This should be safe considering https still encrypts query parmas.

		This token is added back to the Authorization header via a backend middleware
		*/
		const src = `${
			process.env.REACT_APP_BASE_URL
		}/feed/live/?token=Bearer ${localStorage.getItem('id_token')}`;
		const sse = new EventSource(src);

		// Set's up event listeners inside of redux ac
		dispatch(liveFeedListeners(sse))

		// Close the EventStream when component unmounts
		return function cleanup() {
			sse.close();
		};
	}, [dispatch]);

	return (
		<Container>
			{feed.map(rec => (
				<FeedCard
					key={rec.id} 
					rec={rec}
					comments={comments[rec.id]}
					reactions={reactions[rec.id]}
					profile={profile}
				/>
			))}
		</Container>
	);
};

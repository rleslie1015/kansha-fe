import React, { useEffect, useState } from 'react';
import { Container, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useSelector, useDispatch } from 'react-redux';

import { FeedCard } from './FeedCard';
import { FeedComments } from './FeedComments'
import {
	loadLiveFeed,
	liveFeedListeners,
} from '../../store/actions/feed-actions';

// Adds compatibility for SSE to older browsers
import { NativeEventSource, EventSourcePolyfill } from 'event-source-polyfill';

const EventSource = NativeEventSource || EventSourcePolyfill;

const useStyles = makeStyles(theme => ({
	RecFeed: {
		boxSizing: 'border-box',
		marginLeft: '60px',
		width: '100%',
		maxHeight: '100vh',
		overflowY: 'scroll',
		overflowx: 'hidden',
		marginTop: '10px',
		marginBottom: '10px'
	},
	'@global': {
			'*::-webkit-scrollbar': {
				width: '.5rem',
			},
			'*::-webkit-scrollbar-corner': {
				backgroundColor: 'transparent',
			},
			'*::-webkit-scrollbar-thumb': {
				backgroundColor: '#3A3845',
				borderRadius: '10px',
			},
		},
	FeedContainer: {
		display: 'flex',
		padding: '0',
		paddingLeft: '20px',
		maxWidth: '100vw',
		margin: '0',
		height: '100vh',
		maxHeight: '100vh',
	},
}));

export const Feed = () => {
	const [ selectedRec, setSelectedRec ] = useState();
	const { feed, comments, reactions, profile } = useSelector(
		({ liveFeed, user }) => ({
			...liveFeed,
			...user,
		}),
	);

	const dispatch = useDispatch();

	const classes = useStyles();

	const closeFeedComments = () => {
		setSelectedRec(null)
	}

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

		sse.addEventListener('HEARTBEAT', console.dir)

		// Set's up event listeners inside of redux ac
		dispatch(liveFeedListeners(sse));

		// Close the EventStream when component unmounts
		return function cleanup() {
			sse.close();
		};
	}, [dispatch]);

	return (
		<Container className={classes.FeedContainer}>
			<Box className={classes.RecFeed}>
				{feed.map(rec => (
					<FeedCard
						key={rec.id}
						rec={rec}
						comments={comments[rec.id]}
						reactions={reactions[rec.id]}
						profile={profile}
						setSelectedRec={setSelectedRec}
						active={rec.id === selectedRec}
					/>
				))}
			</Box>
			{ selectedRec && <FeedComments close={closeFeedComments} profile={profile} comments={comments[selectedRec]} id={selectedRec} />}
		</Container>
	);
};

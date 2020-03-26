import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import { FeedCard } from './FeedCard';
import { FeedComments } from './FeedComments';
import {
	loadLiveFeed,
	liveFeedListeners,
} from '../../store/actions/feed-actions';
import { ReactComponent as EmptyFeed } from '../../assets/EmptyFeed.svg';

// Adds compatibility for SSE to older browsers
import { NativeEventSource, EventSourcePolyfill } from 'event-source-polyfill';

const EventSource = NativeEventSource || EventSourcePolyfill;

const Feed = () => {
	const [selectedRec, setSelectedRec] = useState();
	const [badges, setBadges] = useState([]);
	const { feed, comments, reactions, profile } = useSelector(
		({ liveFeed, user }) => ({
			...liveFeed,
			...user,
		}),
	);

	const dispatch = useDispatch();

	const closeFeedComments = () => {
		setSelectedRec(null);
	};

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

		// sse.addEventListener('HEARTBEAT', console.log);

		// Sets up event listeners inside of redux ac
		dispatch(liveFeedListeners(sse));

		// Close the EventStream when component unmounts
		return function cleanup() {
			sse.close();
		};
	}, [dispatch]);

	useEffect(() => {
		axiosWithAuth()
			.get('/badges')
			.then(res => {
				setBadges(res.data);
			})
			.catch(err => {
				console.error(err);
			});
	}, []);

	return (
		<section className="container-feed-card-and-comments">
			{feed ? (
				<main className="home-main">
					{feed.map(rec => (
						<FeedCard
							key={rec.id}
							rec={rec}
							badge={badges[rec.badge_id - 1]}
							comments={comments[rec.id]}
							reactions={reactions[rec.id]}
							profile={profile}
							setSelectedRec={setSelectedRec}
							active={rec.id === selectedRec}
						/>
					))}
				</main>
			) : (
				<main className="empty-feed">
					<EmptyFeed />
					<h2>Nothing to display! Send a Reward to a peer!</h2>
				</main>
			)}
			{selectedRec && (
				<FeedComments
					close={closeFeedComments}
					profile={profile}
					comments={comments[selectedRec]}
					id={selectedRec}
				/>
			)}
		</section>
	);
};

export default Feed;

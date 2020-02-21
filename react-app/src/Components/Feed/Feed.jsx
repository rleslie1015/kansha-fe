import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import { FeedCard } from './FeedCard';
import { FeedComments } from './FeedComments';
import {
	loadLiveFeed,
	liveFeedListeners,
} from '../../store/actions/feed-actions';
import SideBar from '../sideBar/Sidebar';

// Adds compatibility for SSE to older browsers
import { NativeEventSource, EventSourcePolyfill } from 'event-source-polyfill';

const EventSource = NativeEventSource || EventSourcePolyfill;

export const Feed = () => {
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

		sse.addEventListener('HEARTBEAT', console.dir);

		// Set's up event listeners inside of redux ac
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
				console.log(err);
			});
	}, []);

	return (
		<div className="container-feed-card-and-comments">
			<SideBar />
			<div>
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
			</div>
			{selectedRec && (
				<FeedComments
					close={closeFeedComments}
					profile={profile}
					comments={comments[selectedRec]}
					id={selectedRec}
				/>
			)}
		</div>
	);
};

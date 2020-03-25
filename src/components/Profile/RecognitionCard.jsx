import React, { useMemo, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { timeAgo } from '../../utils/timeago';
import { ReactComponent as Trashcan } from '../../assets/Trashcan.svg';
import { useSelector, useDispatch } from 'react-redux';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import { CommentButton } from '../Feed/CommentButton';
import { ReactionButton } from '../Feed/ReactionButton';
import {
	loadLiveFeed,
	liveFeedListeners,
} from '../../store/actions/feed-actions';

export function RecognitionCard({
	recognition,
	sent,
	setProfile,
	profileBadges,
	profileId,
}) {
	const time = useMemo(() => timeAgo(recognition.date), [recognition]);

	const {
		comments: commentsAll,
		reactions: reactionsAll,
		profile,
	} = useSelector(({ liveFeed, user }) => ({
		...liveFeed,
		...user,
	}));

	const reactions = reactionsAll[recognition.id];
	const comments = commentsAll[recognition.id];

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(loadLiveFeed());

		const src = `${
			process.env.REACT_APP_BASE_URL
		}/feed/live/?token=Bearer ${localStorage.getItem('id_token')}`;

		const sse = new EventSource(src);

		dispatch(liveFeedListeners(sse));

		return function cleanup() {
			sse.close();
		};
	}, [dispatch]);

	//const profile = useSelector(state => state.user.profile);
	//const [reactions, setReactions] = useState([]);
	//const [comments, setComments] = useState([]);

	const handleDelete = e => {
		e.preventDefault();
		if (
			window.confirm(
				'Are you sure you would like to delete this recognition?',
			)
		) {
			axiosWithAuth()
				.delete(`/rec/${recognition.id}`)
				.then(() => {
					setProfile(prev => ({
						...prev,
						rec: prev.rec.filter(rec => rec.id !== recognition.id),
					}));
				});
		}
	};

	if (typeof recognition.badge_id === 'number') {
		var thisBadge = profileBadges.find(
			bdg => bdg.id === recognition.badge_id,
		);
	}

	/*
	useEffect(() => {
		const fetchData = async () => {
			const reactions = await axiosWithAuth().get(
				`/reactions/${recognition.id}`,
			);
			const comments = await axiosWithAuth().get(
				`/comments/${recognition.id}`,
			);
			setReactions(reactions.data);
			setComments(comments.data);
		};
		fetchData();
	}, [recognition.id]);
	*/
	// console.log(reactions, 'reactions');
	// console.log(comments, 'comments');

	// make functions for liking and unliking a post

	// function likePost() {

	// }

	// function unLikePost(reactionId, reaction) {
	// 	const index = reactions.indexOf(reaction);
	// 	reactions.spice(1, index);
	// }

	return (
		<section className="container-recognition-card">
			<Link
				to={`/profile/${
					sent ? recognition.recipient : recognition.sender
				}`}>
				<img
					src={
						sent
							? 'https://kansha-bucket.s3-us-west-1.amazonaws.com/avatar.png'
							: recognition.profile_pic
					}
					alt="user avatar"
				/>
			</Link>

			<section className="activity-section">
				<div className="recognition-message">
					{profile.user_type === 'admin' && (
						<Trashcan onClick={handleDelete} />
					)}
					<div>
						<Link
							to={`/profile/${
								sent
									? recognition.recipient
									: recognition.sender
							}`}>
							{sent ? (
								<p>
									Sent to{' '}
									<span>
										{recognition.first_name}{' '}
										{recognition.last_name}
									</span>
								</p>
							) : (
								`${recognition.first_name} ${recognition.last_name}`
							)}
						</Link>
						<span className="time" role="presentation">
							&nbsp;{time}
						</span>
					</div>
					<p>{recognition.message}</p>
				</div>

				<div>
					<img
						className="activity-badge"
						src={thisBadge?.badge_URL}
						alt={thisBadge?.badge_name}
						width="50px"
					/>
				</div>
			</section>
			<div className="rm-buttons">
				<ReactionButton
					reactions={reactions}
					open={true}
					inModal={true}
					rec_id={recognition.id}
					id={profileId}
				/>

				<CommentButton
					comments={comments}
					open={true}
					inModal={true}
					rec_id={recognition.id}
					id={profileId}
				/>
			</div>
		</section>
	);
}

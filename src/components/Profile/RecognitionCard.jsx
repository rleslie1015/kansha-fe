import React, { useMemo, memo } from 'react';
import { Link } from 'react-router-dom';
import { timeAgo } from '../../utils/timeago';
import { ReactComponent as Trashcan } from '../../assets/Trashcan.svg';
import { useSelector } from 'react-redux';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import { CommentButton } from '../Feed/CommentButton';
import { ReactionButton } from '../Feed/ReactionButton';

export const RecognitionCard = memo(
	({
		recognition,
		sent,
		setProfile,
		profileBadges,
		profileId,
		setProfileInfo,
		handleCommentClick,
	}) => {
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

		console.log('modal reactions', reactions);

		// const handleDelete = e => {
		// 	e.preventDefault();
		// 	if (
		// 		window.confirm(
		// 			'Are you sure you would like to delete this recognition?',
		// 		)
		// 	) {
		// 		axiosWithAuth()
		// 			.delete(`/rec/${recognition.id}`)
		// 			.then(() => {
		// 				setProfileInfo(prev => ({
		// 					...prev,
		// 					rec: prev.rec.filter(
		// 						rec => rec.id !== recognition.id,
		// 					),
		// 				}));
		// 			});
		// 	}
		// };

		if (typeof recognition.badge_id === 'number') {
			var thisBadge = profileBadges.find(
				bdg => bdg.id === recognition.badge_id,
			);
		}

		return (
			<section className="container-recognition-card">
				<img
					src={
						sent
							? 'https://kansha-bucket.s3-us-west-1.amazonaws.com/avatar.png'
							: recognition.profile_pic
					}
					alt="user avatar"
					width="35px"
				/>

				<section className="activity-section">
					<div className="recognition-message">
						{/* {profile.user_type === 'admin' && (
							<Trashcan onClick={handleDelete} />
						)} */}
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
						id={profile.id}
					/>

					<div onClick={handleCommentClick}>
						<CommentButton
							comments={comments}
							open={true}
							inModal={true}
							rec_id={recognition.id}
							id={profile.id}
						/>
					</div>
				</div>
			</section>
		);
	},
);

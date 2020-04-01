import React, { useMemo, memo, useState } from 'react';
import { timeAgo } from '../../utils/timeago';
import { useSelector } from 'react-redux';
import { CommentButton } from '../Feed/CommentButton';
import { ReactionButton } from '../Feed/ReactionButton';
import ReactionModal from '../FeedSideBar/ReactionModal';
import ProfileModal from '../FeedSideBar/ProfileModal';

export const RecognitionCard = memo(
	({ recognition, sent, profileBadges, inModal }) => {
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

		const handleCommentClick = () => {
			setSelect(true);
			setModal(true);
		};

		const handleProfileClick = e => {
			console.log('hello');

			e.preventDefault();

			setProfileSelect(true);
		};

		const [, setModal] = useState(false);
		const [open, setOpen] = React.useState(false);

		if (typeof recognition.badge_id === 'number') {
			var thisBadge = profileBadges.find(
				bdg => bdg.id === recognition.badge_id,
			);
		}
		const [select, setSelect] = useState(false);
		const [profileSelect, setProfileSelect] = useState(false);

		return (
			<section className="container-recognition-card">
				{select && (
					<ReactionModal
						close={setModal}
						setSelect={setSelect}
						profile={profile}
						rec={recognition}
						reactions={reactions}
						badge={thisBadge}
						comments={comments}
						open={open}
						picture={recognition.profile_pic}
					/>
				)}
				{profileSelect && (
					<ProfileModal
						close={setModal}
						setProfileSelect={setProfileSelect}
						setSelect={setSelect}
						profile={profile}
						rec={recognition}
						badge={thisBadge}
						comments={comments}
						badges={profileBadges}
						id={profile.id}
						rec_id={recognition.id}
						reactions={reactions}
						open={open}
						profileId={profile.id}
					/>
				)}
				<a onClick={e => (inModal ? null : handleProfileClick(e))}>
					<img
						src={
							sent
								? 'https://kansha-bucket.s3-us-west-1.amazonaws.com/avatar.png'
								: recognition.profile_pic
						}
						alt="user avatar"
						width="35px"
						style={{ cursor: 'pointer' }}
					/>
				</a>
				<section className="activity-section">
					<div className="recognition-message">
						{/* {profile.user_type === 'admin' && (
							<Trashcan onClick={handleDelete} />
						)} */}
						<div className="rec-info">
							{sent ? (
								<p>
									Sent to{' '}
									{/* <a
										onClick={handleNewProfileClick(
											recognition.sender,
										)}> */}
									<span>
										{recognition.first_name}{' '}
										{recognition.last_name}
									</span>
									{/* </a> */}
								</p>
							) : (
								// <a
								// 	onClick={handleProfileClick(
								// 		recognition.sender,
								// 	)}
								<p
									style={{
										color: '#c91757',
										fontSize: '1.6rem',
									}}>
									From {''}
									{recognition.first_name}{' '}
									{recognition.last_name}
								</p>
							)}
							<span className="time" role="presentation">
								&nbsp;{time}
							</span>
						</div>
						<p
							style={{
								marginTop: '3px',
								fontSize: '1.4rem',
								color: '#000d22',
							}}>
							{recognition.message}
						</p>
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
					{/**/}
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

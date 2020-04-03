import React, { useState, useEffect, memo } from 'react';
import { useDispatch } from 'react-redux';
import { loadPostData } from '../../store/actions/feed-actions';
import { ReactionButton } from '../Feed/ReactionButton';
import ReactionModal from './ReactionModal';
import { CommentButton } from '../Feed/CommentButton';
import ProfileModal from './ProfileModal';
export const FeedRecognition = memo(
	({
		rec,
		badge,
		badges,
		comments,
		reactions,
		open,
		profile,
		setSelectedRec,
		setSelectedProfile,
		close,
	}) => {
		const [select, setSelect] = useState(false);
		const [profileSelect, setProfileSelect] = useState(false);

		const { id: rec_id } = rec;
		const dispatch = useDispatch();

		useEffect(() => {
			if (!(reactions || comments)) {
				dispatch(loadPostData(rec_id));
			}
		}, [dispatch, rec_id, reactions, comments]);

		const handleClick = (e) => {
			e.preventDefault();
			setSelectedProfile(profile.id);
			setProfileSelect(true);
		};

		const handleComment = (e) => {
			e.preventDefault();
			setSelectedRec(rec_id);
			setSelect(true);
		};
		const [profileId] = useState(rec.recipient);

		return (
			<div className="recognition">
				{profileSelect && (
					<ProfileModal
						close={close}
						setProfileSelect={setProfileSelect}
						setSelect={setSelect}
						profile={profile}
						rec={rec}
						badge={badge}
						comments={comments}
						badges={badges}
						id={profile.id}
						rec_id={rec_id}
						reactions={reactions}
						open={open}
						profileId={profileId}
					/>
				)}

				{select && (
					<ReactionModal
						close={close}
						setSelect={setSelect}
						profile={profile}
						rec={rec}
						reactions={reactions}
						badge={badge}
						comments={comments}
						open={open}
						picture={rec.profile_picture}
					/>
				)}
				<img
					alt="profile"
					className="rec-profile-pic"
					src={rec.recipient_picture}
					onClick={handleClick}
				/>
				<div className="rec-badge-and-message">
					{badge && (
						<img
							alt="badge"
							className={`${open ? `rec-badge` : `hidden-rec`}`}
							src={badge?.badge_URL}
						/>
					)}
					<p
						style={{ paddingLeft: !badge && '10px' }}
						className={`${open ? `rec-message` : `hidden-rec`}`}>
						{rec?.message}
					</p>
				</div>
				<div className="feed-reaction-buttons">
					{reactions && (
						<ReactionButton
							id={profile.id}
							rec_id={rec_id}
							reactions={reactions}
							open={open}
						/>
					)}
					{comments && (
						<CommentButton
							id={profile.id}
							rec_id={rec_id}
							comments={comments}
							open={open}
							handleComment={handleComment}
						/>
					)}
				</div>
			</div>
		);
	},
);

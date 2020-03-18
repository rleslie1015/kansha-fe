import React, { useEffect, useState, memo, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loadPostData } from '../../store/actions/feed-actions';
import { ReactionButton } from '../Feed/ReactionButton';
import { ReactComponent as Trashcan } from '../../assets/Trashcan.svg';
import { ReactComponent as AddComment } from '../../assets/addcomment.svg';
import ReactionModal from './ReactionModal';
import { CommentButton } from '../Feed/CommentButton';

export const FeedRecognition = memo(
	({
		rec,
		badge,
		comments,
		reactions,
		open,
		profile,
		setSelectedRec,
		close,
	}) => {
		const [select, setSelect] = useState(false);

		let history = useHistory();
		const { id: rec_id } = rec;
		const dispatch = useDispatch();

		useEffect(() => {
			if (!(reactions || comments)) {
				dispatch(loadPostData(rec_id));
			}
		}, [dispatch, rec_id, reactions, comments]);

		// const time = useMemo(() => timeAgo(rec.date), [rec]);

		const handleClick = e => {
			e.preventDefault();
			history.push(`/profile/${rec.recipient}`);
		};

		const handleComment = e => {
			e.preventDefault();
			setSelectedRec(rec_id);
			setSelect(true);
		};

		return (
			<div className="recognition" onClick={handleClick}>
				{select && (
					<ReactionModal
						close={close}
						setSelect={setSelect}
						profile={profile}
						rec={rec}
						reactions={reactions}
						badge={badge}
						comments={comments}
					/>
				)}
				<img
					alt="profile"
					className="rec-profile-pic"
					src={rec.recipient_picture}
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
						<>
							<ReactionButton
								id={profile.id}
								rec_id={rec_id}
								reactions={reactions}
								open={open}
							/>
						</>
					)}
					{comments && (
						<>
							<CommentButton
								handleComment={handleComment}
								id={profile.id}
								rec_id={rec_id}
								comments={comments}
								open={open}
							/>
						</>
					)}
				</div>
			</div>
		);
	},
);

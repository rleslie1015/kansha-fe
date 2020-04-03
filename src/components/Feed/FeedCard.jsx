import React, { useEffect, memo, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { loadPostData } from '../../store/actions/feed-actions';
import { ReactionButton } from './ReactionButton';
import { timeAgo } from '../../utils/timeago';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import { ReactComponent as Trashcan } from '../../assets/Trashcan.svg';
import { ReactComponent as AddComment } from '../../assets/addcomment.svg';

export const FeedCard = memo(
	({ rec, badge, comments, reactions, profile, setSelectedRec }) => {
		const { id: rec_id } = rec;
		const dispatch = useDispatch();
		useEffect(() => {
			if (!(reactions || comments)) {
				dispatch(loadPostData(rec_id));
			}
		}, [dispatch, rec_id, reactions, comments]);
		const time = useMemo(() => timeAgo(rec.date), [rec]);

		const handleDelete = (id) => {
			if (
				window.confirm(
					'Are you sure you would like to delete this recognition?',
				)
			) {
				axiosWithAuth()
					.delete(`/rec/${id}`)
					.then(() => {});
			}
		};

		return (
			<section className="container-feed-card">
				<div className="feed-card-pics" role="presentation">
					<img
						className="picture-user-small sender"
						src={rec.profile_picture}
						alt="sender"
					/>
					<img
						className="picture-user-small recipient"
						src={rec.recipient_picture}
						alt="recipient"
					/>
				</div>
				<div className="feed-card-content" role="main">
					<section className="feed-card-top">
						{profile.user_type.toLowerCase() === 'admin' && (
							<button onClick={handleDelete}>
								<Trashcan />
							</button>
						)}
						<p>
							<Link to={`/profile/${rec.sender}`}>
								{rec.first_name} {rec.last_name}
							</Link>
							&nbsp;sent to&nbsp;
							<Link to={`/profile/${rec.recipient}`}>
								{rec.recipient_first} {rec.recipient_last}
							</Link>
							&nbsp;
							<span className="time" role="presentation">
								{time}
							</span>
						</p>
					</section>
					<p>{rec.message}</p>
					<section className="feed-card-bottom">
						{badge && (
							<img
								className="picture-badge-medium"
								src={badge.badge_URL}
								alt=""
							/>
						)}
						<section className="reaction-buttons">
							{comments && (
								<button onClick={() => setSelectedRec(rec_id)}>
									<AddComment />
									<p>{comments.length}</p>
								</button>
							)}
							{reactions && (
								<>
									<ReactionButton
										id={profile.id}
										rec_id={rec_id}
										reactions={reactions}
									/>
								</>
							)}
						</section>
					</section>
				</div>
			</section>
		);
	},
);

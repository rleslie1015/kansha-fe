import React, { useEffect, memo, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
// import clsx from 'clsx';
import { loadPostData } from '../../store/actions/feed-actions';
import { ReactionButton } from './ReactionButton';
import { timeAgo } from '../../utils/timeago';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import Trashcan from '../../assets/Trashcan.png';

export const FeedCard = memo(
	({ rec, badge, comments, reactions, profile, setSelectedRec, active }) => {
		const { id: rec_id } = rec;
		const dispatch = useDispatch();
		useEffect(() => {
			if (!(reactions || comments)) {
				dispatch(loadPostData(rec_id));
			}
		}, [dispatch, rec_id, reactions, comments]);
		const time = useMemo(() => timeAgo(rec.date), [rec]);

		const handleDelete = id => {
			// this will need to be turned into a confirmation modal, like the one on the figma.
			if (
				window.confirm(
					'Are you sure you would like to delete this recognition?',
				)
			) {
				axiosWithAuth()
					.delete(`/rec/${id}`)
					.then(() => {
						//matt do work here.... :)
					});
			}
		};

		if (profile.user_type === 'admin') {
			return (
				<div>
					<div>
						<div>
							<img src={rec.profile_picture} alt="sender" />
							<img src={rec.recipient_picture} alt="recipient" />
						</div>
					</div>
					<div>
						<div>
							<Link to={`/profile/${rec.sender}`}>
								{rec.first_name} {rec.last_name}
							</Link>{' '}
							sent to{' '}
							<Link to={`/profile/${rec.recipient}`}>
								{rec.recipient_first} {rec.recipient_last}
							</Link>{' '}
							<span>{time}</span>
							<img
								src={Trashcan}
								alt="trash can icon"
								onClick={() => handleDelete(rec.id)}
							/>
						</div>
						<div>{rec.message}</div>
						{badge && (
							<div>
								<img src={badge.badge_URL} />
							</div>
						)}
						<div>
							{comments && (
								<button onClick={() => setSelectedRec(rec_id)}>
									<div />
									<div>{comments.length}</div>
								</button>
							)}
							{reactions && (
								<>
									<button
										id={profile.id}
										rec_id={rec_id}
										reactions={reactions}
									/>
								</>
							)}
						</div>
					</div>
					{/*
				<button onClick={() => dispatch(addComment(rec_id, comment))}>
					comment
				</button>
				*/}
				</div>
			);
		} else {
			return (
				<div className="container-feed-card">
					<div>
						<div className="feed-card-top">
							<img className="picture-user-small" src={rec.profile_picture} alt="sender" />
							<img className="picture-user-small" src={rec.recipient_picture} alt="recipient" />
													<div>
							<Link to={`/profile/${rec.sender}`}>
								{rec.first_name} {rec.last_name}
							</Link>{' '}
							sent to{' '}
							<Link to={`/profile/${rec.recipient}`}>
								{rec.recipient_first} {rec.recipient_last}
							</Link>{' '}
							<span>{time}</span>
						</div>
						<p>{rec.message}</p>
						</div>
					</div>
					<div>

						{badge && (
							<div>
								<img className="picture-badge-medium" src={badge.badge_URL} />
							</div>
						)}
						<div>
							{comments && (
								<button onClick={() => setSelectedRec(rec_id)}>
									<div />
									<div>{comments.length}</div>
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
						</div>
					</div>
					{/*
				<button onClick={() => dispatch(addComment(rec_id, comment))}>
					comment
				</button>
				*/}
				</div>
			);
		}
	},
);

import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { timeAgo } from '../../utils/timeago';
import Trashcan from '../../assets/Trashcan.png';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

export const Comment = ({ comment, profile }) => {
	const time = useMemo(() => timeAgo(comment.date), [comment]);

	const handleDelete = id => {
		console.log(comment.rec_id);
		// this will need to be turned into a confirmation modal, like the one on the figma.
		if (
			window.confirm(
				'Are you sure you would like to delete this comment?',
			)
		) {
			axiosWithAuth()
				.delete(`/comments/${id}?rec_id=${comment.rec_id}`)
				.then(() => {
					//matt do work here.... :)
				});
		}
	};

	if (profile.user_type === 'admin') {
		return (
			<div className="comment">
				<div className="comment-picture">
					<img
						className="profile-pic"
						src={comment.profile_picture}
						alt="sender"
					/>
				</div>
				<div className="comment-content">
					<div className="comment-content-top">
						<Link
							className="name"
							to={`/profile/${comment.user_id}`}>
							{comment.first_name} {comment.last_name}
						</Link>
						<span className="time-stamp">{time}</span>
						<img
							src={Trashcan}
							alt="trash can icon"
							onClick={() => handleDelete(comment.id)}
							className="trash-can"
						/>
					</div>
					<p>{comment.message}</p>
				</div>
			</div>
		);
	} else {
		return (
			<div className="comment">
				<div className="comment-picture">
					<img
						className="profile-pic"
						src={comment.profile_picture}
						alt="sender"
					/>
				</div>
				<div className="comment-content">
					<div className="comment-content-top">
						<Link
							className="name"
							to={`/profile/${comment.user_id}`}>
							{comment.first_name} {comment.last_name}
						</Link>
						<span className="time-stamp">{time}</span>
					</div>
					<p>{comment.message}</p>
				</div>
			</div>
		);
	}
};

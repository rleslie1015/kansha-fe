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
			<div>
				<div>
					<img src={comment.profile_picture} alt="sender" />
				</div>
				<div>
					<div>
						<Link to={`/profile/${comment.user_id}`}>
							{comment.first_name} {comment.last_name}
						</Link>
						<span>{time}</span>
						<img
							src={Trashcan}
							alt="trash can icon"
							onClick={() => handleDelete(comment.id)}
						/>
					</div>
					<p>{comment.message}</p>
				</div>
			</div>
		);
	} else {
		return (
			<div>
				<div>
					<img src={comment.profile_picture} alt="sender" />
				</div>
				<div>
					<div>
						<Link to={`/profile/${comment.user_id}`}>
							{comment.first_name} {comment.last_name}
						</Link>
						<span>{time}</span>
					</div>
					<p>{comment.message}</p>
				</div>
			</div>
		);
	}
};

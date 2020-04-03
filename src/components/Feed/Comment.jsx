import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { timeAgo } from '../../utils/timeago';
import { ReactComponent as Trashcan } from '../../assets/Trashcan.svg';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

export const Comment = ({ comment, profile }) => {
	const time = useMemo(() => timeAgo(comment.date), [comment]);

	const handleDelete = (id) => {
		if (
			window.confirm(
				'Are you sure you would like to delete this comment?',
			)
		) {
			axiosWithAuth()
				.delete(`/comments/${id}?rec_id=${comment.rec_id}`)
				.then(() => {});
		}
	};
	return (
		<div>
			<img src={comment.profile_picture} alt="sender" />
			<div>
				<p>
					<Link to={`/profile/${comment.user_id}`}>
						{comment.first_name} {comment.last_name}
					</Link>
					&nbsp;{' '}
					<span className="time" role="presentation">
						{time}
					</span>
					{profile.user_type.toLowerCase() === 'admin' && (
						<Trashcan onClick={() => handleDelete(comment.id)} />
					)}
				</p>
				<p>{comment.message}</p>
			</div>
		</div>
	);
};

import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { timeAgo } from '../../utils/timeago';
import { ReactComponent as Trashcan } from '../../assets/Trashcan.svg';
import { useSelector } from 'react-redux';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

export function RecognitionCard({ recognition, sent, setProfile }) {
	const time = useMemo(() => timeAgo(recognition.date), [recognition]);

	const profile = useSelector(state => state.user.profile);

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

			<section>
				{profile.user_type === 'admin' && (
					<Trashcan onClick={handleDelete} />
				)}
				<div>
					<Link
						to={`/profile/${
							sent ? recognition.recipient : recognition.sender
						}`}>
						{sent
							? `Sent to ${recognition.first_name} ${recognition.last_name}`
							: `${recognition.first_name} ${recognition.last_name}`}
					</Link>
					<span className="time" role="presentation">
						&nbsp;{time}
					</span>
				</div>
				<p>{recognition.message}</p>
			</section>
		</section>
	);
}

import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { timeAgo } from '../../utils/timeago';
import { ReactComponent as Trashcan } from '../../assets/Trashcan.svg';
import { useSelector } from 'react-redux';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

export function RecognitionCard({
	recognition,
	sent,
	setProfile,
	profileBadges,
	reactions,
	rec,
	open,
	comments,
	profileRecs,
	profileId,
	id,
	rec_id,
}) {
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

	if (typeof recognition.badge_id === 'number') {
		var thisBadge = profileBadges.find(
			bdg => bdg.id === recognition.badge_id,
		);
	}
	console.log(sent, 'sent');
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

			<section className="activity-section">
				<div className="recognition-message">
					{profile.user_type === 'admin' && (
						<Trashcan onClick={handleDelete} />
					)}
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
		</section>
	);
}

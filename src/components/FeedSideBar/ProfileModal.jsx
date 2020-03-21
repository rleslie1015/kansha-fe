import React, { useState, useEffect } from 'react';
import Modal from '../../components/Modal';
import { ReactComponent as AddComment } from '../../assets/addcomment.svg';

import { SendComments } from '../Feed/SendComment';
import { RecognitionCard } from '../Profile/RecognitionCard';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

function ProfileModal({
	profile,
	rec,
	reactions,
	comments,
	badge,
	badges,
	close,
	setProfileSelect,
}) {
	const handleClose = () => {
		setProfileSelect(false);
		close(false);
	};

	const profileId = rec.recipient;
	const [profileInfo, setProfileInfo] = useState({});
	const [profileBadges, setProfileBadges] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const { data: profileData } = await axiosWithAuth().get(
				`/profile/${profileId}`,
			);
			setProfileInfo(profileData.peer);
			const { data: badgeData } = await axiosWithAuth().get('/badges');
			setProfileBadges(badgeData);
		};
		fetchData();
	}, [profileId]);
	console.log(profileBadges, 'profileBadges');
	return (
		<>
			<Modal close={handleClose}>
				<div className="profile-modal">
					<section className="profile-header">
						<img
							className="profile-picture"
							alt={rec.recipient_first}
							src={rec.recipient_picture}
							width="173px"
						/>
						<div className="person-info">
							<h1>{rec.recipient_first}</h1>{' '}
							<h2>{rec.recipient_job_title}</h2>
							<h3>Team Name</h3>
						</div>
					</section>
					<main className="profile-main">
						<div className="profile-badges">
							<h2>Badges</h2>
						</div>
						<div className="profile-activity">
							<h2>Activity</h2>
							<section className="inner-activity-card">
								{profileInfo.rec &&
									profileInfo.rec
										.sort(function(a, b) {
											return (
												new Date(b.date) -
												new Date(a.date)
											);
										})
										.map(recognition => (
											<RecognitionCard
												key={recognition.id}
												sent={false}
												profileBadges={badges}
												badge={
													badges[
														recognition.badge_id - 1
													]
												}
												profile={profileInfo}
												recognition={recognition}
												setProfileInfo={setProfileInfo}
											/>
										))}
							</section>
						</div>
					</main>
				</div>
			</Modal>
		</>
	);
}
export default ProfileModal;

import React, { useState, useEffect, useMemo } from 'react';
import Modal from '../../components/Modal';
import { ReactComponent as AddComment } from '../../assets/addcomment.svg';

import { SendComments } from '../Feed/SendComment';
import { RecognitionCard } from '../Profile/RecognitionCard';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import { Badge } from '../Profile/styled';
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
	// const [profileBadges, setProfileBadges] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const { data: profileData } = await axiosWithAuth().get(
				`/profile/${profileId}`,
			);
			setProfileInfo(profileData.peer);
			// const { data: badgeData } = await axiosWithAuth().get('/badges');
			// setProfileBadges(badgeData);
		};
		fetchData();
	}, [profileId]);
	console.log(profileInfo, 'profileInfo');

	const userBadges = useMemo(() => {
		const array = [];
		if (profileInfo.rec) {
			for (const rec of profileInfo.rec) {
				if (profileId === rec.sender) continue;
				const { badge_id } = rec;
				const badge = badges.find(bdg => bdg.id === badge_id);
				const exist = array.find(bdg => bdg.id === badge_id);
				if (exist) {
					array[array.indexOf(exist)].count++;
					continue;
				}
				array.push({
					id: badge_id,
					badge: badge?.badge_URL,
					count: 1,
				});
			}
		}
		return array;
	}, [profileInfo, badges, profileId]);

	let numberOfBadges = 0;
	for (let bdg of userBadges) {
		numberOfBadges += bdg.count;
	}

	console.log(userBadges, 'userBadges');
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
							<h1>{rec.recipient_first}</h1>
							<h2>{rec.recipient_job_title}</h2>
							<h3>
								{profileInfo.team_name
									? profileInfo.team_name
									: null}
							</h3>
						</div>
					</section>
					<main className="profile-main">
						<div className="profile-badges">
							<div className="badges-title-container">
								<h2 className="badges-title">Badges</h2>
								<div className="number-of-badges">
									<h2>
										{numberOfBadges > 10
											? '10+'
											: numberOfBadges}
									</h2>
								</div>
							</div>
							<ul>
								{badges && (
									<>
										{userBadges.map(badge => {
											return (
												<Badge
													key={badge.id}
													count={badge.count}>
													<img
														className="badge-profile"
														src={badge.badge}
														alt="badge"
													/>
												</Badge>
											);
										})}
									</>
								)}
							</ul>
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
												reactions={reactions}
												rec={rec}
												comments={comments}
												open={true}
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

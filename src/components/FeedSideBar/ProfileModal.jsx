import React, { useState, useEffect, useMemo } from 'react';
import Modal from '../../components/Modal';
import { RecognitionCard } from '../Profile/RecognitionCard';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import { Badge } from '../Profile/styled';

function ProfileModal({
	profile, // this is the profile info for the logged in user
	rec, // this is the info for the activity card that the user clicked on
	reactions, // this is an array of heart reactions for the card the user clicked on
	comments, // this is an array of comments for the card the user clicked on
	badges, // this a list of all the badges in the system
	close, // function
	setProfileSelect, // function
}) {
	// this handles the profile modal closing
	const handleClose = () => {
		setProfileSelect(false);
		close(false);
	};

	debugger;
	// this is the id number of the user whose profile we're looking at
	const profileId = rec.recipient;

	// profileInfo holds detailed information about the user whose profile we're looking at
	const [profileInfo, setProfileInfo] = useState({});

	useEffect(() => {
		const fetchData = async () => {
			const { data: profileData } = await axiosWithAuth().get(
				`/profile/${profileId}`,
			);
			setProfileInfo(profileData.peer);
			// get reactions
			// get comments
		};
		fetchData();
	}, [profileId]);

	// userbadges holds all of the badges that belong to the user whose profile we're looking at
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

	// numberOfBadges refers to the number of badges that belong to the user whose profile we're looking at
	let numberOfBadges = 0;
	for (let bdg of userBadges) {
		numberOfBadges += bdg.count;
	}

	// get request for recognitions for the user whose profile we're looking at
	// map over those and use each one as data for each activity card

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
									<h2>{numberOfBadges}</h2>
								</div>
							</div>
							<ul>
								{badges && (
									<>
										{userBadges.map(badge => {
											if (badge.badge) {
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
											}
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
											<div className="container-card-and-buttons">
												<RecognitionCard
													key={recognition.id}
													sent={
														profileId ===
														recognition.sender
													}
													profileBadges={badges}
													recognition={recognition}
													setProfileInfo={
														setProfileInfo
													}
													profileId={profileId}
													comments={comments}
													profile={profile}
												/>
											</div>
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

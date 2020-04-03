import React, { useState, useEffect, useMemo } from 'react';
import Modal from '../../components/Modal';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import Activity from './Activity';
import Badges from './Badges';

/* ProfileModal deals with files in the Feed, FeedSideBar, and Profile directories.
 
 What further complicates matters is that ProfileModal isn't just being used inside of the feed side bar. 
 it's also used so users can open the modal inside of the teams dashboard and the end user dashboard. 
 
 I highly recommend restructuring the directories so that you don't need to flip around.
 */
function ProfileModal({
	profile, // this is the profile info for the logged in user
	badges, // this a list of all the badges in the system
	close, // function
	setProfileSelect, // function that determines whether the modal is open
	profileId,
	inModal,
}) {
	// this handles the profile modal closing
	const handleClose = () => {
		setProfileSelect(false);
		close(false);
	};

	const [isLoading] = useState(false);

	// profileInfo holds detailed information about the user whose profile we're looking at
	const [profileInfo, setProfileInfo] = useState({});

	useEffect(() => {
		const fetchData = async () => {
			const { data: profileData } = await axiosWithAuth().get(
				`/profile/${profileId}`,
			);
			setProfileInfo(profileData.peer);
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
				const badge = badges.find((bdg) => bdg.id === badge_id);
				const exist = array.find((bdg) => bdg.id === badge_id);
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

	// Below, i'm checking to see if ProfileModal's parent explicitly told this component that the profile modal won't be opened inside of another modal
	// The reason why is because the logic for which recognitions were sent and which were received depends on whether the currently logged-in user
	// is looking at their own profile or someone else's profile.
	// Additionally, if the ProfileModal is already inside of another modal, then I don't want the user to be able to open someone else's
	// profile modal inside of a profile modal. that would be turtles all the way down!

	if (inModal !== false) {
		inModal = true;
	}

	return (
		<>
			<Modal close={handleClose}>
				<div className="profile-modal">
					<section className="profile-header">
						<img
							className="profile-picture"
							alt={profileInfo.first_name}
							src={profileInfo.profile_picture}
							width="173px"
						/>
						<div className="person-info">
							<h1>{profileInfo.first_name}</h1>
							{/* <h2>{rec.recipient_job_title}</h2> */}
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
							<Badges badges={badges} userBadges={userBadges} />
						</div>
						<Activity
							profileBadges={badges}
							setProfileInfo={setProfileInfo}
							profileId={profileId}
							profile={profile}
							profileInfo={profileInfo}
							isLoading={isLoading}
							inModal={inModal}
						/>
					</main>
				</div>
			</Modal>
		</>
	);
}
export default ProfileModal;

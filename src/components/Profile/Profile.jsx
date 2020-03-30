import React, { useState, useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
// import { Cropper } from '../FileUpload/FileCrop';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import Activity from '../FeedSideBar/Activity';
import Badges from '../FeedSideBar/Badges';
import { useSelector } from 'react-redux';
import { ReactComponent as EmptyFeed } from '../../assets/NoBadgeFeed.svg';
import { ReactComponent as EmptyActivity } from '../../assets/noactivity.svg';
import ProfileTeamList from './ProfileTeamList';
import ReactionModal from '../FeedSideBar/ReactionModal';
export function Profile() {
	const [badges, setBadges] = useState([]);
	const { id } = useParams();
	const [profile, setProfile] = useState({});

	const { comments, reactions, feed } = useSelector(({ liveFeed, user }) => ({
		...liveFeed,
		...user,
	}));

	useEffect(() => {
		const fetchData = async () => {
			const { data: profileData } = await axiosWithAuth().get(
				`/profile/${id}`,
			);
			setProfile(profileData.peer);
			console.log('profile data', profileData);

			const { data: badgeData } = await axiosWithAuth().get('/badges');
			setBadges(badgeData);
		};
		fetchData();
	}, [id]);

	// console.log(profile, "this is the profile")
	const userBadges = useMemo(() => {
		const array = [];
		if (profile.rec) {
			for (const rec of profile.rec) {
				if (profile.id === rec.sender) continue;
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
	}, [profile, badges]);

	let numberOfBadges = 0;
	for (let bdg of userBadges) {
		if (bdg.badge) {
			numberOfBadges += bdg.count;
		}
	}

	return (
		<main className="container-entire-profile">
			<section className="my-team-members">
				<ProfileTeamList profile={profile} />
			</section>
			{feed.length > 0 ? (
				<section className="container-badges">
					<div className="badges-title-container">
						<h1 className="title-badges">My badges</h1>
						<h2>{numberOfBadges}</h2>
					</div>
					<div className="profile-badges">
						<Badges badges={badges} userBadges={userBadges} />
					</div>
				</section>
			) : (
				<main className="empty-feed">
					<EmptyFeed />
				</main>
			)}
			<main className="profile-main"></main>

			{feed.length > 0 ? (
				<section className="activity-card">
					<h5 className="title-activity-card">My activity</h5>

					<section className="profile-activity-card">
						<Activity
							profileBadges={badges}
							setProfileInfo={setProfile}
							profileId={id}
							comments={comments}
							profile={profile}
							profileInfo={profile}
						/>
					</section>
				</section>
			) : (
				<main className="empty-feed">
					<EmptyActivity />
				</main>
			)}
		</main>
	);
}

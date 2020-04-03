import React, { useState, useEffect, useMemo } from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import Activity from '../FeedSideBar/Activity';
import Badges from '../FeedSideBar/Badges';
import { useSelector } from 'react-redux';
import { ReactComponent as EmptyFeed } from '../../assets/NoBadgeFeed.svg';
import { ReactComponent as EmptyActivity } from '../../assets/noactivity.svg';
import ProfileTeamList from './ProfileTeamList';

export function Profile() {
	const [badges, setBadges] = useState([]);

	const [profileData, setProfileData] = useState({});
	const { comments, profile, feed } = useSelector(({ liveFeed, user }) => ({
		...liveFeed,
		...user,
	}));

	const id = profile.id;

	useEffect(() => {
		const fetchData = async () => {
			const { data: profileData } = await axiosWithAuth().get(
				`/profile/${id}`,
			);
			setProfileData(profileData.peer);

			const { data: badgeData } = await axiosWithAuth().get('/badges');
			setBadges(badgeData);
		};
		fetchData();
	}, [id]);

	const userBadges = useMemo(() => {
		const array = [];
		if (profileData.rec) {
			for (const rec of profileData.rec) {
				if (profileData.id === rec.sender) continue;
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
	}, [profileData, badges]);

	let numberOfBadges = 0;
	for (let bdg of userBadges) {
		if (bdg.badge) {
			numberOfBadges += bdg.count;
		}
	}

	return (
		<main className="container-entire-profile">
			<section className="my-team-members">
				<ProfileTeamList myProfile={profile} profile={profileData} />
			</section>
			{feed.length > 0 ? (
				<section className="main-container-badges">
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

			{feed.length > 0 ? (
				<section className="activity-card">
					<h5 className="title-activity-card">My activity</h5>
					<section id="profile-activity-card">
						<Activity
							profileBadges={badges}
							setProfileInfo={setProfileData}
							profileId={id}
							comments={comments}
							profile={profileData}
							profileInfo={profileData}
							inModal={false}
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

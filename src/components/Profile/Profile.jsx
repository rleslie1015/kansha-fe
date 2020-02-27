import React, { useState, useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
// import { Cropper } from '../FileUpload/FileCrop';
import { RecognitionCard } from './RecognitionCard';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
// import RecogModal from '../RecogModal/RecogModal';

import { Badge } from './styled';

export function Profile() {
	const [badges, setBadges] = useState([]);
	const { id } = useParams();
	const [profile, setProfile] = useState({});

	useEffect(() => {
		const fetchData = async () => {
			const { data: profileData } = await axiosWithAuth().get(
				`/profile/${id}`,
			);
			setProfile(profileData.peer);
			const { data: badgeData } = await axiosWithAuth().get('/badges');
			setBadges(badgeData);
		};
		fetchData();
	}, [id]);

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

	return (
		<main className="container-entire-profile">
			<section className="container-profile-card-and-badges">
				<section className="container-profile-card">
					<img src={profile.profile_picture} alt="user profile" />
					<section className="profile-name-info">
						<h5>
							{profile.first_name} {profile.last_name}
						</h5>
						<p>{profile.job_title}</p>
						<p>{profile.department}</p>
					</section>
				</section>
				<section className="container-badges">
					<h5 className="title-badges">Badges</h5>
					<ul>
						{badges && (
							<>
								{userBadges.map(badge => {
									return (
										<Badge
											key={badge.id}
											count={badge.count}>
											<img
												className="badge badge-profile"
												src={badge.badge}
												alt=""
											/>
										</Badge>
									);
								})}
							</>
						)}
					</ul>
				</section>
			</section>
			{/* This is the activity container on the righthand side and is currently hardcoded with rewards entries */}
			<section className="activity-card">
				<h5 className="title-activity-card">Activity</h5>
				<section className="inner-activity-card">
					{profile.rec &&
						profile.rec
							.sort(function(a, b) {
								return new Date(b.date) - new Date(a.date);
							})
							.map(recognition => (
								<RecognitionCard
									key={recognition.id}
									sent={profile.id === recognition.sender}
									badge={badges[recognition.badge_id - 1]}
									profile={profile}
									recognition={recognition}
								/>
							))}
				</section>
			</section>
		</main>
	);
}

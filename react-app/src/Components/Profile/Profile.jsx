import React, { useState, useEffect, useMemo } from 'react';
import {
	Container,
	Typography,
	Card,
	Box,
	Paper,
	Badge,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import 'typeface-montserrat';
import 'typeface-roboto';
import { Cropper } from '../FileUpload/FileCrop';
import { RecognitionCard } from './RecognitionCard';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import RecogModal from '../RecogModal/RecogModal';

export function Profile({ profile, isPeer }) {
	const [badges, setBadges] = useState([]);

	useEffect(() => {
		axiosWithAuth()
			.get('/badges')
			.then(res => {
				setBadges(res.data);
			})
			.catch(err => {
				console.log(err);
			});
	}, []);

	const userBadges = useMemo(
		() =>
			profile.rec.reduce((acc, rec) => {
				if (profile.id === rec.sender) {
					return acc;
				} else if (rec.badge_id && acc[rec.badge_id]) {
					acc[rec.badge_id].count++;
				} else if (badges.length && rec.badge_id) {
					acc[rec.badge_id] = {
						badge: badges[rec.badge_id - 1].badge_URL,
						count: 1,
					};
				}
				return acc;
			}, {}),
		[profile, badges],
	);

	console.log(userBadges);

	return (
		//This may need to be refactored in a future build if things are added in order to make it more mobile-friendly
		<div id="Profile" className="profile-div">
			{/* <Link to="/workspace">workspace</Link> */}
			<div fixed className="root">
				{/* This is the profile card with the image on the top lefthand side, profile picture and "username" are coming from Auth0*/}
				<div fixed className="left-container">
					<div className="user-info">
						<div className="picture-container">
							<img
								src={profile.profile_picture}
								className="profile-pic"
								alt="user profile"
							/>
							{!isPeer && (
								<div className="add-pic">
									<Cropper />
								</div>
							)}
						</div>

						<h5 className="name">
							{profile.first_name} {profile.last_name}
						</h5>
						<p className="job-title">{profile.job_title}</p>
						<p className="department">{profile.department}</p>
						{isPeer && <RecogModal {...profile} />}
					</div>
					{/* This is the badges card at the bottom of the lefthand side, and is currently hardcoded with badge pictures */}
					<div className="badge-card">
						<h5 className="header">Badges</h5>
						<div className="badge-container">
							{badges && (
								<>
									{Object.keys(userBadges).map(id => {
										if (userBadges[id].count === 1) {
											return (
												<div className="badge-div">
													<img
														src={
															userBadges[id].badge
														}
														className="badge-image"
													/>
												</div>
											);
										} else {
											return (
												<div className="badge-div">
													<div
														badgeContent={
															'x' +
															userBadges[id].count
														}
														className="badge-count"
														overlap="circle">
														<img
															src={
																userBadges[id]
																	.badge
															}
															className="badge-image"
														/>
													</div>
												</div>
											);
										}
									})}
								</>
							)}
						</div>
					</div>
				</div>
				{/* This is the activity container on the righthand side and is currently hardcoded with rewards entries */}
				<div className="right-container">
					<div className="activity-info">
						<h5 className="header">Activity</h5>
						<div className="activity-container">
							{profile &&
								profile.rec
									.sort(function(a, b) {
										return (
											new Date(b.date) - new Date(a.date)
										);
									})
									.map(recognition => (
										<RecognitionCard
											key={recognition.id}
											sent={
												profile.id ===
												recognition.sender
											}
											badge={
												badges[recognition.badge_id - 1]
											}
											profile={profile}
											recognition={recognition}
										/>
									))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

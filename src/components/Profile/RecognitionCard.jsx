import React, { useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import { timeAgo } from '../../utils/timeago';
import trashcan from '../../assets/Trashcan.png';
import { useSelector } from 'react-redux';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

export function RecognitionCard({ recognition, sent, badge }) {
	const time = useMemo(() => timeAgo(recognition.date), [recognition]);
	const history = useHistory();
	const profile = useSelector(state => state.user.profile);

	const handleDelete = rec => {
		// this will need to be turned into a confirmation modal, like the one on the figma.
		if (
			window.confirm(
				'Are you sure you would like to delete this recognition?',
			)
		) {
			axiosWithAuth()
				.delete(`/rec/${rec.id}`)
				.then(() => {
					// i dunno how to get the user id of said profile....
					// is coming up object object
					// will figure out later...
					history.push(`/profile/${rec.sender}`);
				});
		}
	};

	if (profile.user_type === 'admin') {
		return (
			<section className="container-recognition-card container-recognition-card-admin">
				<div>
					<img
						src={
							sent
								? 'https://kansha-bucket.s3-us-west-1.amazonaws.com/avatar.png'
								: recognition.profile_pic
						}
						onClick={() => {
							history.push(
								`/profile/${
									sent
										? recognition.recipient
										: recognition.sender
								}`,
							);
						}}
						alt="user avatar"
					/>
				</div>

				<div>
					<div>
						<img
							src={trashcan}
							alt="trash can icon"
							onClick={() => handleDelete(recognition)}
						/>
					</div>
					<div>
						<div
							onClick={() => {
								history.push(
									`/profile/${
										sent
											? recognition.recipient
											: recognition.sender
									}`,
								);
							}}>
							{sent
								? `Sent to ${recognition.first_name} ${recognition.last_name}`
								: `${recognition.first_name} ${recognition.last_name}`}
						</div>
					</div>
					<div>
						<p>{recognition.message}</p>
					</div>
					{badge && (
						<div>
							<img src={badge.badge_URL} alt="" />
						</div>
					)}
					<div>
						<p>{time}</p>
					</div>
				</div>
			</section>
		);
	} else if (
		profile.user_type === 'mod' &&
		profile.department === recognition.department
	) {
		return (
			<div>
				<div>
					<img
						src={
							sent
								? 'https://kansha-bucket.s3-us-west-1.amazonaws.com/avatar.png'
								: recognition.profile_pic
						}
						onClick={() => {
							history.push(
								`/profile/${
									sent
										? recognition.recipient
										: recognition.sender
								}`,
							);
						}}
						alt="user avatar"
					/>
				</div>
				<div>
					<div>
						<img
							src={trashcan}
							alt="trash can icon"
							onClick={() => handleDelete(recognition)}
						/>
					</div>
					<div>
						<div
							onClick={() => {
								history.push(
									`/profile/${
										sent
											? recognition.recipient
											: recognition.sender
									}`,
								);
							}}>
							{sent
								? `Sent to ${recognition.first_name} ${recognition.last_name}`
								: `${recognition.first_name} ${recognition.last_name}`}
						</div>
					</div>
					<div>
						<p>{recognition.message}</p>
					</div>
					{badge && (
						<div>
							<img src={badge.badge_URL} alt="" />
						</div>
					)}
					<div>
						<p>{time}</p>
					</div>
				</div>
			</div>
		);
	} else {
		return (
			<section className="container-recognition-card container-recognition-card-user">
				<div>
					<img
						className="picture-profile-medium"
						src={
							sent
								? 'https://kansha-bucket.s3-us-west-1.amazonaws.com/avatar.png'
								: recognition.profile_pic
						}
						onClick={() => {
							history.push(
								`/profile/${
									sent
										? recognition.recipient
										: recognition.sender
								}`,
							);
						}}
						alt="user avatar"
					/>
				</div>
				<div>
					<div>
						<div
							onClick={() => {
								history.push(
									`/profile/${
										sent
											? recognition.recipient
											: recognition.sender
									}`,
								);
							}}>
							{sent
								? `Sent to ${recognition.first_name} ${recognition.last_name}`
								: `${recognition.first_name} ${recognition.last_name}`}
						</div>
					</div>
					<div>
						<p>{recognition.message}</p>
					</div>
					{badge && (
						<div>
							<img
								className="badge badge-recognition-card"
								src={badge.badge_URL}
								alt={badge.badge_name}
							/>
						</div>
					)}
					<div>
						<p>{time}</p>
					</div>
				</div>
			</section>
		);
	}
}

import React from 'react';
import Modal from '../../components/Modal';
import { ReactComponent as AddComment } from '../../assets/addcomment.svg';
import { ReactionButton } from '../../components/Feed/ReactionButton';
import { SendComments } from '../Feed/SendComment';

function ProfileModal({
	profile,
	rec,
	reactions,
	comments,
	badge,
	close,
	setProfileSelect,
}) {
	const handleClose = () => {
		setProfileSelect(false);
		close(false);
	};
	console.log(rec, 'rec');

	/*id: 767
sub: "google-oauth2|112250268762727639307"
first_name: "Joscelyn"
last_name: "Stancek"
profile_picture: "https://lh6.googleusercontent.com/-DXV638e0msA/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rcLpIrYUK3qmQBMp2URcys-Izrejw/photo.jpg"
department: "Team Awesome"
email: "Jos O"
recipient: 47
sender: 48
message: "Thanks a lot!"
date: "2020-03-18T22:08:10.622Z"
badge_id: 5
org_id: 4
org_name: "Lambda"
recipient_last: "Gillies"
recipient_first: "Aaron"
recipient_job_title: "Software Engineer"
recipient_picture: "https://kansha-bucket.s3.us-west-1.amazonaws.com/1583441408751"*/

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
						</div>
					</main>
				</div>
			</Modal>
		</>
	);
}
export default ProfileModal;

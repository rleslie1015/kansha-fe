import React from 'react';
import { RecognitionCard } from '../Profile/RecognitionCard';

function Activity({
	profileBadges,
	setProfileInfo,
	comments,
	profile,
	profileInfo,
	sent,
	isLoading,
	inModal,
}) {
	return (
		<div className="profile-activity">
			{inModal ? <h2 className="activity-header">Activity</h2> : null}
			<section className="inner-activity-card">
				{profileInfo.rec &&
					profileInfo.rec
						.sort(function (a, b) {
							return new Date(b.date) - new Date(a.date);
						})
						.map((recognition) => (
							<div className="container-card-and-buttons">
								<RecognitionCard
									key={recognition.id}
									sent={sent}
									profileBadges={profileBadges}
									recognition={recognition}
									setProfileInfo={setProfileInfo}
									profileId={recognition.recipient}
									comments={comments}
									profileData={profile}
									isLoading={isLoading}
									rec={recognition}
									inModal={inModal}
								/>
							</div>
						))}
			</section>
		</div>
	);
}

export default Activity;

import React from 'react';
import { RecognitionCard } from '../Profile/RecognitionCard';

function Activity({ profileBadges, profileInfo, sent, isLoading, inModal }) {
	return (
		<div className="profile-activity">
			{/*The reason why it's checking whether it's in the modal is do that on the end user dashboard there aren't two Activity headers */}
			{inModal ? <h2 className="activity-header">Activity</h2> : null}
			<section className="inner-activity-card">
				{profileInfo.rec &&
					profileInfo.rec
						.sort(function(a, b) {
							return new Date(b.date) - new Date(a.date);
						})
						.map(recognition => (
							<div className="container-card-and-buttons">
								<RecognitionCard
									key={recognition.id}
									sent={sent}
									profileBadges={profileBadges}
									recognition={recognition}
									isLoading={isLoading}
									inModal={inModal}
								/>
							</div>
						))}
			</section>
		</div>
	);
}

export default Activity;

import React from 'react';
import isometric from './images/isometric.png';
import activityIcon from './images/activity.png';
import adminIcon from './images/admin.png';
import badgeIcon from './images/badge.png';
import heartIcon from './images/heart.png';
import rewardIcon from './images/reward.png';
import workspaceIcon from './images/workspace.png';

export default function WhyKansha() {
	return (
		<div className="why-kansha-container">
			<h3 className="header-why-kansha">Why Kansha?</h3>
			<div className="features-why-kansha">
				<div className="feature-why-kansha">
					<h4 className="title-feature-why-kansha">Rewards</h4>
					<p className="text-feature-why-kansha">
						Send your peers a gift card with a message to show
						recognition.
					</p>
				</div>
				<div className="feature-why-kansha">
					<h4 className="title-feature-why-kansha">Workspace</h4>
					<p className="text-feature-why-kansha">
						Connecting people in the same workspace creating public
						recognition.
					</p>
				</div>
				<div className="feature-why-kansha">
					<h4 className="title-feature-why-kansha">Earn Badges</h4>
					<p className="text-feature-why-kansha">
						Earn and send badges to your peers that represent their
						hard work.
					</p>
				</div>
				<div className="feature-why-kansha">
					<h4 className="title-feature-why-kansha">Admin Access</h4>
					<p className="text-feature-why-kansha">
						Only admin users have access to certain features to
						ensure moderation.
					</p>
				</div>
				<div className="feature-why-kansha">
					<h4 className="title-feature-why-kansha">Leave a ❤️</h4>
					<p className="text-feature-why-kansha">
						React to posts with your favorite emoji to show your
						appreciation.
					</p>
				</div>
				<div className="feature-why-kansha">
					<h4 className="title-feature-why-kansha">Activity</h4>
					<p className="text-feature-why-kansha">
						Keep track of your recognitions with our profile
						activities tracker.
					</p>
				</div>
			</div>
		</div>
	);
}

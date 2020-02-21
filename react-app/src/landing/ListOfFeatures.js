import React from 'react';
import isometric from './images/isometric.png';
import activityIcon from './images/activity.png';
import adminIcon from './images/admin.png';
import badgeIcon from './images/badge.png';
import heartIcon from './images/heart.png';
import rewardIcon from './images/reward.png';
import workspaceIcon from './images/workspace.png';
import Heart from '../assets/heart.png';

export default function ListOfFeatures() {
	return (
		<div className="list-of-features-container">
			<h3 className="header-list-of-features">
				Recognize, Motivate, and Track Accomplishments
			</h3>
			<div className="features-list-of-features">
				<div className="feature-list-of-features">
					<div className="text-container-list-of-features">
						<h4 className="title-feature-list-of-features">
							Rewards
						</h4>
						<p className="text-feature-list-of-features">
							Send your peers a gift card with a message to show
							recognition.
						</p>
					</div>
				</div>
				<div className="feature-list-of-features">
					<div className="text-container-list-of-features">
						<h4 className="title-feature-list-of-features">
							Workspace
						</h4>
						<p className="text-feature-list-of-features">
							Connecting people in the same workspace creating
							public recognition.
						</p>
					</div>
				</div>
				<div className="feature-list-of-features">
					<div className="text-container-list-of-features">
						<h4 className="title-feature-list-of-features">
							Earn Badges
						</h4>
						<p className="text-feature-list-of-features">
							Earn and send badges to your peers that represent
							their hard work.
						</p>
					</div>
				</div>

				<div className="feature-list-of-features">
					<div className="text-container-list-of-features">
						<h4 className="title-feature-list-of-features">
							Admin Access
						</h4>
						<p className="text-feature-list-of-features">
							Only admin users have access to certain features to
							ensure moderation.
						</p>
					</div>
				</div>
				<div className="feature-list-of-features">
					<div className="text-container-list-of-features">
						<h4 className="title-feature-list-of-features">
							Leave a <img width="21" src={Heart} />
						</h4>
						<p className="text-feature-list-of-features">
							React to posts with your favorite emoji to show your
							appreciation.
						</p>
					</div>
				</div>
				<div className="feature-list-of-features">
					<div className="text-container-list-of-features">
						<h4 className="title-feature-list-of-features">
							Activity
						</h4>
						<p className="text-feature-list-of-features">
							Keep track of your recognitions with our profile
							activities tracker.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

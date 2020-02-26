import React from 'react';
import activityIcon from '../../assets/activity.svg';
import adminIcon from '../../assets/admin.svg';
import workspaceIcon from '../../assets/workspace.svg';
import badgeIcon from '../../assets/badge.svg';
import heartIcon from '../../assets/heart.svg';
import rewardIcon from '../../assets/reward.svg';

import Heart from '../../assets/heart.png';

export default function ListOfFeatures() {
	return (
		<section className="list-of-features-container">
			<h2>Recognize, motivate, and track accomplishments.</h2>
			<section>
				<section className="feature">
					<img src={rewardIcon} alt="gift" />
					<div>
						<h3>Rewards</h3>
						<p>
							Send your peers a gift card with a message to show
							recognition.
						</p>
					</div>
				</section>
				<section className="feature">
					<img src={workspaceIcon} alt="peers icon" />
					<div>
						<h3>Workspace</h3>
						<p>
							Connecting people in the same workspace creating
							public recognition.
						</p>
					</div>
				</section>
				<section className="feature">
					<img src={adminIcon} alt="gear icon" />
					<div>
						<h3>Admin Access</h3>
						<p>
							Only admin users have access to certain features to
							ensure moderation.
						</p>
					</div>
				</section>

				<section className="feature">
					<img src={badgeIcon} alt="gear icon" />
					<div>
						<h3>Earn Badges</h3>
						<p>
							Earn and send badges to your peers that represent
							their hard work.
						</p>
					</div>
				</section>
				<section className="feature">
					<img src={heartIcon} alt="heart icon" />
					<div>
						<h3>
							Leave a <img src={Heart} alt="heart icon" />
						</h3>
						<p>
							React to posts with your favorite emoji to show your
							appreciation.
						</p>
					</div>
				</section>
				<section className="feature">
					<img src={activityIcon} alt="speech bubble icon" />
					<div>
						<h3>Activity</h3>
						<p>
							Keep track of your recognitions with our profile
							activities tracker.
						</p>
					</div>
				</section>
			</section>
		</section>
	);
}

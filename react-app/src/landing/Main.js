import React from 'react';
import activityIcon from './images/activity.png';
import adminIcon from './images/admin.png';
import badgeIcon from './images/badge.png';
import heartIcon from './images/heart.png';
import rewardIcon from './images/reward.png';
import workspaceIcon from './images/workspace.png';

export default function Main() {
	return (
		<>
			<div id="features">Features</div>

			<div className="root">
				<div direction="row" className="container">
					<div item className="card">
						<div className="image">
							<img className="img" alt="reward" />
						</div>
					</div>
					<div>
						<div>
							<div>
								<div className="font">Send a Reward</div>
								<div className="cardFont">
									Send your peers a gift card with a message
									to show recognition.
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="container" className="paper">
					<div className="container">
						<div item>
							<div className="cimage">
								<img className="img" alt="workspace" />
							</div>
						</div>
						<div>
							<div>
								<div>
									<div className="font">Workspace</div>
									<div className="cardFont">
										Connecting people in the same workspace,
										creating public recognition
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="paper">
					<div className="container">
						<div item>
							<div className="image">
								<img src={adminIcon} />
							</div>
						</div>
						<div>
							<div>
								<div>
									<div className="font">Admin Access</div>
									<div className="cardFont">
										Only admin users have access to certain
										features to ensure moderation.
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="paper">
					<div className="container">
						<div>
							<div className="image">
								<img />
							</div>
						</div>
						<div>
							<div>
								<div>
									<div className="font">Earn Badges</div>
									<div className="cardFont">
										Earn and send badges to your peers that
										represent their hard work.
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="paper">
					<div className="container">
						<div>
							<div className="image">
								<img className="img" alt="heart" />
							</div>
						</div>
						<div>
							<div>
								<div>
									<div className="font">
										Leave a FavoriteIcon />
									</div>
									<div className="cardFont">
										React to posts with your favorite emoji
										to show appreciation.
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="paper">
					<p className="font" className="container">
						<div>
							<button className="divimage">
								<img className="img" alt="activity" />
							</button>
						</div>
						<button>
							<p>
								<p className="font" className="grid">
									<p className="font">Activity</p>
									<p className="cardfont">
										Keep track of your recognitions with our
										profile activities tracker.
									</p>
								</p>
							</p>
						</button>
					</p>
				</div>
			</div>
		</>
	);
}

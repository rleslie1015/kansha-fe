import React from 'react';
import { useHistory } from 'react-router-dom';

function FeedRecognition({ rec, badge, open }) {
	let history = useHistory();

	const handleClick = e => {
		e.preventDefault();
		history.push(`/profile/${rec.recipient}`);
	};

	return (
		<div className="recognition" onClick={handleClick}>
			<img
				alt="profile"
				className="rec-profile-pic"
				src={rec.recipient_picture}
			/>
			<div className="rec-badge-and-message">
				{badge && (
					<img
						alt="badge"
						className={`${open ? `rec-badge` : `hidden-rec`}`}
						src={badge?.badge_URL}
					/>
				)}
				<p
					style={{ paddingLeft: !badge && '10px' }}
					className={`${open ? `rec-message` : `hidden-rec`}`}>
					{rec?.message}
				</p>
			</div>
		</div>
	);
}

export default FeedRecognition;

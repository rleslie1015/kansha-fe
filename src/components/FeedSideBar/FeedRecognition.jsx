import React from 'react';

function FeedRecognition({ rec, badge, open }) {
	// const [open, setOpen] = React.useState(false);

	return (
		<div className="recognition">
			<img className="rec-profile-pic" src={rec.recipient_picture} />
			<div className="rec-badge-and-message">
				<img
					className={`${open ? `rec-badge` : `hidden-rec`}`}
					src={badge?.badge_URL}
				/>
				<p className={`${open ? `rec-message` : `hidden-rec`}`}>
					{rec?.message}
				</p>
			</div>
		</div>
	);
}

export default FeedRecognition;

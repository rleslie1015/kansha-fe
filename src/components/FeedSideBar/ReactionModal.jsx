import React from 'react';
import Modal from '../../components/Modal';
import { ReactComponent as AddComment } from '../../assets/addcomment.svg';
import { ReactionButton } from '../../components/Feed/ReactionButton';
import { SendComments } from '../Feed/SendComment';

function ReactionModal({
	profile,
	rec,
	reactions,
	comments,
	badge,
	close,
	setSelect,
}) {
	console.log(rec);

	const handleClose = ({ close }) => {
		setSelect(false);
		close(false);
	};

	return (
		<>
			<Modal close={handleClose}>
				<section className="rm-parent-cont">
					<div className="rm-user-info">
						<img
							className="rm-profile-pic"
							src={rec.recipient_picture}></img>
						<p>
							<span>{rec.recipient_first}</span>

							<span>{rec.recipient_last}</span>
						</p>

						<p className="rm-job_title">{profile.job_title}</p>
						<p>{profile.teams}</p>
						<img className="rm-badge" src={badge?.badge_URL} />
						<div className="rm-buttons">
							<ReactionButton reactions={reactions} />
							<AddComment />
						</div>

						<p className="rm-message">{rec.message}</p>
					</div>
					<div className="rm-comment-box">
						<SendComments id={rec.id} />
						<div className="rm-comments">
							{comments.map(comm => (
								<p>{comm.message}</p>
							))}
						</div>
					</div>
				</section>
			</Modal>
		</>
	);
}

export default ReactionModal;

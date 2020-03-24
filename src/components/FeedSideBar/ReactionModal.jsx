import React, { useState } from 'react';
import Modal from '../../components/Modal';
import { ReactComponent as AddComment } from '../../assets/addcomment.svg';
import { ReactionButton } from '../../components/Feed/ReactionButton';
import { SendComments } from '../Feed/SendComment';
import { CommentButton } from '../Feed/CommentButton';
import RMComments from './RMComments';

function ReactionModal({
	profile,
	rec,
	reactions,
	comments,
	badge,
	close,
	setSelect,
	open,
}) {
	const handleClose = () => {
		setSelect(false);
		close(false);
	};

	// const reversedComments = comments.reverse();

	return (
		<>
			<Modal close={handleClose}>
				<section className="rm-parent-cont">
					<div className="rm-user-info">
						<img
							alt="recipient"
							className="rm-profile-pic"
							src={rec.recipient_picture}></img>
						<p>
							<span>{rec.recipient_first}</span>

							<span>{rec.recipient_last}</span>
						</p>

						<p className="rm-job_title">
							{rec.recipient_job_title}
						</p>
						{/* <p>{profile.teams}</p> */}
						{badge && (
							<img
								alt="badge"
								className="rm-badge"
								src={badge.badge_URL}
							/>
						)}

						<div className="rm-buttons">
							<ReactionButton
								reactions={reactions}
								open={open}
								inModal={true}
								rec_id={rec.id}
								id={profile.id}
							/>

							<CommentButton
								comments={comments}
								open={open}
								inModal={true}
								rec_id={rec.id}
								id={profile.id}
							/>
						</div>

						<p className="rm-message">{rec.message}</p>
					</div>
					<div className="rm-comment-box">
						{/* <SendComments
							id={rec.id}
							messageSent={messageSent}
							setMessageSent={setMessageSent}
						/>
						{messageSent && (
							<div className="rm-comments">
								{comments.map(comm => (
									<RMComments
										key={comm.id}
										pic={comm.profile_picture}
										message={comm.message}
									/>
								))}
							</div>
						)} */}
					</div>
				</section>
			</Modal>
		</>
	);
}

export default ReactionModal;

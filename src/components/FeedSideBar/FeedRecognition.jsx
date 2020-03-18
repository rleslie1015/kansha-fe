import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loadPostData } from '../../store/actions/feed-actions';
import { ReactionButton } from '../Feed/ReactionButton';
import { ReactComponent as Trashcan } from '../../assets/Trashcan.svg';
import { ReactComponent as AddComment } from '../../assets/addcomment.svg';

function FeedRecognition({ rec, badge, open, profile, setSelectedRec }) {
	let history = useHistory();

	const { id: rec_id } = rec;
	console.log(rec, 'rec');

	const dispatch = useDispatch();
	useEffect(() => {
		if (!(rec.reactions || rec.comments)) {
			dispatch(loadPostData(rec_id));
		}
	}, [dispatch, rec_id, rec.reactions, rec.comments]);

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
				<div className="reaction-buttons">
					{
						<button onClick={() => setSelectedRec(rec_id)}>
							<AddComment />
							{/* <p>{comments.length}</p> */}
						</button>
					}
					{
						<>
							<ReactionButton
								id={profile.id}
								rec_id={rec_id}
								reactions={rec.reactions}
							/>
						</>
					}
				</div>
			</div>
		</div>
	);
}

export default FeedRecognition;

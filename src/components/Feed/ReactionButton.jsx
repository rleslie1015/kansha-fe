import React, { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { removeReaction, reactToPost } from '../../store/actions/feed-actions';

export const ReactionButton = ({ reactions, rec_id, id }) => {
	const dispatch = useDispatch();
	const userReaction = useMemo(
		() =>
			reactions.reduce(
				(a, reaction) => (id === reaction.user_id ? reaction.id : a),
				0,
			),
		[reactions, id],
	);

	const handleReaction = () => {
		if (userReaction) {
			dispatch(removeReaction(userReaction, rec_id));
		} else {
			dispatch(reactToPost(rec_id));
		}
	};

	return (
		<button
			aria-label={
				userReaction ? 'remove reaction to post' : 'react to post'
			}
			onClick={handleReaction}
			className="reaction-button">
			{userReaction ? (
				<div className="icon-reacted" />
			) : (
				<div className="icon-non-reacted" />
			)}
			<div className="count">{reactions && reactions.length}</div>
		</button>
	);
};

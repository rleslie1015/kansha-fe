import React, { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { removeReaction, reactToPost } from '../../store/actions/feed-actions';
import { ReactComponent as Heart } from '../../assets/singleheart.svg';

export const ReactionButton = ({ reactions, rec_id, id, open, inModal }) => {
	const dispatch = useDispatch();

	// checks whether the current logged in user is among those who liekd the post
	const userReaction = useMemo(() => {
		if (reactions) {
			return reactions.reduce(
				(a, reaction) => (id === reaction.user_id ? reaction.id : a),
				0,
			);
		} else {
			return 0;
		}
	}, [reactions, id]);

	const handleReaction = () => {
		if (userReaction) {
			dispatch(removeReaction(userReaction, rec_id));
		} else {
			dispatch(reactToPost(id, rec_id));
		}
	};

	return (
		<button
			className={`${open ? `reaction-button` : `hidden-rec`}`}
			aria-label={
				userReaction ? 'remove reaction to post' : 'react to post'
			}
			onClick={handleReaction}>
			<Heart className={userReaction ? 'heart-full' : 'heart-empty'} />
			{inModal && <p>{reactions?.length}</p>}
		</button>
	);
};

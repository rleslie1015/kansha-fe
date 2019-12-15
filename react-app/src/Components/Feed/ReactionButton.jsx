import React, { useMemo } from 'react';
import { Box } from '@material-ui/core';
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

	const HandleReaction = () => {
		if (userReaction) {
			console.log(userReaction);
			dispatch(removeReaction(userReaction, rec_id));
		} else {
			dispatch(reactToPost(rec_id));
		}
	};

	return (
		<Box>
			<button onClick={HandleReaction}>
				{userReaction ? 'un-react' : 'react'}
			</button>{' '}
			{reactions && reactions.length}
		</Box>
	);
};

import React, { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { removeReaction, reactToPost } from '../../store/actions/feed-actions';
import { ReactComponent as AddComment } from '../../assets/addcomment.svg';

export const CommentButton = ({ comments, rec_id, id, open }) => {
	const dispatch = useDispatch();
	const userReaction = useMemo(
		() =>
			comments.reduce(
				(a, comment) => (id === comment.user_id ? comment.id : a),
				0,
			),
		[comments, id],
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
			className={`${open ? `comment-button` : `hidden-rec`}`}
			aria-label={
				userReaction ? 'remove reaction to post' : 'react to post'
			}
			onClick={handleReaction}>
			<AddComment
				className={userReaction ? 'comment-full' : 'comment-empty'}
			/>
		</button>
	);
};

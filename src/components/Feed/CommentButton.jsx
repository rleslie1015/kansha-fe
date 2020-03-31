import React, { useMemo } from 'react';
import { ReactComponent as AddComment } from '../../assets/addcomment.svg';

export const CommentButton = ({
	comments,
	id,
	open,
	handleComment,
	inModal,
}) => {
	const userComment = useMemo(() => {
		if (comments) {
			return comments.reduce(
				(a, comment) => (id === comment.user_id ? comment.id : a),
				0,
			);
		} else {
			return 0;
		}
	}, [comments, id]);

	return (
		<button
			className={`${open ? `comment-button` : `hidden-rec`}`}
			aria-label="add a comment"
			onClick={handleComment}>
			<AddComment
				className={userComment ? 'comment-full' : 'comment-empty'}
			/>
			{inModal && <p>{comments?.length}</p>}
		</button>
	);
};

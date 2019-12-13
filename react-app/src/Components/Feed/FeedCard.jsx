import React, { useEffect, memo, useState } from 'react';
import { Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import {
	loadPostData,
	reactToPost,
	removeReaction,
	addComment
} from '../../store/actions/feed-actions';

export const FeedCard = memo(({ rec }) => {
	const [comment, setComment] = useState('');
	const { id: rec_id } = rec;
	const dispatch = useDispatch();
	const { comments, reactions, profile } = useSelector(
		({ liveFeed, user }) => ({
			...liveFeed,
			...user,
		}),
	);
	useEffect(() => {
		dispatch(loadPostData(rec_id));
	}, [dispatch, rec_id]);
	return (
		<>
			<Typography>
				{rec.first_name} {rec.last_name} sent to {rec.recipient_first}{' '}
				{rec.recipient_last}
			</Typography>
			<Typography>{rec.message}</Typography>
			{reactions[rec_id] &&
			reactions[rec_id].reduce(
				(a, { user_id }) => profile.id === user_id || a,
				false,
			) ? (
				<button
					onClick={() =>
						dispatch(
							removeReaction(
								reactions[rec_id].reduce(
									(a, i) =>
										i.user_id === profile.id ? i.id : a,
									0,
								),
							),
						)
					}>
					unlike
				</button>
			) : (
				<button onClick={() => dispatch(reactToPost(rec_id))}>
					like
				</button>
			)}{' '}
			{reactions[rec_id] && reactions[rec_id].length}
			<Typography>{'\n\n comments: \n'}</Typography>
			<input
				value={comment}
				onChange={e => setComment(e.target.value)}></input>
			<button onClick={() => dispatch(addComment(rec_id, comment))}>comment</button>
			{comments[rec_id] &&
				comments[rec_id].map(comment => (
					<Typography>{comment.first_name} {comment.last_name} commented: {comment.message}</Typography>
				))}
		</>
	);
});

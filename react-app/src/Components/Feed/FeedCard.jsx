import React, { useEffect, memo, useState } from 'react';
import { Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { loadPostData, addComment } from '../../store/actions/feed-actions';
import { ReactionButton } from './ReactionButton';

export const FeedCard = memo(({ rec, comments, reactions, profile }) => {
	const [comment, setComment] = useState('');
	const { id: rec_id } = rec;
	const dispatch = useDispatch();
	useEffect(() => {
		if (!(reactions || comments)) {
			dispatch(loadPostData(rec_id));
		}
	}, [dispatch, rec_id, reactions, comments]);
	return (
		<>
			<Typography>
				{rec.first_name} {rec.last_name} sent to {rec.recipient_first}{' '}
				{rec.recipient_last}
			</Typography>
			<Typography>{rec.message}</Typography>
			{reactions && (
				<>
					<ReactionButton
						id={profile.id}
						rec_id={rec_id}
						reactions={reactions}
					/>
					<Typography>{'\n\n comments: \n'}</Typography>
				</>
			)}
			<input
				value={comment}
				onChange={e => setComment(e.target.value)}></input>
			<button onClick={() => dispatch(addComment(rec_id, comment))}>
				comment
			</button>

			{comments &&
				comments.map(comment => (
					<Typography>
						{comment.first_name}
						{comment.last_name} {comment.message}
					</Typography>
				))}
		</>
	);
});

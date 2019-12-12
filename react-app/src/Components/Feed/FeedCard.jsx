import React, { useEffect } from 'react';
import { Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { loadPostData } from '../../store/actions/feed-actions';

export const FeedCard = ({ rec }) => {
	const { id: rec_id } = rec;
	const dispatch = useDispatch();
	const { comments, reactions, id: user_id } = useSelector(
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
			{reactions[rec_id] && reactions[rec_id].reduce((a, { id }) => console.log(id === user_id), false) ? (
				<button>unlike</button>
			) : (
				<button>like</button>
			)}{' '}
            {reactions[rec_id] && reactions[rec_id].length}
            {comments[rec_id] && comments[rec_id].map(comment => <Typography>{comment.message}</Typography>)}
		</>
	);
};

import React, { useEffect, memo } from 'react';
import { Typography, Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useDispatch } from 'react-redux';
import { loadPostData } from '../../store/actions/feed-actions';
import { ReactionButton } from './ReactionButton';

const useStyles = makeStyles(theme => ({
	FeedCard: {
		padding: '20px',
		background: '#2D2C35',
	},
}));

export const FeedCard = memo(({ rec, comments, reactions, profile }) => {
	const classes = useStyles();
	const { id: rec_id } = rec;
	const dispatch = useDispatch();
	useEffect(() => {
		if (!(reactions || comments)) {
			dispatch(loadPostData(rec_id));
		}
	}, [dispatch, rec_id, reactions, comments]);
	return (
		<Card className={classes.FeedCard}>
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
			{/*
			<button onClick={() => dispatch(addComment(rec_id, comment))}>
				comment
			</button>
			*/}
		</Card>
	);
});

import React from 'react';
import { Card, makeStyles } from '@material-ui/core';

import { Comment } from './Comment'

const useStyles = makeStyles(theme => ({
	CommentCard: {
        display: 'flex',
        flexDirection: 'column',
		width: '40%',
		padding: '20px',
		color: '#FFFFFF',
		background: '#2D2C35',
		margin: '10px 10px',
    },
}));

export const FeedComments = ({ comments }) => {
	const classes = useStyles();
	return (
		<Card className={classes.CommentCard}>
			{comments.map(comment => (
                <Comment comment={comment} />
			))}
		</Card>
	);
};

import React, { useMemo } from 'react';
import { Typography, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { removeReaction, reactToPost } from '../../store/actions/feed-actions';

// Heart Icons
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@material-ui/icons/FavoriteOutlined';

const useSyles = makeStyles(theme => ({
	ReactionButton: {
		backgroundColor: 'rgba(80, 80, 80, 0.21)',
		padding: '5px',
	},
	IconReacted: {
		color: '#EE4D71',
		height: '30px',
		margin: 0,
		padding: 0,
	},
	IconNonReacted: {
		color: '#FFFFFF;',
		height: '28px',
		margin: 0,
		padding: 0,
	},
	Count: {
		fontFamily: 'Montserrat',
		fontStyle: 'normal',
		fontWeight: '500',
		fontSize: '16px',
		lineHeight: '30px',
		display: 'flex',
		alignItems: 'center',
		letterSpacing: '0.1px',
		color: 'rgba(255, 255, 255, 0.7)',
		margin: 0,
		padding: 0,
		paddingLeft: '5px'
	},
}));

export const ReactionButton = ({ reactions, rec_id, id }) => {
	const classes = useSyles();
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
		<IconButton
			aria-label={
				userReaction ? 'remove reaction to post' : 'react to post'
			}
			onClick={handleReaction}
			className={classes.ReactionButton}>
			{userReaction ? (
				<FavoriteOutlinedIcon className={classes.IconReacted} />
			) : (
				<FavoriteBorderOutlinedIcon
					className={classes.IconNonReacted}
				/>
			)}
			<Typography className={classes.Count}>{reactions && reactions.length}</Typography>
		</IconButton>
	);
};

import React, { memo } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { ListItem, ListItemIcon } from '@material-ui/core';
import { useHistory, useRouteMatch } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
	icons: {
		width: '75%',
		height: 'auto',
		marginTop: '15%',
		paddingRight: '20%'
	},
	iconsOpen: {
		paddingLeft: '20%',
		width: '75%',
		height: 'auto',
		marginTop: '0%',
	},
	closedActive: {
		background: 'linear-gradient(138.01deg, #EE4D71 0%, #F15A3F 100%)',
		borderRadius: '2px',
		padding: '2% 3% 2% 3%',
		width: '75%',
		marginLeft: '-15%',
		marginRight: '15%',
	},
	openActive: {
		background: 'linear-gradient(170.5deg, #EE4D71 0%, #F15A3F 100%)',
		borderRadius: '2px',
		padding: '2% 3% 2% 3%',
		width: '75%',
		marginLeft: '-15%',
		marginRight: '15%',
	},
	closedInactive: {
		padding: '2% 3% 2% 3%',
		width: '75%',
		marginLeft: '-15%',
		marginRight: '15%',
	},
	openInactive: {
		padding: '2% 3% 2% 3%',
		width: '35%',
	},
	listText: {
		fontFamily: 'Montserrat',
		fontStyle: 'normal',
		fontWeight: 'normal',
		fontSize: '16px',
		lineHeight: '20px',
		marginTop: '3%',
		textDecoration: 'none',
		color: '#FFFFFF',
	},
	active: {
		background: 'linear-gradient(135deg, #EE4D71 0%, #F15A3F 100%)',
	},
}));

export const SidebarLink = memo(({ name, path, open, icon }) => {
	const classes = useStyles();
	const history = useHistory();
	const match = useRouteMatch(path);

	let { isExact } = match ? match : { isExact: false };

	return (
		<ListItem
			button
			className={clsx({ [classes.active]: isExact })}
			key={name}
			onClick={() => history.push(path)}>
			<ListItemIcon
				className={clsx({
					[classes.closedInactive]: !open,
					[classes.openInactive]: open,
					[classes.icons]: !open,
					[classes.iconsOpen]: open,
				})}>
				<img src={icon} alt="profile icon" className={classes.icons} />
			</ListItemIcon>
			<p className={classes.listText}>{name}</p>
		</ListItem>
	);
});

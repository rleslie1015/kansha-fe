import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
	ListItem,
	ListItemIcon,
} from '@material-ui/core';
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
	},
	menuButton: {
		color: 'white',
		marginLeft: '-4%',
		width: '100%',
		height: 'auto',
	},
	closeMenuButton: {
		marginLeft: '-75%',
		width: '15%',
		height: 'auto',
	},
	hide: {
		display: 'none',
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
		whiteSpace: 'nowrap',
	},
	drawerOpen: {
		color: 'white',
		backgroundColor: '#2D2C35',
		width: drawerWidth,
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	drawerClose: {
		color: 'white',
		backgroundColor: '#2D2C35',
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		overflowX: 'hidden',
		width: theme.spacing(7) + 1,
		[theme.breakpoints.up('sm')]: {
			width: theme.spacing(9) + 1,
		},
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
	},
	signoutOpen: {
		marginTop: '19vh',
		fontFamily: 'Montserrat',
		fontStyle: 'normal',
		fontWeight: 'normal',
		fontSize: '16px',
		lineHeight: '20px',
		color: '#EE4D71',
		marginLeft: '25%',
	},
	signoutClosed: {
		marginTop: '20vh',
	},
	menuClosed: {
		marginTop: '25vh',
	},
	menuOpen: {
		marginTop: '0',
	},
	header: {
		color: 'white',
		marginLeft: '3%',
		marginBottom: '10%',
	},
	heading: {
		fontFamily: 'Montserrat',
		fontStyle: 'normal',
		fontWeight: '500',
		fontSize: '24px',
		lineHeight: '29px',
		textAlign: 'center',
	},
	img: {
		width: '50%',
		height: 'auto',
		marginLeft: '25%',
		borderRadius: '50%',
	},
	icons: {
		paddingLeft: '20%',
		width: '75%',
		height: 'auto',
		marginTop: '15%',
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
        color: '#FFFFFF'
	},
	listItem1: {
		marginTop: '10vh',
	},
}));

export function SidebarLink({ name, path, open, icon }) {
    const classes = useStyles()
    const history = useHistory()
    
	return (
		<ListItem button key={name} onClick={()=> history.push(path)}>
			<ListItemIcon
				className={clsx({
					[classes.closedInactive]: !open,
					[classes.openInactive]: open,
					[classes.icons]: !open,
					[classes.iconsOpen]: open,
				})}>
				<img
					src={icon}
					alt="profile icon"
					className={classes.icons}
				/>
			</ListItemIcon>
			<p className={classes.listText}>{name}</p>
		</ListItem>
	);
}
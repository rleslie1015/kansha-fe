import React from 'react';
import { Button, Menu, MenuItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Auth from '../utils/auth';
import { makeStyles } from '@material-ui/core/styles';
import 'typeface-montserrat';

const auth = new Auth();

const useStyles = makeStyles(theme => ({
	hideNav: {
		padding: theme.spacing(1),
		[theme.breakpoints.down('sm')]: {
			display: 'flex',
			flexDirection: 'row',
			justifyContent: 'space-between',
		},
		[theme.breakpoints.up('md')]: {
			display: 'flex',
			flexDirection: 'row',
		},
		[theme.breakpoints.up('lg')]: {
			display: 'none',
		},
	},

	menuIcon: {
		color: 'white',
		'&:hover': {
			color: '#ee4d71',
		},
	},
}));

export default function NavMenu() {
	const classes = useStyles();

	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClick = event => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div className={classes.hideNav}>
			<Button
				aria-controls="simple-menu"
				aria-haspopup="true"
				onClick={handleClick}
				className={classes.menuIcon}>
				<MenuIcon />
			</Button>
			<Menu
				id="simple-menu"
				anchorEl={anchorEl}
				keepMounted
				open={Boolean(anchorEl)}
				onClose={handleClose}>
				<MenuItem onClick= {()=>window.location.hash='features'}>Learn More</MenuItem>
				<MenuItem onClick={()=>window.location.hash='our_team'}>Our Team</MenuItem>
				<MenuItem onClick={auth.login}>Get Started</MenuItem>
			</Menu>
		</div>
	);
}

import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
	Typography,
	Drawer,
	List,
	CssBaseline,
	Divider,
	IconButton,
	ListItem,
	ListItemIcon,
} from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import openMenu from '../../assets/open-menu.png';
import closeMenu from '../../assets/close-menu.png';
import home from '../../assets/home.png';
import profile from '../../assets/profile.png';
import workspace from '../../assets/workspace.png';
import sendReward from '../../assets/send.png';
import rewardHistory from '../../assets/history.png';
import settings from '../../assets/settings.png';
import signOut from '../../assets/signout.png';
import 'typeface-montserrat';
import { connect } from 'react-redux';
import { SidebarLink } from './SideBarLink';
import { signout } from '../Auth';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
	root: {
		position: 'fixed',
		display: 'flex',
		'@global': {
			'*::-webkit-scrollbar': {
				display: 'none',
			},
		},
	},
	menuButton: {
		margin: 0,
		padding: 0,
		display: 'flex',
		justifyContent: 'center',
		color: 'white',
		width: '100%',
		height: 'auto',
		'&:hover': {
			background: 'linear-gradient(135deg, #EE4D71 0%, #F15A3F 100%)',
		},
	},
	menuButtonDiv: {
		[theme.breakpoints.down('sm')]: {
			backgroundColor: 'transparent',
			'&:hover': {
				background: 'linear-gradient(135deg, #EE4D71 0%, #F15A3F 100%)',
			},
		},
		[theme.breakpoints.up('md')]: {
			backgroundColor: 'transparent',
			'&:hover': {
				background: 'linear-gradient(135deg, #EE4D71 0%, #F15A3F 100%)',
			},
		},
		[theme.breakpoints.up('lg')]: {
			backgroundColor: '#2D2C35',
			'&:hover': {
				background: 'linear-gradient(135deg, #EE4D71 0%, #F15A3F 100%)',
			},
		},
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
		height: '100vh',
		display: 'flex',
		justifyContent: 'space-between',
		flexDirection: 'column',
		width: drawerWidth,
		flexShrink: 0,
		whiteSpace: 'nowrap',
	},
	drawerOpen: {
		color: 'white',
		justifyContent: 'space-between',
		overflow: 'hidden',
		backgroundColor: '#2D2C35',
		width: drawerWidth,
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	drawerClose: {
		justifyContent: 'space-between',
		color: 'white',
		overflow: 'hidden',
		border: 'none',
		backgroundColor: '#2D2C35',
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		overflowX: 'hidden',
		width: theme.spacing(7) + 1,
		[theme.breakpoints.down('sm')]: {
			width: theme.spacing(9) + 1,
			backgroundColor: 'transparent',
		},
		[theme.breakpoints.down('md')]: {
			width: theme.spacing(9) + 1,
			backgroundColor: 'transparent',
		},
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
	},
	menuItemDiv: {
		backgroundColor: '#2D2C35',
		'&:hover': {
			background: 'linear-gradient(135deg, #EE4D71 0%, #F15A3F 100%)',
		},
	},
	signoutOpen: {
		fontFamily: 'Montserrat',
		fontStyle: 'normal',
		fontWeight: 'normal',
		fontSize: '16px',
		lineHeight: '20px',
		color: '#EE4D71',
		'&:hover': {
			color: '#FFFFFF',
		},
	},
	signoutClosed: {
		[theme.breakpoints.down('sm')]: {
			display: 'none',
		},

		[theme.breakpoints.up('md')]: {
			display: 'none',
		},

		[theme.breakpoints.up('lg')]: {
			display: 'block',
			backgroundColor: '#2D2C35',
			'&:hover': {
				background: 'linear-gradient(135deg, #EE4D71 0%, #F15A3F 100%)',
			},
		},
	},
	menuClosed: {
		[theme.breakpoints.down('sm')]: {
			display: 'none',
		},

		[theme.breakpoints.up('md')]: {
			display: 'none',
		},

		[theme.breakpoints.up('lg')]: {
			display: 'block',
		},
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
		// Hard coding until we can make a circle img cropper for users
		width: '115px',
		height: '115px',
		objectFit: 'cover',
		objectPosition: '50% 50%',
		marginTop: '4%',
		marginLeft: '25%',
		borderRadius: '50%',
		background: 'linear-gradient(135deg, #EE4D71 0%, #F15A3F 100%)',
	},
	icons: {
		margin: '10px 0 10px 5px',
		width: '50%',
		height: 'auto',
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
	},
	listItem1: {
		marginTop: '10vh',
	},
	signOutListItem: {
		textAlign: 'center',
		paddingLeft: '65px'
	}
}));

function Sidebar({ user }) {
	const classes = useStyles();
	const theme = useTheme();
	const [open, setOpen] = React.useState(false);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (
		<div className={classes.root}>
			<CssBaseline />
			<Drawer
				variant="permanent"
				className={clsx(classes.drawer, {
					[classes.drawerOpen]: open,
					[classes.drawerClose]: !open,
				})}
				classes={{
					paper: clsx({
						[classes.drawerOpen]: open,
						[classes.drawerClose]: !open,
					}),
				}}
				open={open}>
				{/* This is the open menu button */}
				{ !open ? 
				(<div className={classes.menuButtonDiv}>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						onClick={handleDrawerOpen}
						edge="start"
						className={clsx(classes.menuButton, {
							[classes.hide]: open,
						})}>
						<img
							src={openMenu}
							alt="open menu icon"
							className={classes.icons}
						/>
					</IconButton>
				</div>) :
				/* this is the close menu button */
				(<div>
					<div className={classes.menuButtonDiv}>
						<IconButton
							aria-label="close drawer"
							onClick={handleDrawerClose}
							className={clsx(classes.menuButton, {
								[classes.hide]: !open,
							})}>
							{theme.direction === 'rtl' ? (
								<ChevronRightIcon />
							) : (
								<img
									src={closeMenu}
									alt="close menu icon"
									className={classes.closeMenuButton}
								/>
							)}
						</IconButton>
					</div>
					{/* this is the profile picture and name at the top of the open menu, everything in this className is a "if statement" */}
					<div
						className={clsx(classes.header, {
							[classes.hide]: !open,
						})}>
						<img
							src={user.profile.profile_picture}
							className={classes.img}
							alt="User"
						/>
						<Typography
							className={
								classes.heading
							}>{`${user.profile.first_name} ${user.profile.last_name}`}</Typography>
					</div>
				</div>) }
				<Divider />
				{/* this populates the icons in the closed menu and populates text also when menu is open */}
				<List
					className={clsx({
						[classes.menuClosed]: !open,
						[classes.menuOpen]: open,
					})}>
					<SidebarLink
						path="/home"
						name="Home"
						icon={home}
						open={open}
					/>
					<SidebarLink
						path="/profile"
						name="Profile"
						icon={profile}
						open={open}
					/>
					<SidebarLink
						path="/workspace"
						name="Workspace"
						icon={workspace}
						open={open}
					/>
					<SidebarLink
						path="/workspace#send_reward"
						name="Send Reward"
						icon={sendReward}
						open={open}
					/>
					<SidebarLink
						path="/profile#history"
						name="Rewards History"
						icon={rewardHistory}
						open={open}
					/>
					<SidebarLink
						path="/settings"
						name="Settings"
						icon={settings}
						open={open}
					/>
				</List>
				<Divider />
				{/* This "if statment" changes how far down the sign out button is on both closed and open menus */}
				<List
					className={clsx({
						[classes.signoutOpen]: open,
						[classes.signoutClosed]: !open,
					})}>
					{/* this populates the sign out icon on the closed menu and text on the open menu */}
					<ListItem  button onClick={() => signout()} key="Sign Out">
						<ListItemIcon
							className={clsx(classes.menuOpen, {
								[classes.hide]: open,
								[classes.closedInactive]: !open,
							})}>
							<img
								src={signOut}
								alt="sign out icon"
								className={classes.icons}
							/>
						</ListItemIcon>
						<p className={classes.signOutListItem}>Sign Out</p>
					</ListItem>
				</List>
			</Drawer>
		</div>
	);
}

export default connect(state => ({ ...state }), {})(Sidebar);

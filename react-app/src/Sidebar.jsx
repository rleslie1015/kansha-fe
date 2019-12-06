import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Typography, Drawer, List, CssBaseline, Divider, IconButton, ListItem, ListItemIcon, ListItemText} from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import profilePic from './picture/picture.png';
import openMenu from './assests/open-menu.png';
import closeMenu from './assests/close-menu.png';
import home from './assests/home.png';
import profile from './assests/profile.png';
import workspace from './assests/workspace.png';
import sendReward from './assests/send.png';
import rewardHistory from './assests/history.png';
import settings from './assests/settings.png';
import signOut from './assests/signout.png';
import 'typeface-montserrat';
import { connect } from 'react-redux';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  
  root: {
    display: 'flex',
    '@global': {
      '*::-webkit-scrollbar': {
        display: 'none',
      }
    },
  },
  menuButton: {
    color: 'white',
    margin: '1%',
    width: '100%',
    height: 'auto',
    '&:hover': {
			background: 'linear-gradient(135deg, #EE4D71 0%, #F15A3F 100%)',
		},
  },
  menuBottonDiv: {
    backgroundColor: '#2D2C35',
    '&:hover': {
			background: 'linear-gradient(135deg, #EE4D71 0%, #F15A3F 100%)',
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
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    color: 'white',
    overflow:'hidden',
    backgroundColor: '#2D2C35',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    color: 'white',
    overflow:'hidden',
    border: 'none',
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
    marginTop: '13vh',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '16px',
    lineHeight: '20px',
    color: '#EE4D71',
    marginLeft: '25%',
  },
  signoutClosed: {
    marginTop: '20vh'
  },
  menuClosed: {
    marginTop: '25vh'
  },
  menuOpen: {
    marginTop: '0'
  },
  header: {
    color: 'white',
    marginLeft: '3%',
    marginBottom: '10%'
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
    maxWidth: '115px',
    maxHeight: '115px',
    marginLeft: '25%',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #EE4D71 0%, #F15A3F 100%)', 
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
    marginTop: '0%'
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
    marginRight: '15%'
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
    marginTop: '3%'
  },
  listItem1: {
    marginTop: '10vh'
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
        open={open}
      >
          {/* This is the open menu button */}
          <div className={classes.menuBottonDiv}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <img src={openMenu} alt='open menu icon' className={classes.icons} />
          </IconButton>
          </div>
          {/* this is the close menu button */}
        <div>
          <div className={classes.menuBottonDiv}>
            <IconButton 
              aria-label="close drawer"
              onClick={handleDrawerClose} 
              className={clsx(classes.menuButton, {
                [classes.hide]: !open
              })}
            >
               {theme.direction === 'rtl' ? <ChevronRightIcon /> : <img src={closeMenu} alt='close menu icon' className={classes.closeMenuButton} />}
            </IconButton>
          </div>
            {/* this is the profile picture and name at the top of the open menu, everything in this className is a "if statement" */}
            <div className={clsx(classes.header, {
                [classes.hide]: !open
              })}
            >
            <img src={user.profile.profile_picture} className={classes.img} alt='User' />
            <Typography className={classes.heading}>{`${user.profile.first_name} ${user.profile.last_name}`}</Typography>
            </div>
        </div>
        <Divider />
        {/* this populates the icons in the closed menu and populates text also when menu is open */}
        <List className={clsx({[classes.menuClosed]: !open, [classes.menuOpen]: open})}>
          <ListItem button key='Home' className={clsx({[classes.listItem1]: open})}>
            <ListItemIcon className={clsx({[classes.closedInactive]: !open, [classes.openInactive]: open, [classes.icons]: !open, [classes.iconsOpen]: open})}><img src={home} alt='home icon' className={classes.icons}/></ListItemIcon >
            <p className={classes.listText}>Home</p>
          </ListItem>
          <ListItem button key='Profile' >
            <ListItemIcon className={clsx({[classes.closedInactive]: !open, [classes.openInactive]: open, [classes.icons]: !open, [classes.iconsOpen]: open})}><img src={profile} alt='profile icon' className={classes.icons} /></ListItemIcon >
            <p className={classes.listText}>Profile</p>
          </ListItem>
          <ListItem button key='Workspace' >          
            <ListItemIcon className={clsx({[classes.closedInactive]: !open, [classes.openInactive]: open, [classes.icons]: !open, [classes.iconsOpen]: open})}><img src={workspace} alt='workspace icon' className={classes.icons} /></ListItemIcon >
            <p className={classes.listText}>Workspace</p>
          </ListItem>
          <ListItem button key='Send Reward' >
            <ListItemIcon className={clsx({[classes.closedInactive]: !open, [classes.openInactive]: open, [classes.icons]: !open, [classes.iconsOpen]: open})}><img src={sendReward} alt='send rewards icon' className={classes.icons} /></ListItemIcon >
            <p className={classes.listText}>Send Reward</p>
          </ListItem>
          <ListItem button key='Rewards History' >
            <ListItemIcon className={clsx({[classes.closedInactive]: !open, [classes.openInactive]: open, [classes.icons]: !open, [classes.iconsOpen]: open})}><img src={rewardHistory} alt='reward history icon' className={classes.icons} /></ListItemIcon >
            <p className={classes.listText}>Rewards History</p>
          </ListItem>
          <ListItem button key='Settings' >
            <ListItemIcon className={clsx({[classes.closedInactive]: !open, [classes.openInactive]: open, [classes.icons]: !open, [classes.iconsOpen]: open})}><img src={settings} alt='settings icon' className={classes.icons} /></ListItemIcon >
            <p className={classes.listText}>Settings</p>
          </ListItem>
        </List>
        <Divider />
        {/* This "if statment" changes how far down the sign out button is on both closed and open menus */}
        <List className={clsx({[classes.signoutOpen]: open, [classes.signoutClosed]: !open})}>
            {/* this populates the sign out icon on the closed menu and text on the open menu */}
            <ListItem button key='Sign Out' >
              <ListItemIcon className={clsx(classes.menuOpen, {[classes.hide]: open, [classes.closedInactive]: !open})}>
                <img src={signOut} alt='sign out icon' className={classes.icons} />
              </ListItemIcon >
              <p>Sign Out</p>
          </ListItem>
        </List>
      </Drawer>
    </div>
    )
}

export default connect(state => ({...state}), {})(Sidebar);
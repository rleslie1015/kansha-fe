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


const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  menuButton: {
    color: 'white',
    marginRight: '5%',
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
    marginTop: '40vh',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '16px',
    lineHeight: '20px',
    color: '#EE4D71',
    marginLeft: '25%'
  },
  signoutClosed: {
    marginTop: '55vh'
  },
  header: {
    color: 'white',
    marginLeft: '25%',
    marginBottom: '10%'
  },
  img: {
    width: '50%',
    height: 'auto',
    marginLeft: '11%',
    borderRadius: '50%' 
  },
  icons: {
    width: '50%',
    height: 'auto'
  },
  closedActive: {
    background: 'linear-gradient(138.01deg, #EE4D71 0%, #F15A3F 100%)',
    borderRadius: '2px',
    padding: '2% 3% 2% 3%'
  },
  openActive: {
    background: 'linear-gradient(170.5deg, #EE4D71 0%, #F15A3F 100%)',
    borderRadius: '2px'
  }
}));

function Sidebar() {
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
          {/* this is the close menu button */}
        <div>
            <IconButton 
              aria-label="close drawer"
              onClick={handleDrawerClose} 
              className={clsx(classes.menuButton, {
                [classes.hide]: !open
              })}
            >
               {theme.direction === 'rtl' ? <ChevronRightIcon /> : <img src={closeMenu} alt='close menu icon' className={classes.icons} />}
            </IconButton>
            {/* this is the profile picture and name at the top of the open menu, everything in this className is a "if statement" */}
            <div className={clsx(classes.header, {
                [classes.hide]: !open
              })}
            >
            <img src={profilePic} className={classes.img} alt='User' />
            <Typography>Your Name Here</Typography>
            </div>
        </div>
        <Divider />
        {/* this populates the icons in the closed menu and populates text also when menu is open */}
        <List>
          <ListItem button key='Home' >
            <ListItemIcon className={clsx(classes.icons, {[classes.closedActive]: 'clicked'})}><img src={home} alt='home icon' className={classes.icons}/></ListItemIcon >
            <ListItemText primary='Home' />
          </ListItem>
          <ListItem button key='Profile' >
            <ListItemIcon className={clsx(classes.icons, {[classes.closedActive]: 'clicked'})}><img src={profile} alt='profile icon' className={classes.icons} /></ListItemIcon >
            <ListItemText primary='Profile' />
          </ListItem>
          <ListItem button key='Workspace' >            
            <ListItemIcon className={clsx(classes.icons, {[classes.closedActive]: 'clicked'})}><img src={workspace} alt='workspace icon' className={classes.icons} /></ListItemIcon >
            <ListItemText primary='Workspace' />
          </ListItem>
          <ListItem button key='Send Reward' >
            <ListItemIcon className={clsx(classes.icons, {[classes.closedActive]: 'clicked'})}><img src={sendReward} alt='send rewards icon' className={classes.icons} /></ListItemIcon >
            <ListItemText primary='Send Reward' />
          </ListItem>
          <ListItem button key='Rewards History' >
            <ListItemIcon className={clsx(classes.icons, {[classes.closedActive]: 'clicked'})}><img src={rewardHistory} alt='reward history icon' className={classes.icons} /></ListItemIcon >
            <ListItemText primary='Rewards History' />
          </ListItem>
          <ListItem button key='Settings' >
            <ListItemIcon className={clsx(classes.icons, {[classes.closedActive]: 'clicked'})}><img src={settings} alt='settings icon' className={classes.icons} /></ListItemIcon >
            <ListItemText primary='Settings' />
          </ListItem>
        </List>
        <Divider />
        {/* This "if statment" changes how far down the sign out button is on both closed and open menus */}
        <List className={clsx(classes.menuOpen, {
                [classes.signoutOpen]: open,
                [classes.signoutClosed]: !open
              })}>
                  {/* this populates the sign out icon on the closed menu and text on the open menu */}
            <ListItem button key='Sign Out' >
            <ListItemIcon className={clsx(classes.menuOpen, {
                [classes.hide]: open,
              })}><img src={signOut} alt='sign out icon' className={classes.icons} /></ListItemIcon >
            <ListItemText primary='Sign Out' />
          </ListItem>
        </List>
      </Drawer>
    </div>
    )
}

export default Sidebar;
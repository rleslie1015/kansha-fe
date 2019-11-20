import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Typography, Drawer, List, CssBaseline, Divider, IconButton, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import profilePic from './picture/picture.png'

const drawerWidth = 240;

export const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  menuButton: {
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
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
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
    marginTop: '40vh'
  },
  signoutClosed: {
    marginTop: '55vh'
  },
  header: {
    marginLeft: '25%',
    marginBottom: '10%'
  },
  img: {
    width: '50%',
    height: 'auto',
    marginLeft: '11%',
    borderRadius: '50%' 
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
            <ChevronRightIcon />
          </IconButton>
          {/* this is the close menu button */}
        <div>
            <IconButton 
              onClick={handleDrawerClose} 
              className={clsx(classes.menuButton, {
                [classes.hide]: !open
              })}
            >
               {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
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
          {['Home', 'Profile', 'Workspace', 'Send Reward', 'Rewards History', 'Settings'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        {/* This "if statment" changes how far down the sign out button is on both closed and open menus */}
        <List className={clsx(classes.menuOpen, {
                [classes.signoutOpen]: open,
                [classes.signoutClosed]: !open
              })}>
                  {/* this populates the sign out icon on the closed menu and both icon and text on the open menu */}
        {['Sign Out'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
            ))}
        </List>
      </Drawer>
    </div>
    )
}

export default Sidebar;
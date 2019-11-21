import React from 'react';
import { useHistory } from 'react-router-dom'
import { Button, Menu, MenuItem } from '@material-ui/core';
import MenuIcon from "@material-ui/icons/Menu";
import Auth from '../auth';
import { makeStyles } from '@material-ui/core/styles';

const auth = new Auth();

const useStyles = makeStyles(theme => ({
  hideNav: {
    padding: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column'
    },
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      flexDirection: 'column'
    },
    [theme.breakpoints.up('lg')]: {
      display: "none",

    }
  }

}));

export default function NavMenu() {
  const classes = useStyles();

  const history = useHistory();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };



  return (
    <div className={classes.hideNav}>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <MenuIcon />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>About Us</MenuItem>
        <MenuItem onClick={handleClose}>Features</MenuItem>
        <MenuItem onClick={auth.login}>Sign In</MenuItem>

      </Menu>
    </div>
  );
}
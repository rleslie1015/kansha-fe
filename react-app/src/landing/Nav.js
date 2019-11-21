/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link, Typography } from '@material-ui/core';
import NavMenu from './NavMenu';
import { style } from '@material-ui/system';
import Auth from '../auth';

const auth = new Auth();

const useStyles = makeStyles(theme => ({
  wrapper: {
    display: "flex",
    position: "absolute",
    zIndex: "1",
    marginLeft: "90px",
    width: "80%",
    marginTop: "30px"
  },
  link: {
    fontSize: "xx-large",
    padding: "10px"
  },
  kansha: {
    fontSize: "-webkit-xxx-large",
  },
  left: {
    justifyContent: "flex-start"
  },
  hideNav: {
    padding: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      display: "none"
    },
    [theme.breakpoints.up('md')]: {
      display: "none"
    },
    [theme.breakpoints.up('lg')]: {
      display: "flex",
      width: "80%",
      justifyContent: "flex-end"
    }
  }

}));

export default function Links() {
  const classes = useStyles();

  return (
    <Typography className={classes.wrapper}>
      <div className={classes.left}>
        <Link href="#" color="inherit" className={classes.kansha}>
          Kansha
            </Link>
      </div>
      <NavMenu className={style.hideNav} />
      <div className={classes.hideNav} >
        <Link href="#" color="inherit" className={classes.link}>
          About Us
            </Link>
        <Link href="#" color="inherit" className={classes.link}>
          Features
            </Link>
        <Link href="#" onClick={auth.login} color="inherit" className={classes.link}>
          Sign In
            </Link>
        <Link href="#" onClick={auth.login} color="inherit" className={classes.link}>
          Sign Up
            </Link>
      </div>
    </Typography>
  );
}
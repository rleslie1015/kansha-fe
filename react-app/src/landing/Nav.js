/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Link, Box} from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  wrapper: {
    display: "flex",
    position:"absolute",
    zIndex: "1",
  },
  link: {
  },
  kansha: {

    fontSize: "xx-large",
  }

}));

export default function Links() {
  const classes = useStyles();

  return (
    <Typography className={classes.wrapper}>
      <Link href="#" color="inherit" className={classes.kansha}>
        Kansha
      </Link>
      <Link href="#"  color="inherit" className={classes.link}>
        About Us
      </Link>
      <Link href="#" color="inherit" className={classes.link}>
      Features
      </Link>
      <Link href="#" color="inherit" className={classes.link}>
       Sign In
      </Link>
      <Link href="#" color="inherit" className={classes.link}>
       Sign Up
      </Link>
    </Typography>
  );
}
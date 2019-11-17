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
  right: {
    display: "flex",
    width: "80%",
    justifyContent: "flex-end"
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
        <div className={classes.right}>
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
        </div>
    </Typography>
  );
}
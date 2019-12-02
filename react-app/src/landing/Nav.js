/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Link, AppBar,  Toolbar, Typography, Button, ButtonBase } from '@material-ui/core';
import logo from './images/logo.png';
import NavMenu from './NavMenu';
import { style } from '@material-ui/system';
import Auth from '../auth';
import 'typeface-montserrat';

const auth = new Auth();

const useStyles = makeStyles(theme => ({
  wrapper: {
    
    display: "flex",
    justifyContent: 'space-between',
    marginLeft: "90px",
    width: "80%",
    marginTop: "30px"
  },
  link: {
      fontSize: "16px",
      padding: "10px"
  },
  image: {
    width: 64,
    height: 64,
  },
  img: {
    margin: 'auto',
    display: 'block',
    width: '300px',
    height: '100px'
    // maxWidth: '100%',
    // maxHeight: '100%',
  },
  kansha: {
    
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
      flexDirection: 'row',
      width: "80%",
      justifyContent: "flex-end",
      fontFamily: 'montserrat'
    }
  }

}));

export default function Links() {
  const classes = useStyles();
  

  return (
    <Typography className={classes.wrapper}>
        <div className={classes.left}>
            <Link href="#" color="inherit" className={classes.kansha}>
                <ButtonBase className={classes.image}>
                  <img className={classes.img} alt="kansha" src={logo} />
                </ButtonBase>
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
          Get Started
            </Link>

      </div>
    </Typography>
  );
}
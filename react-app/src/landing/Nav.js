/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Link, Typography, Button, ButtonBase } from '@material-ui/core';
import NavMenu from './NavMenu';
import { style } from '@material-ui/system';
import logo from './images/logo.png'

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
  button: {
    border: '1px solid black',
    width: '150px'
  },
  image: {
    width: 128,
    height: 160,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
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
        <div className={classes.left} src = {logo}>
        <ButtonBase href='#' className={classes.image}>
              <img className={classes.img} alt="kansha logo" src={logo} />
        </ButtonBase>
                
            
        </div>
        <NavMenu className={style.hideNav}/>
        <div className={classes.hideNav} >
            <Link href="#"  color="inherit" className={classes.link}>
                About Us
            </Link>
            <Link href="#" color="inherit" className={classes.link}>
            Features
            </Link>
            <Link href="#" color="inherit" className={classes.link}>
            Sign In
            </Link>
            <Button href="#" color="inherit" className={classes.button}>
            Sign Up
            </Button>
        </div>
    </Typography>
  );
}
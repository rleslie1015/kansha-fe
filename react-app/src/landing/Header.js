import React from 'react'
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography, Box, Link } from '@material-ui/core';
import hero from "./images/hero-image.png";
import Nav from './Nav';
import Auth from '../auth';

const auth = new Auth();

const styles = {
  paperContainer: {
    display: 'flex',
    height: '90vh',
    width: '100%'
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    margin: '0'
  },
  heading: {
    margin: "90px",
    paddingTop: "96px",
    position: "absolute",
    zIndex: "1",
  },
  hero: {
    display: 'flex',
    flexDirection: 'row',
    margin: '0'
  },
  img: {
    width: '20%',
    height: '20%',
    margin: '0'
  },
  info: {
    flexDirection: 'column',
    width: '50%',
    margin: '0'
  }
}

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    marginLeft: "0",
    padding: "15px",
    fontFamily: "inherit",
    fontWeight: "900"
  },
  input: {
    display: 'none',
  },
  headingFont: {
    [theme.breakpoints.down('sm')]: {
      fontSize: "25px",
      margin: "0 auto"
    },
    [theme.breakpoints.up('md')]: {
      fontSize: "25px",

    },
    [theme.breakpoints.up('lg')]: {

    }
  },
  font: {
    [theme.breakpoints.down('sm')]: {
      fontSize: "16px"
    },
    [theme.breakpoints.up('md')]: {

    },

  },
  root: {
    display: 'flex',
    padding: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      fontSize: "25px",

    },
    [theme.breakpoints.up('md')]: {

    },
    [theme.breakpoints.up('lg')]: {
      display: 'flex'

    }
  },

}));

export default function Header() {
  const classes = useStyles();

  const history = useHistory();

  return (
    <div style={styles.paperContainer} className={classes.root}>
      
      <Nav />
      <div style={styles.headerContainer}>
        <Typography component='div' style={styles.heading}  >
          <div style={styles.info}>
            <Box className={classes.headingFont}>Workplace Recognition</Box>
            <Box className={classes.headingFont}>Like Never Before</Box>
            <Box>Making it easy to recognize your hardworking peers with rewards and personalized messages</Box>
            <Button variant='contained' className={classes.button}>Learn More</Button>
            <Button variant='contained' color='primary' className={classes.button} onClick={auth.login}>Sign Up</Button>
          </div>
          <div style={styles.hero}>
            <img src={hero} style={styles.img} />
          </div>
        </Typography>
      </div> 
      


    </div>
  )
}
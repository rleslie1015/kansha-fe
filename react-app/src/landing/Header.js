import React from 'react'
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import {Button, Typography, Box, Link } from '@material-ui/core';
import pic04 from "./images/pic04.jpg";
import Nav from './Nav';


const styles = {
  paperContainer: {
    height: '90vh',
  },
  heading: {
    margin: "90px",
    paddingTop: "96px",
    position:"absolute",
    zIndex: "1",
  },
  img: {
    position:"absolute",
    zIndex: "0",
    height:"100vh",
    width: "100%",
    margin:"-10px",
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
      padding: theme.spacing(1),
      [theme.breakpoints.down('sm')]: {
        fontSize: "25px",
    
      },
      [theme.breakpoints.up('md')]: {
   
      },
      [theme.breakpoints.up('lg')]: {
  
      }
    },
   
  }));

  export default function Header () {
      const classes = useStyles();

      const history = useHistory();

      return(
          <div style={styles.paperContainer} className={classes.root}>
            <img src={pic04} style={styles.img} />
              <Nav />
            <Typography component='div' style={styles.heading}  >
              
              <Box className={classes.headingFont}>Workplace Recognition</Box>
              <Box className={classes.headingFont}>Like Never Before</Box>
              <Box>Making it easy to recognize your hardworking peers with rewards and personalized messages</Box>
              <Button variant='contained' className = {classes.button}>Learn More</Button>
              <Button variant = 'contained' color = 'primary' className = {classes.button} onClick={() => history.push('/login')}>Sign Up</Button>

            </Typography>
        

          </div>
      )
  }
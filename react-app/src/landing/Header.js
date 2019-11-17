import React from 'react'
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
    height:"80vh",
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
  }));

  export default function Header () {
      const classes = useStyles();

      return(
          <div style={styles.paperContainer}>
            <img src={pic04} style={styles.img} />
              <Nav />
            <Typography component='div' style={styles.heading} >
              <Box fontSize="5.1em">Workplace Recognition</Box>
              <Box fontSize="5em">Like Never Before</Box>
              <Box fontSize="1.5em">Making it easy to recognize your hardworking peers with rewards and personalized messages</Box>
              <Button variant='contained' className = {classes.button}>Learn More</Button>
              <Button variant = 'contained' color = 'primary' className = {classes.button}>Sign Up</Button>

            </Typography>
        

          </div>
      )
  }
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Button, Typography, Box, Paper } from '@material-ui/core';
import lorenpic from "./images/lorenpic.jpg";

const styles = {
  paperContainer: {
    backgroundImage: `url(${lorenpic})`,
    height: '50vh',
    backgroundRepeat: 'no-repeat'
  }
} 

const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
    },
    input: {
      display: 'none',
    },
  }));

  export default function Header () {
      const classes = useStyles();

      return(
          <>
          <div style={styles.paperContainer}>
            <Typography component='div'>
              <Box fontSize="50px">Workplace Recognition Like Never Before</Box>
              <Box fontSize="16px">Making it easy to recognize your hardworking peers with rewards and personalized messages</Box>
              <Button variant='contained' className = {classes.button}>Learn More</Button>
              <Button variant = 'contained' color = 'primary' className = {classes.button}>Sign Up</Button>

            </Typography>
          </div>

          </>
      )
  }
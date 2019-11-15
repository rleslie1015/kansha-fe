import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

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
            <h1>Workplace Recognition Like Never Before</h1>
            <p>Making it easy to recognize your hardworking peers with rewards and personalized messages</p>
            <Button variant='contained' className = {classes.button}>Learn More</Button>
            <Button variant = 'contained' color = 'primar' className = {classes.button}>Sign Up</Button>

          </>
      )
  }
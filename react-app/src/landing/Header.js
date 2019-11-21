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
    height: '100vh',
    width: '100%'
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    margin: '0'
  },
  heading: {
    
    paddingTop: "96px",
    display: 'flex'
  },
  hero: {
    display: 'flex',
    flexDirection: 'row',
    margin: '0'
  },
  // img: {
  //   width: '70%',
  //   height: '70%',
  //   margin: '0'
  // },
  info: {
    flexDirection: 'column',
    margin: '7% 5% 0 0',
    alignItems: 'center'
  }
}

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      fontSize: "25px",
      margin: "0 auto"
    },
    [theme.breakpoints.up('md')]: {
      // margin: '0 0 0 25%'

    },
    [theme.breakpoints.up('lg')]: {
      marginLeft: "0",
      padding: "15px",
      fontFamily: "inherit",
      fontWeight: "900",

    }
    
    
  },
  input: {
    display: 'none',
  },
  headingFont: {
    [theme.breakpoints.down('sm')]: {
      fontSize: "25px",
      margin: "0 auto",
      alignItems: 'center'
    },
    [theme.breakpoints.up('md')]: {
      fontSize: "25px",
      justifyContent: 'center'

    },
    [theme.breakpoints.up('lg')]: {

    }
  },
  img: {
    [theme.breakpoints.down('sm')]: {
      width: '40%',
      height: '40%',
      margin: '10% 25%'
      
    },
    [theme.breakpoints.up('md')]: {
      width: '30%',
      height: '30%'
      

    },
    [theme.breakpoints.up('lg')]: {
      width: '50%',
      height: '75%'

    }

  },
  desc: {
    margin: '5% 0 5% 0',
    fontSize: '16px'
  },
  font: {
    [theme.breakpoints.down('sm')]: {
      fontSize: "16px"
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '16px'

    },

  },
  root: {
    
    padding: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      fontSize: "25px",
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',

    },
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'

    },
    [theme.breakpoints.up('lg')]: {
      display: 'flex',
      

    }
  },
  heading: {
    padding: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      fontSize: "25px",
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
      

    },
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'


    },
    [theme.breakpoints.up('lg')]: {
      margin: "90px",
    paddingTop: "96px",
    display: 'flex',
    flexDirection: 'row'

    }
  }

}));

export default function Header() {
  const classes = useStyles();

  const history = useHistory();

  return (
    <div style={styles.paperContainer} className={classes.root}>
      
      <Nav />
      <div style={styles.headerContainer}>
        <Typography component='div' className={classes.heading}  >
          <div style={styles.info}>
            <Box className={classes.headingFont}>Workplace Recognition</Box>
            <Box className={classes.headingFont}>Like Never Before</Box>
            <Box className={classes.desc}>Making it easy to recognize your hardworking peers with rewards and personalized messages</Box>
            <Button variant='contained' color='primary' className={classes.button} onClick={auth.login}>Sign Up</Button>
            <Button variant='contained' className={classes.button}>Learn More</Button>
            
          </div>
          <div style={styles.hero}>
            <img src={hero} className={classes.img} />
          </div>
        </Typography>
      </div> 
      


    </div>
  )
}
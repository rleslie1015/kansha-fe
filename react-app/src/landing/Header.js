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
    // height: '100vh',
    // width: '100%'
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
  learnButton: {
    margin: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      fontSize: "15px",
      margin: "0 auto",
      background: '#26242D',
      boxShadow: 'none',
      borderRadius: '2px',
      borderColor: 'linear-gradient(164.05deg, #EE4D71 0%, #F15A3F 100%)',
      color: 'linear-gradient(167.6deg, #EE4D71 0%, #F15A3F 100%)'
    },
    [theme.breakpoints.up('md')]: {
      // margin: '0 0 0 25%'
      background: '#26242D',
      boxShadow: 'none',
      border: 'linear-gradient(164.05deg, #EE4D71 0%, #F15A3F 100%)'

    },
    [theme.breakpoints.up('lg')]: {
      marginLeft: "0",
      padding: "15px",
      fontFamily: "inherit",
      fontWeight: "900",
      background: '#26242D',
      boxShadow: 'none',

    }
    
    
  },

  signButton: {
    margin: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      fontSize: "15px",
      background: 'linear-gradient(164.05deg, #EE4D71 0%, #F15A3F 100%)',
      margin: "0 auto",
      color: 'white'
    },
    [theme.breakpoints.up('md')]: {
      // margin: '0 0 0 25%'
      background: 'linear-gradient(164.05deg, #EE4D71 0%, #F15A3F 100%)',
      boxShadow: 'none',
      borderRadius: '2px',
      color: 'white'

    },
    [theme.breakpoints.up('lg')]: {
      marginLeft: "0",
      padding: "15px",
      fontFamily: "inherit",
      fontWeight: "900",
      background: 'linear-gradient(164.05deg, #EE4D71 0%, #F15A3F 100%)',
      color: 'white'

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
      display: 'flex',
      justifyContent: 'center',
      width: '40%',
      height: '40%',
      margin: '10% 25%'
      
    },
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      justifyContent: 'center',
      width: '30%',
      height: '30%'

      

    },
    [theme.breakpoints.up('lg')]: {
      width: '50%',
      height: '75%',
      // display: 'flex',
      // justifyContent: 'center'
      margin: '0 0 0 5%'

    }

  },
  desc: {
    
    padding: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      // margin: '5% 0 5% 0',
      fontSize: '16px',
      // textAlign: 'center',
      // width: '50%',
      // paddingLeft: '25%'
      

    },
    [theme.breakpoints.up('md')]: {
      // margin: '5% 0 5% 0',
      fontSize: '16px',
      // textAlign: 'center',
      // width: '50%'

    },
    [theme.breakpoints.up('lg')]: {
      margin: '5% 0 5% 0',
      fontSize: '16px',
      width: '100%',
      textAlign: 'left'
    
    },
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
      // alignItems: 'center',
      // textAlign: 'center'
      

    },
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      flexDirection: 'column',
      // alignItems: 'center',
      // textAlign: 'center'


    },
    [theme.breakpoints.up('lg')]: {
      margin: "90px",
    paddingTop: "96px",
    display: 'flex',
    flexDirection: 'row',
    textAlign: 'left'

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
            <Button variant='contained' className={classes.signButton} onClick={auth.login}>Sign Up</Button>
            <Button variant='contained' className={classes.learnButton}>Learn More</Button>
            
          </div>
          <div style={styles.hero}>
            <img src={hero} className={classes.img} />
          </div>
        </Typography>
      </div> 
      


    </div>
  )
}
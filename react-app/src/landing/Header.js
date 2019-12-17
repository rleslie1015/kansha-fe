import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography, Box } from '@material-ui/core';
import hero from "./images/hero-image.png";
import Nav from './Nav';
import Auth from '../utils/auth';
import 'typeface-montserrat';


const auth = new Auth();

const styles = {
  paperContainer: {
    display: 'flex',
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
    margin: '0',
    justifyContent: 'center'
  },

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
      margin: "0 2%",
      background: '#26242D',
      boxShadow: 'none',
      border: '2px solid #ee4d71',
      fontFamily: 'montserrat',
      color: '#ee4d71',
      '&:hover': {
				background: 'linear-gradient(172.54deg, #EE4D71 0%, #F15A3F 100%);',
				color: '#FFFFFF'
			},

      
    },
    [theme.breakpoints.up('md')]: {
 
      background: '#26242D',
      boxShadow: 'none',
      border: '2px solid #ee4d71',
      fontFamily: 'montserrat',
      '&:hover': {
				background: 'linear-gradient(172.54deg, #EE4D71 0%, #F15A3F 100%);',
				color: '#FFFFFF'
      },
      margin: '0 2%',
      color: '#ee4d71'

    },
    [theme.breakpoints.up('lg')]: {
      
      padding: "15px",
      fontWeight: "900",
      background: '#26242D',
      boxShadow: 'none',
      border: '2px solid #ee4d71',
      fontFamily: 'montserrat',
      '&:hover': {
				background: 'linear-gradient(172.54deg, #EE4D71 0%, #F15A3F 100%);',
        color: '#FFFFFF'
      },
      margin: '0 2%',
      color: '#ee4d71'

    }
    
    
  },

  signButton: {
    margin: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      fontSize: "15px",
      background: 'linear-gradient(164.05deg, #EE4D71 0%, #F15A3F 100%)',
      margin: "0 auto",
      color: 'white',
      fontFamily: 'montserrat'
    },
    [theme.breakpoints.up('md')]: {
 
      background: 'linear-gradient(164.05deg, #EE4D71 0%, #F15A3F 100%)',
      boxShadow: 'none',
      borderRadius: '2px',
      color: 'white',
      fontFamily: 'montserrat'

    },
    [theme.breakpoints.up('lg')]: {
      marginLeft: "0",
      padding: "15px",
      fontWeight: "900",
      background: 'linear-gradient(164.05deg, #EE4D71 0%, #F15A3F 100%)',
      color: 'white',
      fontFamily: 'montserrat'

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
      justifyContent: 'left'

    },
    [theme.breakpoints.up('lg')]: {
      justifyContent: 'left'

    }
  },
  img: {
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      justifyContent: 'center',
      width: '260.61px',
      height: '244.51px',
      margin: '10% 25%'
      
    },
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      justifyContent: 'center',
      width: '260.61px',
      height: '244.51px'

      

    },
    [theme.breakpoints.up('lg')]: {
      width: '420.79px',
      height: '394.79px',
      margin: '0 0 0 5%'

    }

  },
  desc: {
    
    padding: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      margin: '5% 0 5% 0',
      fontSize: '16px',
      padding: '0',
      fontFamily: 'montserrat'
      

    },
    [theme.breakpoints.up('md')]: {
      margin: '5% 0 5% 0',
      fontSize: '16px',
      padding: '0',
      fontFamily: 'montserrat'

    },
    [theme.breakpoints.up('lg')]: {
      margin: '5% 0 5% 0',
      fontSize: '16px',
      width: '100%',
      textAlign: 'left',
      padding: '0',
      fontFamily: 'montserrat'
    
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
    },

    [theme.breakpoints.up('md')]: {
      display: 'flex',
      flexDirection: 'column',
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

  return (
    <div style={styles.paperContainer} className={classes.root}>
      
      <Nav />
      <div style={styles.headerContainer}>
        <Typography component='div' className={classes.heading}  >
          <div style={styles.info}>
            <Box className={classes.headingFont} fontFamily='montserrat'>Workplace Recognition</Box>
            <Box className={classes.headingFont} fontFamily='montserrat'>Like Never Before</Box>
            <Box className={classes.desc} fontFamily='montserrat'>Making it easy to recognize your hardworking peers with rewards and personalized messages</Box>
            <Button variant='contained' className={classes.signButton} onClick={auth.login} fontFamily='montserrat'>Sign Up</Button>
            <Button onClick={()=>window.location.hash='learn-more'} variant='contained' className={classes.learnButton} fontFamily='montserrat'>Learn More</Button>
          </div>
          <div style={styles.hero}>
            <img src={hero} alt='' className={classes.img} />
          </div>
        </Typography>
      </div> 
      


    </div>
  )
}
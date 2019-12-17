/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link, Typography, ButtonBase } from '@material-ui/core';
import logo from './images/logo.png';
import NavMenu from './NavMenu';
import { style } from '@material-ui/system';
import Auth from '../utils/auth';
import 'typeface-montserrat';

const auth = new Auth();

const useStyles = makeStyles(theme => ({

  wrapper: {
    [theme.breakpoints.down('sm')]: {
      display: "flex",
      justifyContent: 'space-between',
      marginTop: "30px"

    },
    [theme.breakpoints.up('md')]: {
      display: "flex",
      justifyContent: 'space-between',
      marginTop: "30px"

    },
    [theme.breakpoints.up('lg')]: {
      display: "flex",
      justifyContent: 'space-between',
      width: "80%",
      marginTop: "30px"

    }
    

  },
  link: {
      fontSize: "16px",
      padding: "10px"
  },
  image: {
    [theme.breakpoints.down('sm')]: {
      width: '60%'

    },
    [theme.breakpoints.up('md')]: {
      width: '60%'

    },
    [theme.breakpoints.up('lg')]: {
      width: '60%'

    }
    
  },
  img: {
    margin: 'auto',
    display: 'block',
    width: '100%',
    height: '100%'
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
  },

	left: {
		justifyContent: 'flex-start',
	},
	hideNav: {
		padding: theme.spacing(1),
		[theme.breakpoints.down('sm')]: {
			display: 'none',
		},
		[theme.breakpoints.up('md')]: {
			display: 'none',
		},
		[theme.breakpoints.up('lg')]: {
			display: 'flex',
			flexDirection: 'row',
			width: '80%',
			justifyContent: 'flex-end',
			fontFamily: 'montserrat',
		},
	},
}));

export default function Links() {
	const classes = useStyles();

	return (
		<Typography className={classes.wrapper}>
			<div className={classes.left}>
				<Link href="#" color="inherit">
					<ButtonBase className={classes.image}>
						<img className={classes.img} alt="kansha" src={logo} />
					</ButtonBase>
				</Link>
			</div>
			<NavMenu className={style.hideNav} />
			<div className={classes.hideNav}>
				<Link href="#" color="inherit" className={classes.link}>
					About Us
				</Link>
				<Link href="#" color="inherit" className={classes.link}>
					Features
				</Link>
				<Link
					href="#"
					onClick={auth.login}
					color="inherit"
					className={classes.link}>
					Get Started
				</Link>
			</div>
		</Typography>
	);
}

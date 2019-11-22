import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        fontSize: "16px",
        color: '#ffffff',
        backgroundColor: '#26242D',

        [theme.breakpoints.down('sm')]: {
            display: "flex",
            flexDirection: "column-reverse",
            justifyContent: "center",
            alignItems: "center",
          },
          [theme.breakpoints.up('md')]: {
            display: "flex",
            flexDirection: "column-reverse",
            justifyContent: "center",
            alignItems: "center",
          },
          [theme.breakpoints.up('lg')]: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            margin: "0 6%"
        }
    },
    nav: {
        [theme.breakpoints.down('sm')]: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            margin: "10px 0"
          },
          [theme.breakpoints.up('lg')]: {
            display: "flex",
            fontSize: "16px",
            flexDirection: "column",

        }
    },
    link: {
        [theme.breakpoints.down('sm')]: {
           margin: "15px 0"
          },
          [theme.breakpoints.up('lg')]: {
            display: "flex",
            fontSize: "16px",
            margin: "6px 0",
        }
    },
    kansha: {
        [theme.breakpoints.down('sm')]: {
            display: "none",
          },
          [theme.breakpoints.up('md')]: {
            display: "none",          
        },
        [theme.breakpoints.up('lg')]: {
            display: "flex",
            fontSize: "24px",
            fontWeight: "600",
            margin: "20px 0",
        }
    },
    small: {
        [theme.breakpoints.down('sm')]: {
            marginTop: "15px",
            textAlign: "center",
          },
          [theme.breakpoints.up('md')]: {
            marginTop: "15px",
            textAlign: "center",        
        },
    }
}))

export default function Footer() {
    const classes = useStyles();

    return(
        <>
        <div className={classes.root}>
            <div>
                <h4 className={classes.kansha}>Kansha</h4>
                <h5 className={classes.order}>Lambda Labs Project</h5>
            </div>
            <div className={classes.nav}>
                <Link className={classes.link} href = '#'>About us</Link>
                <Link className={classes.link} href = '#'>Features</Link>
                <Link className={classes.link} href = '#'>Sign in</Link>
            </div>
        </div>
            <small className={classes.small}>© All Rights Reserved 2019 Kansha</small>
            </>
    )
}
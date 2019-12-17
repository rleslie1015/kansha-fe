import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Box, Paper, Typography, ButtonBase } from '@material-ui/core';
import isometric from './images/isometric.png';
import 'typeface-montserrat';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#26242D'
    },

    box: {
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'nowrap',
            alignItems: 'center',
            margin: 'auto'
        },
        [theme.breakpoints.up('md')]: {
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'nowrap',
            alignItems: 'center'
        },
        [theme.breakpoints.up('lg')]: {
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'nowrap'
        }
    },

    whyKansha: {
        display: 'flex',
        fontFamily: 'montserrat',
        fontSize: '36px',
        color: 'white',
        justifyContent: 'center',
        fontWeight: '600',
        fontHeight: '44px',
        margin: '10% 0'
    },

    textBox: {
        [theme.breakpoints.down('sm')]: {
            color: 'white',
            width: '90%',
            backgroundColor: '#2D2C35',
            fontSize: '16px',
            // marginLeft: '10%',
            fontWeight: '600',
            fontHeight: '28px',
            height: '50%',
            padding: '1%',
            fontFamily: 'montserrat',
            marginBottom: '10%'
        },
        [theme.breakpoints.up('md')]: {
            color: 'white',
            width: '50%',
            backgroundColor: '#2D2C35',
            fontSize: '16px',
            marginLeft: '10%',
            fontWeight: '600',
            fontHeight: '28px',
            height: '50%',
            padding: '1%',
            fontFamily: 'montserrat',
            marginBottom: '10%'
        },
        [theme.breakpoints.up('lg')]: {
            color: 'white',
            width: '23%',
            backgroundColor: '#2D2C35',
            fontSize: '16px',
            marginLeft: '10%',
            fontWeight: '600',
            fontHeight: '28px',
            height: '50%',
            padding: '1%',
            fontFamily: 'montserrat',
            marginBottom: '20%'
        }
    },

    isometric: {
        [theme.breakpoints.down('sm')]: {
            width: '75%'
        },
        [theme.breakpoints.up('md')]: {
            width: '50%'
        },
        [theme.breakpoints.up('lg')]: {
            width: '50%'
        }
        
    }
}))

export default function WhyKansha () {
    const classes = useStyles();


    return (
        <Paper className={classes.root}>
            <Box>
                <Typography className={classes.whyKansha}>Why Kansha?</Typography>
            </Box>
            <Box className={classes.box}>
                <Typography className={classes.textBox}>Kansha is a workplace recognition tool that allows you to publically recognize your peers with a thank you message, badges, and a gift card! Kansha is an easy, fun, effective way to show your peers that you appreciate them! Our public feed displays all workplace recognition for everyone to see!</Typography>
                <img src={isometric} alt='' className={classes.isometric}/>
            </Box>
        </Paper>
    )
}
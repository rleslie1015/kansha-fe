import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Box, Paper, Typography, ButtonBase } from '@material-ui/core';
import ty from './images/ty.png';
import cori from './images/cori.png';
import sydney from './images/sydney.png';
import andrew from './images/andrew.png';
import leslie from './images/leslie.png';
import gustavo from './images/gustavo.png';
import matt from './images/matt.png';
import nick from './images/nick.png';
import ahmar from './images/ahmar.png';
import gizella from './images/gizella.png';
import dribbble from './images/dribbble.png';
import github from './images/github.png';
import linkedin from './images/linkedin.png';
import website from './images/website.png';
import 'typeface-montserrat';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#26242D'
    },
    paper: {
        [theme.breakpoints.down('sm')]: {
            backgroundColor: '#26242D',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        },
        [theme.breakpoints.up('md')]: {
            backgroundColor: '#26242D',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap'
        },
        [theme.breakpoints.up('lg')]: {
            backgroundColor: '#26242D',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap'           
        }
    },
    ourTeam: {
        display: 'flex',
        justifyContent: 'center',
        fontSize: '36px',
        marginBottom: '5%'
    },

    grid: {
        [theme.breakpoints.down('sm')]: {
            width: '50%',
            margin: '2%'
        },
        [theme.breakpoints.up('md')]: {
            width: '20%',
            margin: '2%'
        },
        [theme.breakpoints.up('lg')]: {
            width: '20%',
            margin: '2%'
        }
    },

    bottomRow: {
        [theme.breakpoints.down('sm')]: {
            width: '50%',
            margin: '2%'
        },
        [theme.breakpoints.up('md')]: {
            width: '20%',
            margin: '2% 2% 2% 27%'
        },
        [theme.breakpoints.up('lg')]: {
            width: '20%',
            margin: '2% 2% 2% 27%'
        }
    },
    iconBox: {
        width: '50%',
        flexDirection: 'row',
        display: 'flex',
        marginLeft: '30%'
    },

    iconItem: {
        width: '100%'
    },
    icons: {
        width: '80%'
    },
    profilePic: {
        width: '100%',
        margin: '2% 2% 0 2%'
        
    },
    pic: {
        width: '100%'
    }
}))


export default function OurTeam () {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Typography className={classes.ourTeam} a id='our_team'>
                <Box>Our Team!</Box>
            </Typography>
            <Paper className={classes.paper}>
                <Grid container spacing={2} container direction='column' className={classes.grid}>
                    <Grid item className={classes.profilePic}>
                        <img src={cori} alt='' className={classes.pic} />
                    </Grid>
                        <Grid item xs container className={classes.iconBox} >
                            <Grid item xs className={classes.iconItem} >
                                <a href='https://github.com/coriagogo'>
                                    <img src={github} alt='' className={classes.icons} />
                                </a>
                            </Grid>
                            <Grid item xs className={classes.iconItem}>
                                <a href='https://www.linkedin.com/in/pearl-paris/'>
                                    <img src={linkedin} alt='' className={classes.icons} />
                                </a>
                            </Grid>
                        </Grid>
                </Grid>

                <Grid container spacing={2} container direction='column' className={classes.grid}>
                    <Grid item className={classes.profilePic}>
                        <img src={ty} alt='' className={classes.pic} />
                    </Grid>
                        <Grid item xs container className={classes.iconBox} >
                            <Grid item xs className={classes.iconItem} >
                                <a href='https://github.com/TyLippe'>
                                    <img src={github} alt='' className={classes.icons} />
                                </a>
                            </Grid>
                            <Grid item xs className={classes.iconItem}>
                                <a href='https://www.linkedin.com/in/ty-lippe-1432b3194/'>
                                    <img src={linkedin} alt='' className={classes.icons} />
                                </a>
                            </Grid>
                        </Grid>
                </Grid>

                <Grid container spacing={2} container direction='column' className={classes.grid}>
                    <Grid item className={classes.profilePic}>
                        <img src={sydney} alt='' className={classes.pic} />
                    </Grid>
                        <Grid item xs container className={classes.iconBox} >
                            <Grid item xs className={classes.iconItem} >
                                <a href='https://github.com/srsimps19'>
                                    <img src={github} alt='' className={classes.icons} />
                                </a>
                            </Grid>
                            <Grid item xs className={classes.iconItem}>
                                <a href='https://www.linkedin.com/in/sydney-crumley/'>
                                    <img src={linkedin} alt='' className={classes.icons} />
                                </a>
                            </Grid>
                        </Grid>
                </Grid>

                <Grid container spacing={2} container direction='column' className={classes.grid}>
                    <Grid item className={classes.profilePic}>
                        <img src={andrew} alt='' className={classes.pic} />
                    </Grid>
                        <Grid item xs container className={classes.iconBox} >
                            <Grid item xs className={classes.iconItem} >
                                <a href='https://github.com/drewgoenner'>
                                    <img src={github} alt='' className={classes.icons} />
                                </a>
                            </Grid>
                            <Grid item xs className={classes.iconItem}>
                                <a href='https://www.linkedin.com/in/andrew-goenner-7947a059/'>
                                    <img src={linkedin} alt='' className={classes.icons} />
                                </a>
                            </Grid>
                        </Grid>
                </Grid>

                <Grid container spacing={2} container direction='column' className={classes.grid}>
                    <Grid item className={classes.profilePic}>
                        <img src={leslie} alt='' className={classes.pic} />
                    </Grid>
                        <Grid item xs container className={classes.iconBox} >
                            <Grid item xs className={classes.iconItem} >
                                <a href='https://github.com/rleslie1015'>
                                    <img src={github} alt='' className={classes.icons} />
                                </a>
                                
                            </Grid>
                            <Grid item xs className={classes.iconItem}>
                                <a href='https://www.linkedin.com/in/leslie-rodriguez1994/'>
                                    <img src={linkedin} alt='' className={classes.icons} />
                                </a>
                            </Grid>
                        </Grid>
                </Grid>

                <Grid container spacing={2} container direction='column' className={classes.grid}>
                    <Grid item className={classes.profilePic}>
                        <img src={gustavo} alt='' className={classes.pic} />
                    </Grid>
                        <Grid item xs container className={classes.iconBox} >
                            <Grid item xs className={classes.iconItem} >
                                <a href='https://github.com/gisturiz'>
                                    <img src={github} alt='' className={classes.icons} />
                                </a>
                            </Grid>
                            <Grid item xs className={classes.iconItem}>
                                <a href='https://www.linkedin.com/in/gisturiz/'>
                                    <img src={linkedin} alt='' className={classes.icons} />
                                </a>
                            </Grid>
                        </Grid>
                </Grid>

                <Grid container spacing={2} container direction='column' className={classes.grid}>
                    <Grid item className={classes.profilePic}>
                        <img src={matt} alt='' className={classes.pic} />
                    </Grid>
                        <Grid item xs container className={classes.iconBox} >
                            <Grid item xs className={classes.iconItem} >
                                <a href='https://github.com/TamaHills'>
                                    <img src={github} alt='' className={classes.icons} />
                                </a>
                            </Grid>
                            <Grid item xs className={classes.iconItem}>
                                <a href='https://www.linkedin.com/in/matthew-masters-463422191/'>
                                    <img src={linkedin} alt='' className={classes.icons} />
                                </a>
                            </Grid>
                        </Grid>
                </Grid>

                <Grid container spacing={2} container direction='column' className={classes.grid}>
                    <Grid item className={classes.profilePic}>
                        <img src={nick} alt='' className={classes.pic} />
                    </Grid>
                        <Grid item xs container className={classes.iconBox} >
                            <Grid item xs className={classes.iconItem} >
                                <a href='https://github.com/NicholasTruson'>
                                    <img src={github} alt='' className={classes.icons} />
                                </a>
                            </Grid>
                            <Grid item xs className={classes.iconItem}>
                                <a href='https://www.linkedin.com/in/nicholas-truson-167599191/'>
                                    <img src={linkedin} alt='' className={classes.icons} />
                                </a>
                            </Grid>
                        </Grid>
                </Grid>

                <Grid container spacing={2} container direction='column' className={classes.bottomRow}>
                    <Grid item className={classes.profilePic}>
                        <img src={ahmar} alt='' className={classes.pic} />
                    </Grid>
                        <Grid item xs container className={classes.iconBox} >
                            <Grid item xs className={classes.iconItem} >
                                <a href='http://ahmarsworld.blackwidowtech.com/'>
                                    <img src={website} alt='' className={classes.icons} />
                                </a>
                            </Grid>
                            <Grid item xs className={classes.iconItem}>
                                <a href='https://www.linkedin.com/in/ahmar-mansoor-4455b6191/'>
                                    <img src={linkedin} alt='' className={classes.icons} />
                                </a>
                            </Grid>
                        </Grid>
                </Grid>

                <Grid container spacing={2} container direction='column' className={classes.grid}>
                    <Grid item className={classes.profilePic}>
                        <img src={gizella} alt='' className={classes.pic} />
                    </Grid>
                        <Grid item xs container className={classes.iconBox} >
                            <Grid item xs className={classes.iconItem} >
                                <a href='https://dribbble.com/gizellaortiz'>
                                    <img src={dribbble} alt='' className={classes.icons} />
                                </a>
                            </Grid>
                            <Grid item xs className={classes.iconItem}>
                                <a href='https://www.linkedin.com/in/gizella-o-824a13161/'>
                                    <img src={linkedin} alt='' className={classes.icons} />
                                </a>
                            </Grid>
                        </Grid>
                </Grid>
            </Paper>

        </Box>

    )
}
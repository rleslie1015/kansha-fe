import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Box, Paper, Typography, ButtonBase } from '@material-ui/core';
import ty from './images/ty.png';
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
        width: '50%%',
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
            <Typography className={classes.ourTeam}>
                <Box>Our Team!</Box>
            </Typography>
            <Paper className={classes.paper}>
                <Grid container spacing={2} container direction='column' className={classes.grid}>
                    <Grid item className={classes.profilePic}>
                        <img src={ty} alt='' className={classes.pic} />
                    </Grid>
                    {/* <Grid item xs={2} sm container> */}
                        <Grid item xs container className={classes.iconBox} >
                            <Grid item xs className={classes.iconItem} >
                                <img src={github} alt='' className={classes.icons} />
                            </Grid>
                            <Grid item xs className={classes.iconItem}>
                                <img src={linkedin} alt='' className={classes.icons} />
                            </Grid>
                        </Grid>
                    {/* </Grid> */}
                </Grid>

                <Grid container spacing={2} container direction='column' className={classes.grid}>
                    <Grid item className={classes.profilePic}>
                        <img src={ty} alt='' className={classes.pic} />
                    </Grid>
                    {/* <Grid item xs={2} sm container> */}
                        <Grid item xs container className={classes.iconBox} >
                            <Grid item xs className={classes.iconItem} >
                                <img src={github} alt='' className={classes.icons} />
                            </Grid>
                            <Grid item xs className={classes.iconItem}>
                                <img src={linkedin} alt='' className={classes.icons} />
                            </Grid>
                        </Grid>
                    {/* </Grid> */}
                </Grid>

                <Grid container spacing={2} container direction='column' className={classes.grid}>
                    <Grid item className={classes.profilePic}>
                        <img src={ty} alt='' className={classes.pic} />
                    </Grid>
                    {/* <Grid item xs={2} sm container> */}
                        <Grid item xs container className={classes.iconBox} >
                            <Grid item xs className={classes.iconItem} >
                                <img src={github} alt='' className={classes.icons} />
                            </Grid>
                            <Grid item xs className={classes.iconItem}>
                                <img src={linkedin} alt='' className={classes.icons} />
                            </Grid>
                        </Grid>
                    {/* </Grid> */}
                </Grid>

                <Grid container spacing={2} container direction='column' className={classes.grid}>
                    <Grid item className={classes.profilePic}>
                        <img src={ty} alt='' className={classes.pic} />
                    </Grid>
                    {/* <Grid item xs={2} sm container> */}
                        <Grid item xs container className={classes.iconBox} >
                            <Grid item xs className={classes.iconItem} >
                                <img src={github} alt='' className={classes.icons} />
                            </Grid>
                            <Grid item xs className={classes.iconItem}>
                                <img src={linkedin} alt='' className={classes.icons} />
                            </Grid>
                        </Grid>
                    {/* </Grid> */}
                </Grid>

                <Grid container spacing={2} container direction='column' className={classes.grid}>
                    <Grid item className={classes.profilePic}>
                        <img src={ty} alt='' className={classes.pic} />
                    </Grid>
                    {/* <Grid item xs={2} sm container> */}
                        <Grid item xs container className={classes.iconBox} >
                            <Grid item xs className={classes.iconItem} >
                                <img src={github} alt='' className={classes.icons} />
                            </Grid>
                            <Grid item xs className={classes.iconItem}>
                                <img src={linkedin} alt='' className={classes.icons} />
                            </Grid>
                        </Grid>
                    {/* </Grid> */}
                </Grid>

                <Grid container spacing={2} container direction='column' className={classes.grid}>
                    <Grid item className={classes.profilePic}>
                        <img src={ty} alt='' className={classes.pic} />
                    </Grid>
                    {/* <Grid item xs={2} sm container> */}
                        <Grid item xs container className={classes.iconBox} >
                            <Grid item xs className={classes.iconItem} >
                                <img src={github} alt='' className={classes.icons} />
                            </Grid>
                            <Grid item xs className={classes.iconItem}>
                                <img src={linkedin} alt='' className={classes.icons} />
                            </Grid>
                        </Grid>
                    {/* </Grid> */}
                </Grid>

                <Grid container spacing={2} container direction='column' className={classes.grid}>
                    <Grid item className={classes.profilePic}>
                        <img src={ty} alt='' className={classes.pic} />
                    </Grid>
                    {/* <Grid item xs={2} sm container> */}
                        <Grid item xs container className={classes.iconBox} >
                            <Grid item xs className={classes.iconItem} >
                                <img src={github} alt='' className={classes.icons} />
                            </Grid>
                            <Grid item xs className={classes.iconItem}>
                                <img src={linkedin} alt='' className={classes.icons} />
                            </Grid>
                        </Grid>
                    {/* </Grid> */}
                </Grid>

                <Grid container spacing={2} container direction='column' className={classes.grid}>
                    <Grid item className={classes.profilePic}>
                        <img src={ty} alt='' className={classes.pic} />
                    </Grid>
                    {/* <Grid item xs={2} sm container> */}
                        <Grid item xs container className={classes.iconBox} >
                            <Grid item xs className={classes.iconItem} >
                                <img src={github} alt='' className={classes.icons} />
                            </Grid>
                            <Grid item xs className={classes.iconItem}>
                                <img src={linkedin} alt='' className={classes.icons} />
                            </Grid>
                        </Grid>
                    {/* </Grid> */}
                </Grid>

                <Grid container spacing={2} container direction='column' className={classes.bottomRow}>
                    <Grid item className={classes.profilePic}>
                        <img src={ty} alt='' className={classes.pic} />
                    </Grid>
                    {/* <Grid item xs={2} sm container> */}
                        <Grid item xs container className={classes.iconBox} >
                            <Grid item xs className={classes.iconItem} >
                                <img src={github} alt='' className={classes.icons} />
                            </Grid>
                            <Grid item xs className={classes.iconItem}>
                                <img src={linkedin} alt='' className={classes.icons} />
                            </Grid>
                        </Grid>
                    {/* </Grid> */}
                </Grid>

                <Grid container spacing={2} container direction='column' className={classes.grid}>
                    <Grid item className={classes.profilePic}>
                        <img src={ty} alt='' className={classes.pic} />
                    </Grid>
                    {/* <Grid item xs={2} sm container> */}
                        <Grid item xs container className={classes.iconBox} >
                            <Grid item xs className={classes.iconItem} >
                                <img src={github} alt='' className={classes.icons} />
                            </Grid>
                            <Grid item xs className={classes.iconItem}>
                                <img src={linkedin} alt='' className={classes.icons} />
                            </Grid>
                        </Grid>
                    {/* </Grid> */}
                </Grid>
            </Paper>

        </Box>

    )
}
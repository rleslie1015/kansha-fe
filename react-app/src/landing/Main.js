import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Box, Paper, Typography, ButtonBase } from '@material-ui/core';
import activityIcon from './images/activity.png';
import adminIcon from './images/admin.png';
import badgeIcon from './images/badge.png';
import heartIcon from './images/heart.png';
import rewardIcon from './images/reward.png';
import workspaceIcon from './images/workspace.png';
import FavoriteIcon from '@material-ui/icons/Favorite';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: "center",
    backgroundColor: '#26242D',
  },
  paper: {
    // padding: theme.spacing(2),
    margin: '10px',
    width: '600px',
    backgroundColor: '#26242D',
    boxShadow: 'none'
  },
  font: {
    fontSize: "24px",
    color: '#ffffff',
  },
  cardFont: {
    fontSize: '16px',
    color: 'rgba(255, 255, 255, 0.7)'
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  box: {
    fontSize:"36px",
    textAlign:"center",
    backgroundColor: '#26242D',
    color: '#ffffff'
  },
  card: {
    boxShadow: 'none'
  },
  mobile: {
    padding: theme.spacing(1),
    
    [theme.breakpoints.down('sm')]: {
      fontSize: "25px",
      // margin: "5% 0",
      textAlign: "center",
      
    },
    [theme.breakpoints.up('md')]: {
      margin: "5% 0",
      textAlign: "center",
      fontSize: "25px",
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: "25px",


    }
  },
}));




export default function Main () {
    const classes = useStyles();

    return (
        <>
        <Typography font='#26242D'>
          <Box className={classes.box, classes.mobile}  >Why Kansha?</Box> 
        </Typography>
        <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2} container direction = 'row'>
          <Grid item className={classes.card}>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="reward" src={rewardIcon} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" className={classes.font}>
                  Send a Reward
                </Typography>
                <Typography variant="body2" gutterBottom className={classes.cardFont}>
                  Send your peers a gift card with a message to show recognition.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        </Paper>

        <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="workspace" src={workspaceIcon} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" className={classes.font}>
                  Workspace
                </Typography>
                <Typography variant="body2" gutterBottom className={classes.cardFont}>
                  Connecting people in the same workspace, creating public recognition
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        </Paper>

        <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="admin" src={adminIcon} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" className={classes.font} >
                  Admin Access
                </Typography>
                <Typography variant="body2" gutterBottom className={classes.cardFont}>
                  Only admin users have access to certain features to ensure moderation.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        </Paper>

        <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="badge" src={badgeIcon} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" className={classes.font}>
                  Earn Badges
                </Typography>
                <Typography variant="body2" gutterBottom className={classes.cardFont}>
                  Earn and send badges to your peers that represent their hard work.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        </Paper>

        <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="heart" src={heartIcon} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" className={classes.font}>
                  Leave a <FavoriteIcon />
                </Typography>
                <Typography variant="body2" gutterBottom className={classes.cardFont}>
                  React to posts with your favorite emoji to show appreciation.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        </Paper>

        <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="activity" src={activityIcon} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" className={classes.font}>
                  Activity
                </Typography>
                <Typography variant="body2" gutterBottom className={classes.cardFont}>
                  Keep track of your recognitions with our profile activities tracker.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        </Paper>
        
      
      
    </div>

        </>
    )
}
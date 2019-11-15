import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import logo from './images/logo192.png';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    flexWrap: 'wrap'
  },
  paper: {
    padding: theme.spacing(2),
    margin: '10px',
    width: 500,
    
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
}));




export default function Main () {
    const classes = useStyles();

    return (
        <>
        <h2>Why Kansha?</h2>
        <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="kansha" src={logo} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Send a Reward
                </Typography>
                <Typography variant="body2" gutterBottom>
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
              <img className={classes.img} alt="kansha" src={logo} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Workspace
                </Typography>
                <Typography variant="body2" gutterBottom>
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
              <img className={classes.img} alt="kansha" src={logo} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Admin Access
                </Typography>
                <Typography variant="body2" gutterBottom>
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
              <img className={classes.img} alt="kansha" src={logo} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Earn Badges
                </Typography>
                <Typography variant="body2" gutterBottom>
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
              <img className={classes.img} alt="kansha" src={logo} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Leave a <FavoriteIcon />
                </Typography>
                <Typography variant="body2" gutterBottom>
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
              <img className={classes.img} alt="kansha" src={logo} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Activity
                </Typography>
                <Typography variant="body2" gutterBottom>
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
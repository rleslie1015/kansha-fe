import React, { useEffect } from 'react';
import Auth from './Auth';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Paper } from '@material-ui/core';
import { connect } from 'react-redux';
import { login } from './store/actions/user-actions';

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		minHeight: '100vh',
	},
	paper: {
		marginTop: '1rem',
	},
	typo: {
		padding: '1rem .5rem',
	},
}));

const auth = new Auth();

function Home({ login, user }) {
	const classes = useStyles();

	useEffect(() => {
		auth.handleAuthentication();
        login(auth.getProfile());
    }, [login]);

    console.log(user.profile)

	return (
		<div id="App" className={classes.root}>
			<CssBaseline />
			<Container fixed>
				<Paper className={classes.paper}>
					<Typography className={classes.typo} variant="h5">
						Welcome to Kansha { user.profile.name }{' '}
						<span aria-label="folded hands emoji" role="img">
							🙏
						</span>
					</Typography>
				</Paper>
			</Container>
		</div>
	);
}

export default connect(state => ({ ...state }), { login })(Home);

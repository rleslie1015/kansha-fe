import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles, fade } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import SearchIcon from '@material-ui/icons/Search';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InputBase from '@material-ui/core/InputBase';
import 'typeface-montserrat';
import 'typeface-roboto';

const useStyles = makeStyles(theme => ({
	container: {
		fontFamily: 'Montserrat',
		backgroundColor: '#171717',
		color: 'white',
	},
	root: {
		width: '100vw',
		minHeight: '100vh',
		paddingTop: '2.5rem',
	},
	main_header: {
		margin: '40px 20px',
		fontSize: '3rem',
	},
	header_container: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	card_container: {
		display: 'flex',
	},
	card: {
        position: 'relative',
		minWidth: 275,
		margin: 20,
		backgroundColor: '#252525',
		color: 'white',
    },
    vert_icon: {
        position: "absolute",
        top: '10px',
        right: '10px'
    },
	card_content: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	title: {
		fontSize: 14,
	},
	pos: {
		marginBottom: 12,
		color: 'white',
	},
	avatar: {
		margin: 10,
		width: 100,
		height: 100,
	},
	card_actions: {
		display: 'flex',
		justifyContent: 'space-evenly',
	},
	button_dark: {
		backgroundColor: '#575757',
		color: 'white',
	},
	search: {
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.95),
		'&:hover': {
			backgroundColor: fade(theme.palette.common.white, 1),
		},
		marginLeft: 0,
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing(1),
			width: 'auto',
		},
	},
	searchIcon: {
		width: theme.spacing(7),
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		color: '#959595',
	},
	inputRoot: {
		color: '#959595',
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 7),
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			width: 200,
			'&:focus': {
				width: 250,
			},
		},
	},
}));

export default function Workspace() {
	const classes = useStyles();

	const [team, setTeam] = useState([]);

	useEffect(() => {
		axios
			.get('http://localhost:8000/users/')
			.then(res => {
				setTeam(res.data);
				console.log(res);
			})
			.catch(err => {
				console.log(err);
			});
	}, []);

	return (
		<div className={classes.container}>
			<Container fixed className={classes.root}>
				<div className={classes.header_container}>
					<h1 className={classes.main_header}>Workspace</h1>
					<div className={classes.search}>
						<div className={classes.searchIcon}>
							<SearchIcon color="inherit" />
						</div>
						<InputBase
							placeholder="Search Workspace…"
							classes={{
								root: classes.inputRoot,
								input: classes.inputInput,
							}}
							inputProps={{ 'aria-label': 'search' }}
						/>
					</div>
				</div>
				<div className={classes.card_container}>
					{team.map(users => (
						<Card className={classes.card}>
							<CardContent className={classes.card_content}>
									<Avatar
										alt="profile picture"
										src={users.profile_picture}
										className={classes.avatar}
									/>
                                    <MoreVertIcon className={classes.vert_icon}/>
								<Typography variant="h5" component="h2">
									{users.first_name} {users.last_name}
								</Typography>
								<Typography variant="body2" component="p">
									{users.job_title}
								</Typography>
								<Typography
									className={classes.pos}
									color="textSecondary">
									{users.department}
								</Typography>
							</CardContent>
							<CardActions className={classes.card_actions}>
								<Button
									variant="contained"
									className={classes.button_dark}>
									Thank
								</Button>
								<Button
									variant="contained"
									className={classes.button}>
									View Profile
								</Button>
							</CardActions>
						</Card>
					))}
				</div>
			</Container>
		</div>
	);
}

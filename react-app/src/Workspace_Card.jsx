import React from 'react'
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import profile from './assets/profile.png';
import {CardActions, CardContent, Typography, Avatar, IconButton} from '@material-ui/core';
import RecogModal from './Components/RecogModal/RecogModal';
import trashcan from './assets/Trashcan.png';
import { axiosWithAuth } from './utils/axiosWithAuth';
import {Link} from 'react-router-dom';

const useStyles = makeStyles(theme => ({
	card_container: {
		[theme.breakpoints.down('sm')]: {
			display: 'flex',
			flexWrap: 'wrap',
			justifyContent: 'center',
		},
		[theme.breakpoints.up('md')]: {
			display: 'flex',
			flexWrap: 'wrap',
			justifyContent: 'center',

		},
		[theme.breakpoints.up('lg')]: {
			display: 'flex',
			flexWrap: 'wrap',
		},
		[theme.breakpoints.down('xlg')]: {
			display: 'flex',
			flexWrap: 'wrap',
		}

	},
	card: {
		position: 'relative',
		minWidth: 275,
		margin: 10,
		backgroundColor: '#2D2C35',
		color: 'white',
		width: '30%',
		justifyContent: 'space-between',
		[theme.breakpoints.down('sm')]: {
			position: 'relative',
			minWidth: 275,
			height: '102px',
			margin: 10,
			backgroundColor: '#2D2C35',
			color: 'white',
			width: '100%',
			display: 'flex',
		},


	},
	card_content: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		paddingBottom: '0px',
		[theme.breakpoints.down('sm')]: {
			display: 'flex',
			flexDirection: 'row',
		},
		[theme.breakpoints.up('md')]: {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
		},
		[theme.breakpoints.up('lg')]: {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
		},
		[theme.breakpoints.down('xlg')]: {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
		}


	},
	title: {
		fontSize: 14,
	},
	job_title: {
		[theme.breakpoints.down('sm')]: {
			display: 'none',
		},
		[theme.breakpoints.up('md')]: {
			fontFamily: 'Roboto',
			fontSize: '1.3em',
			display: 'block',
		},
		[theme.breakpoints.up('lg')]: {
			fontFamily: 'Roboto',
			fontSize: '1.3em',
			display: 'block'
		},
	},
	department: {
		[theme.breakpoints.down('sm')]: {
			display: 'none',
		},
		[theme.breakpoints.up('md')]: {
			fontFamily: 'Roboto',
			fontWeight: '300',
			marginBottom: 12,
			color: 'white',
			display: 'block',
		},
		[theme.breakpoints.up('lg')]: {
			fontFamily: 'Roboto',
			fontWeight: '300',
			marginBottom: 12,
			color: 'white',
			display: 'block',

		},
	},
	avatar: {
		margin: 10,
		width: 100,
		height: 100,
		borderRadius: '100%',
		background: 'linear-gradient(135deg, #EE4D71 0%, #F15A3F 100%)',
		objectFit: 'cover',
		objectPosition: '50% 50%',
		  [theme.breakpoints.down('sm')]: {
			height: '50px',
			width: '50px',
			margin: '25%',
		},
	},
	card_actions: {
		display: 'flex',
		justifyContent: 'center',
		paddingBottom: '15px',
	},
	button: {
		// padding: '0.5em 3em',
		backgroundColor: '#2D2C35',
		color: '#EE4D71',
		textDecoration: 'none',
		border: 'none',
		borderRadius: '100%',
		padding: '12px 15px',
		[theme.breakpoints.down('sm')]: {
			borderRadius: '50%',
			height: '64px',
			width: '64px',
		},
		
	},
	button_dark: {
		backgroundColor: '#575757',
		color: 'white',
	},
	div: {
		position: 'absolute',
		top: '10px',
		right: '10px',
		[theme.breakpoints.down('sm')]: {
			top: '30px',
			left: '10px',
		},
	},
	img: {
		[theme.breakpoints.down('sm')]: {
			height: '25px',
			width: '25px'
		},
	}
}));

export default function Workspace_Card(props) {
	const classes = useStyles();

	const handleDelete = id => {
		// this will need to be turned into a confirmation modal, like the one on the figma.
		if(window.confirm('Are you sure you would like to delete this user?')){
		axiosWithAuth()
			.delete(`/users/${id}`)
			.then(() => {
				props.setTeam(props.team.filter(user => !(user.id === id)))
			})
		}
	}
	return (
		<div>
			<div className={classes.card_container} >
				{props.team.map(user => {
					if(props.profile.user_type === 'admin'){
						return(
							<Card className={classes.card} key={user.id}>
								<CardContent className={classes.card_content} >
									<Avatar
										alt="profile picture"
										src={user.profile_picture}
										className={classes.avatar}
									/>
									<div className={classes.div}>
										<img src={trashcan} alt='trash can icon' onClick={() => handleDelete(user.id)}/>
									</div>
									<Typography variant="h5" component="h2">
										{user.first_name} {user.last_name}
									</Typography>
									<Typography className={classes.job_title}>
										{user.job_title}
									</Typography>
									<Typography
										className={classes.department}
										color="textSecondary">
										{user.department}
									</Typography>
								</CardContent>
								<CardActions className={classes.card_actions}>
									<RecogModal {...user} />
									<Link to={`/profile/${user.id}`}>
										<button
											variant="contained"
											className={classes.button}>
											<img alt='profile icon' src={profile} className={classes.img} />
										</button>
									</Link>
								</CardActions>
						</Card>
						)
					} else {
						return(
							<Card className={classes.card} key={user.id}>
								<CardContent className={classes.card_content} >
									<Avatar
										alt="profile picture"
										src={user.profile_picture}
										className={classes.avatar}
									/>
									<Typography variant="h5" component="h2">
										{user.first_name} {user.last_name}
									</Typography>
									<Typography className={classes.job_title}>
										{user.job_title}
									</Typography>
									<Typography
										className={classes.department}
										color="textSecondary">
										{user.department}
									</Typography>
								</CardContent>
								<CardActions className={classes.card_actions}>
									<RecogModal {...user} />
									<Link to={`/profile/${user.id}`}>
										<IconButton
											variant="contained"
											className={classes.button} >
											<img alt='profile icon' src={profile} className={classes.img} />
										</IconButton>
									</Link>
								</CardActions>
							</Card>
						)
					}
				})}
			</div>
		</div>
	)
}
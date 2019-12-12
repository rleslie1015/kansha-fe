import React from 'react'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import RecogModal from './Components/RecogModal/RecogModal';
import trashcan from './assests/Trashcan.png';
import { axiosWithAuth } from './utils/axiosWithAuth';

const useStyles = makeStyles(theme => ({
	card_container: {
		[theme.breakpoints.down('sm')]: {
			display: 'flex',
			flexWrap: 'wrap',
			justifyContent: 'center'
		},
		[theme.breakpoints.up('md')]: {
			display: 'flex',
			flexWrap: 'wrap',
			justifyContent: 'center'

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
	},
	card_content: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	title: {
		fontSize: 14,
	},
	job_title: {
		fontFamily: 'Roboto',
		fontSize: '1.3em'
	},
	department: {
		fontFamily: 'Roboto',
		fontWeight: '300',
		marginBottom: 12,
		color: 'white',
	},
	avatar: {
		margin: 10,
		width: 100,
		height: 100,
		borderRadius: '100%',
		background: 'linear-gradient(135deg, #EE4D71 0%, #F15A3F 100%)',
		objectFit: 'cover',
  		objectPosition: '50% 50%',
	},
	card_actions: {
		display: 'flex',
		justifyContent: 'center'
	},
	button_dark: {
		backgroundColor: '#575757',
		color: 'white',
	},
	div: {
		position: 'absolute',
		top: '10px',
		right: '10px',
	},
}));

export default function Workspace_Card(props) {
	const classes = useStyles();

	const handleDelete = id => {
		axiosWithAuth()
			.delete(`/users/${id}`)
			.then(() => {
				props.setTeam(props.team.filter(user => !(user.id === id)))
			})
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
									{/* <Button
											variant="contained"
											className={classes.button}>
											View Profile
										</Button> */}
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
									{/* <Button
											variant="contained"
											className={classes.button}>
											View Profile
										</Button> */}
								</CardActions>
							</Card>
						)
					}
				})}
			</div>
		</div>
	)
}
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { useSpring, animated } from 'react-spring/web.cjs';
import { TextField, Button, FormControl, Fab, Box } from '@material-ui/core';
import { sendRecog } from '../../store/actions/recog-actions';
import send from '../../assets/send.png';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import RemoveIcon from '@material-ui/icons/Remove';
import { axiosWithAuth } from '../../utils/axiosWithAuth';


import { connect } from 'react-redux';

const useStyles = makeStyles(theme => ({
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		'@global': {
            '*::-webkit-scrollbar': {
				width: '.5rem',
            },
            '*::-webkit-scrollbar-corner': {
                backgroundColor: 'transparent',
            },
            '*::-webkit-scrollbar-thumb': {
                backgroundColor: '#2D2C35',
                borderRadius: '10px',
            },
        },
	},
	paper: {
		backgroundColor: '#2D2C35',
		border: '2px solid #000',
		boxShadow: 'none',
		padding: theme.spacing(2, 4, 3),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		color: 'white',
	},
	profPic: {
		width: '240px',
		height: '240px',
		borderRadius: '100%',
		maxHeight: '200px',
		maxWidth: '200px',
		background: 'linear-gradient(135deg, #EE4D71 0%, #F15A3F 100%)',
		objectFit: 'cover',
		objectPosition: '50% 50%',
	},
	cancelButton: {
		alignSelf: 'flex-start',
		cursor: 'pointer',
	},
	button: {
		// padding: '0.5em 3em',
		backgroundColor: '#2D2C35',
		color: '#EE4D71',
		textDecoration: 'none',
		border: '2px solid #EE4d71',

		borderRadius: '100%',
		[theme.breakpoints.down('sm')]: {
			borderRadius: '50%',
			height: '64px',
			width: '64px',
		}
	},
	recogButton: {
		width: '50%',
		margin: '1rem 8rem',
		background: 'linear-gradient(162.95deg, #EE4D71 0%, #F15A3F 100%)',
		color: 'white',
		textDecoration: 'none',
		
	},
	badgeBox: {
		backgroundColor: '#3A3845',
		display: 'flex',
		alignItems: 'center',
		flexWrap: 'wrap',
        justifyContent: 'center',
		overflow: 'scroll',
		borderRadius: '10px 10px 0 10px',
		width: '568px',
		height: '189px',
		padding: '.5rem',
		position: 'relative',
		margin: '16px 0 8px 0',
	},
	textField: {
		borderRadius: '10px 10px 0 10px',
		width: '568px',
		height: '189px',
		backgroundColor: 'white',
		padding: '.5rem',
		position: 'relative',
	},
	input: {
		fontFamily: 'Montserrat',
		fontStyle: 'normal',
		fontWeight: 'normal',
		fontSize: '16px',
		lineHeight: '20px',
	},

	fab: {
		position: 'absolute',
		transform: 'translate(450%, 795%)',
		background: 'linear-gradient(135deg, #EE4D71 0%, #F15A3F 100%)',
    },
    fabIcon: {
        width: '80%',
		height: 'auto',
		color: '#FFFFFF',
	},
	badge: {
        width: '150px',
        height: '150px',
	},
	removeBadge: {
		width: '25px',
		height: '25px',
		background: '#E13A3A',
		borderRadius: '100%',
		position: 'absolute',
		top: '6px',
		left: '72px',
		cursor: 'pointer',
	},
	removeFab: {
		color: '#FFFFFF',
	},
	badgeImg: {
		width: '20%',
	},
	chosenBadge: {
		position: 'absolute',
		transform: 'translate(-1%, -95%)',
	},
   img: {
		padding: '7px',
		[theme.breakpoints.down('sm')]: {
			height: '38px',
			width: '38px'
		},
   	},
}));

const Fade = React.forwardRef(function Fade(props, ref) {
	const { in: open, children, onEnter, onExited, ...other } = props;
	const style = useSpring({
		from: { opacity: 0 },
		to: { opacity: open ? 1 : 0 },
		onStart: () => {
			if (open && onEnter) {
				onEnter();
			}
		},
		onRest: () => {
			if (!open && onExited) {
				onExited();
			}
		},
	});

	return (
		<animated.div ref={ref} style={style} {...other}>
			{children}
		</animated.div>
	);
});

Fade.propTypes = {
	children: PropTypes.element,
	in: PropTypes.bool.isRequired,
	onEnter: PropTypes.func,
	onExited: PropTypes.func,
};

function RecogModal(props) {
	console.log(props);
	const classes = useStyles();
	const [isTyping, setIsTyping] = useState(true);
	const [badges, setBadges] = useState([])
	const [open, setOpen] = useState(false);
	const [recog, setRecog] = useState({
		message: '',
		sender: props.user.profile.id,
		recipient: props.id,
		date: new Date(Date.now()),
		badge_id: null,
	});
	const {
		first_name,
		last_name,
		job_title,
		department,
		profile_picture,
	} = props;

	useEffect(() => {
		axiosWithAuth()
			.get('/badges')
			.then(res => {
				setBadges(res.data);
			})
			.catch(err => {
				console.log(err);
			});
	}, []);

	const handleChange = event => {
		setRecog({ ...recog, [event.target.name]: event.target.value });
	};

	const handleSubmit = event => {
		props.sendRecog({ ...recog, date: new Date(Date.now())})
		handleClose();
		alert('Recogniton has been sent')
	};

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
		setRecog({
			message: '',
			sender: props.user.profile.id,
			recipient: props.id,
			date: new Date(Date.now()),
			badge_id: null,
		})
	};

	const textField = () => {
		setIsTyping(true)
	}

	const badgePrompt = () => {
		setIsTyping(false)
	}

	const handleSwitch = badge_id => {
		setRecog({ ...recog, badge_id })
		setIsTyping(true)
	}

	const removeBadge = () => {
		setRecog({ ...recog, badge_id: null })
	}
	
	console.log(recog)

	if (isTyping) {
	return (
		<div>
			<Button
				type="button"
				onClick={handleOpen}
				className={classes.button}>
				
				<img src={send} alt='thank button' className={classes.img}/>
			</Button>
			<Modal
				className={classes.modal}
				open={open}
				onClose={handleClose}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}>
				<Fade in={open}>
					<div className={classes.paper}>
						<img
							src="https://kansha-bucket.s3-us-west-1.amazonaws.com/x.png"
							onClick={handleClose}
              className={classes.cancelButton}
              alt="close button"
						/>
						<img
							src={profile_picture}
              className={classes.profPic}
              alt="user profile"
						/>
						<p>
							{first_name} {last_name}
						</p>
						<p>{job_title}</p>
						<p>{department}</p>
						<div>
							<TextField
								className={classes.textField}
								name="message"
								onChange={handleChange}
								id="standard-multiline-static"
								multiline
								rows="4"
								placeholder="Type your message here..."
								value={recog.message}
								margin="normal"
								InputProps={{
									disableUnderline: true,
									className: classes.input,
								}}
								InputLabelProps={{
									className: classes.label,
								}}
							/>
							{recog.badge_id &&
							<Box className={classes.chosenBadge}>
								<div
									onClick={removeBadge}
									className={classes.removeBadge}
								>
								<RemoveIcon className={classes.removeFab} />
								</div>
								<img src={badges[recog.badge_id-1].badge_URL} className={classes.badgeImg} />
							</Box>}
							</div>
						<Fab 
							className={classes.fab}
							onClick={badgePrompt}>
							<AddCircleOutlineIcon className={classes.fabIcon} />
						</Fab> 
						<Button
							className={classes.recogButton}
							variant="contained"
							color="primary"
							onClick={handleSubmit}>
							Send
						</Button>
					</div>
				</Fade>
			</Modal>
		</div>
	);
	} else {
		return(
			<div>
			<Button
				type="button"
				onClick={handleOpen}
				className={classes.button}>
				
				<img src={send} alt='thank button' />
			</Button>
			<Modal
				className={classes.modal}
				open={open}
				onClose={handleClose}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}>
				<Fade in={open}>
					<div className={classes.paper}>
						<img
							src="https://kansha-bucket.s3-us-west-1.amazonaws.com/x.png"
							onClick={handleClose}
			className={classes.cancelButton}
			alt="close button"
						/>
						<img
							src={profile_picture}
			className={classes.profPic}
			alt="user profile"
						/>
						<p>
							{first_name} {last_name}
						</p>
						<p>{job_title}</p>
						<p>{department}</p>
                <Box className={classes.badgeBox}>
					{badges.map(badge => {
						console.log(badge)
							return(
								<Button onClick={() => {handleSwitch(badge.id)}}>
                        			<img src={badge.badge_URL} alt={badge.badge_name} className={classes.badge} />
                    			</Button>
							)
					})}
                </Box>
						<Fab 
							className={classes.fab}
							onClick={textField}>
							<HighlightOffIcon className={classes.fabIcon} />
						</Fab> 
						<Button
							className={classes.recogButton}
							variant="contained"
							color="primary"
							onClick={handleSubmit}>
							Send
						</Button>
					</div>
				</Fade>
			</Modal>
		</div>
	)}


}

const mapStateToProps = state => {
	return {
		...state,
	};
};

export default connect(mapStateToProps, { sendRecog })(RecogModal);

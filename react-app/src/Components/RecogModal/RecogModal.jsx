import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { useSpring, animated } from 'react-spring/web.cjs';
import { TextField, Button, FormControl, Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { sendRecog } from '../../store/actions/recog-actions';
import send from '../../assets/send.png';
import AddBadge from '../../assets/AddBadge.png'

import { connect } from 'react-redux';

const useStyles = makeStyles(theme => ({
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
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
		padding: '0.5em 3em',
		backgroundColor: '#2D2C35',
		color: '#EE4D71',
		textDecoration: 'none',
		border: '2px solid #EE4d71',
		[theme.breakpoints.down('sm')]: {
			width: '100%',
			height: '100px',
			borderRadius: '50%',
		},
		
	},
	recogButton: {
		width: '50%',
		margin: '1rem 8rem',
		background: 'linear-gradient(162.95deg, #EE4D71 0%, #F15A3F 100%)',
		color: 'white',
		textDecoration: 'none',
	},
	textField: {
		borderRadius: '10px 10px 0 10px',
		width: '568px',
		height: '189px',
		backgroundColor: 'white',
		padding: '.5rem',
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
		transform: 'translate(900%, 250%)',
		background: 'linear-gradient(135deg, #EE4D71 0%, #F15A3F 100%)',
	},
	addBadge: {
		width: '60%',
		height: 'auto',
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
	const [open, setOpen] = useState(false);
	const [recog, setRecog] = useState({
		message: '',
		sender: props.user.profile.id,
		recipient: props.id,
		date: new Date(Date.now()),
	});
	const {
		first_name,
		last_name,
		job_title,
		department,
		profile_picture,
	} = props;

	const handleChange = event => {
		setRecog({ ...recog, [event.target.name]: event.target.value });
	};

	const handleSubmit = event => {
		props.sendRecog(recog);
		handleClose();
	};

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
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
						<FormControl>
							<TextField
								className={classes.textField}
								name="message"
								onChange={handleChange}
								id="standard-multiline-static"
								multiline
								rows="4"
								placeholder="Type your message here..."
								margin="normal"
								InputProps={{
									disableUnderline: true,
									className: classes.input,
								}}
								InputLabelProps={{
									className: classes.label,
								}}
							/>
							<Fab className={classes.fab}>
        						<img src={AddBadge} className={classes.addBadge}/>
      						</Fab>
						</FormControl>
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
}

const mapStateToProps = state => {
	return {
		...state,
	};
};

export default connect(mapStateToProps, { sendRecog })(RecogModal);

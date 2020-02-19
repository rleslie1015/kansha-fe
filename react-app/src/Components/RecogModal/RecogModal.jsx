import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSpring, animated } from 'react-spring/web.cjs';
import { sendRecog } from '../../store/actions/recog-actions';
import send from '../../assets/send.png';

import { axiosWithAuth } from '../../utils/axiosWithAuth';

import { connect } from 'react-redux';

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
	const [isTyping, setIsTyping] = useState(true);
	const [badges, setBadges] = useState([]);
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
		props.sendRecog({ ...recog, date: new Date(Date.now()) });
		handleClose();
		alert('Recogniton has been sent');
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
		});
	};

	const textField = () => {
		setIsTyping(true);
	};

	const badgePrompt = () => {
		setIsTyping(false);
	};

	const handleSwitch = badge_id => {
		setRecog({ ...recog, badge_id });
		setIsTyping(true);
	};

	const removeBadge = () => {
		setRecog({ ...recog, badge_id: null });
	};

	console.log(recog);

	if (isTyping) {
		return (
			<div>
				<button type="button" onClick={handleOpen}>
					<img src={send} alt="thank button" />
				</button>
				{/* <Modal
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
			</Modal> */}
			</div>
		);
	} else {
		return (
			<div>
				<button type="button" onClick={handleOpen}>
					<img src={send} alt="thank button" />
				</button>
				{/* <Modal
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
									console.log(badge);
									return (
										<button
											onClick={() => {
												handleSwitch(badge.id);
											}}>
											<img
												src={badge.badge_URL}
												alt={badge.badge_name}
												className={classes.badge}
											/>
										</button>
									);
								})}
							</Box>
							<Fab className={classes.fab} onClick={textField}>
								<HighlightOffIcon className={classes.fabIcon} />
							</Fab>
							<button
								className={classes.recogbutton}
								variant="contained"
								color="primary"
								onClick={handleSubmit}>
								Send
							</button>
						</div>
					</Fade>
				</Modal> */}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		...state,
	};
};

export default connect(mapStateToProps, { sendRecog })(RecogModal);

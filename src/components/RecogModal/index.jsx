import React, { useState, useEffect } from 'react';
import { ReactComponent as AddBadgeIcon } from '../../assets/addbadge.svg';
import { ReactComponent as CloseIcon } from '../../assets/closex.svg';
import { sendRecog } from '../../store/actions/recog-actions';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import { useDispatch, useSelector } from 'react-redux';

function RecogModal({ profile, close }) {
	const dispatch = useDispatch();
	const user = useSelector(({ user }) => ({
		...user,
	}));
	const [isTyping, setIsTyping] = useState(true);
	const [sent, setSent] = useState(false);
	const [badges, setBadges] = useState([]);
	const [recog, setRecog] = useState({
		message: '',
		sender: user.profile.id,
		recipient: profile.id,
		date: new Date(Date.now()),
		badge_id: null,
	});
	const {
		first_name,
		last_name,
		job_title,
		department,
		profile_picture,
	} = profile;

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
		event.preventDefault();
		dispatch(sendRecog({ ...recog, date: new Date() }));

		setSent(true);
	};

	const handleSwitch = badge_id => {
		setRecog({ ...recog, badge_id });
		setIsTyping(true);
	};

	const removeBadge = () => {
		setRecog({ ...recog, badge_id: null });
	};

	const handleClose = () => {
		setSent(false);
		close(false);
	};

	return sent ? (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
			}}>
			<p style={{ fontSize: '1.6rem' }}>
				Your recognition has been sent!
			</p>
			<button className="btn-modal" onClick={handleClose}>
				Ok
			</button>
		</div>
	) : (
		<section className="rec-modal">
			<section>
				<img src={profile_picture} alt="" />
				<h5>
					{first_name} {last_name}
				</h5>
				<p>{job_title}</p>
				<p>{department}</p>
			</section>
			{isTyping ? (
				<form>
					<textarea
						value={recog.message}
						name="message"
						onChange={handleChange}
						aria-label="Type your message here"
						placeholder="Type your message here..."
						multiline="true"
					/>
					<section>
						{recog.badge_id &&
							badges.reduce((acc, badge) => {
								if (recog.badge_id === badge.id) {
									acc.push(
										<div key={badge.id}>
											<span
												role="img"
												onClick={removeBadge}>
												-
											</span>
											<img src={badge.badge_URL} alt="" />
										</div>,
									);
								}
								return acc;
							}, [])}
					</section>
					<button
						onClick={() => setIsTyping(false)}
						className="corner-button">
						<AddBadgeIcon />
					</button>
					<button className="send-button" onClick={handleSubmit}>
						Send
					</button>
				</form>
			) : (
				<div>
					<section>
						{badges.map(badge => (
							<img
								src={badge.badge_URL}
								alt=""
								key={badge.id}
								onClick={() => handleSwitch(badge.id)}
							/>
						))}
					</section>
					<button
						onClick={() => setIsTyping(true)}
						className="corner-button">
						<CloseIcon />
					</button>
				</div>
			)}
		</section>
	);
}

export default RecogModal;

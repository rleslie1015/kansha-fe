import React, { useState, useEffect } from 'react';
import { ReactComponent as AddBadgeIcon } from '../../assets/addbadge.svg';
import { ReactComponent as CloseIcon } from '../../assets/closex.svg';
import { sendRecog } from '../../store/actions/recog-actions';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import { connect } from 'react-redux';

function RecogModal(props) {
	const [isTyping, setIsTyping] = useState(true);
	const [badges, setBadges] = useState([]);
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
	} = props.profile;

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
		alert('Recogniton has been sent');
	};

	const handleSwitch = badge_id => {
		setRecog({ ...recog, badge_id });
		setIsTyping(true);
	};

	const removeBadge = () => {
		setRecog({ ...recog, badge_id: null });
	};

	return (
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
					<input
						value={recog.message}
						onChange={handleChange}
						aria-label="message"
						placeholder="Type your message here..."
						multiline
					/>
					<section>
						{recog.badge_id &&
							badges.reduce((acc, badge) => {
								if (recog.badge_id === badge.id) {
									acc.push(
										<>
											<span
												role="img"
												onClick={removeBadge}>
												-
											</span>
											<img src={badge.badge_URL} alt="" />
										</>,
									);
								}
								return acc;
							}, [])}
					</section>
					<button onClick={() => setIsTyping(false)}>
						<AddBadgeIcon />
					</button>
					<button>Send</button>
				</form>
			) : (
				<div>
					<section>
						{badges.map(badge => (
							<img
								src={badge.badge_URL}
								alt=""
								onClick={() => handleSwitch(badge.id)}
							/>
						))}
					</section>
					<button onClick={() => setIsTyping(true)}>
						<CloseIcon />
					</button>
				</div>
			)}
		</section>
	);
}

const mapStateToProps = state => {
	return {
		...state,
	};
};

export default connect(mapStateToProps, { sendRecog })(RecogModal);

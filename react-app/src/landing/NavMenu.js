import React from 'react';
import Auth from '../utils/auth';
import 'typeface-montserrat';
const auth = new Auth();

export default function NavMenu() {
	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClick = event => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div>
			<button
				aria-controls="simple-menu"
				aria-haspopup="true"
				onClick={handleClick}></button>
			<ul
				id="simple-menu"
				anchorEl={anchorEl}
				keepMounted
				open={Boolean(anchorEl)}
				onClose={handleClose}>
				<li onClick={() => (window.location.hash = 'features')}>
					Learn More
				</li>
				<li onClick={() => (window.location.hash = 'our_team')}>
					Our Team
				</li>
				<li onClick={auth.login}>Get Started</li>
			</ul>
		</div>
	);
}

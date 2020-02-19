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

	return <div></div>;
}

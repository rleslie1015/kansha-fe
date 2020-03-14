import React from 'react';

const HamburgerMenu = ({ open, setOpen }) => {
	return (
		<button
			className={`hamburger-landing hamburger hamburger--collapse ${open &&
				'is-active'}`}
			type="button"
			data-test="hamburger-menu"
			onClick={() => setOpen(!open)}>
			<span
				className="hamburger-box"
				role="presentation"
				onClick={() => setOpen(!open)}>
				<span
					className="hamburger-inner"
					role="presentation"
					onClick={() => setOpen(!open)}
				/>
			</span>
		</button>
	);
};

export default HamburgerMenu;

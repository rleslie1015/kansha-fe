import React from 'react';

const Hamburger = ({ open, setOpen }) => {
	return (
		<button
			className={`hamburger hamburger--arrow ${open && 'is-active'}`}
			type="button">
			<span className="hamburger-box" role="presentation">
				<span className="hamburger-inner" role="presentation" />
			</span>
		</button>
	);
};

export default Hamburger;

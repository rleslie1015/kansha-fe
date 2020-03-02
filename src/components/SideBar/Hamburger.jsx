import React from 'react';

const Hamburger = ({ open, setOpen }) => {
	return (
		<button
			className={`hamburger hamburger--arrow ${open && 'is-active'}`}
			type="button"
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

export default Hamburger;

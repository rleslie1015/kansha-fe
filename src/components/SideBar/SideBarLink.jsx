import React, { memo } from 'react';
// import clsx from 'clsx';
import { useHistory /* useRouteMatch */ } from 'react-router-dom';

export const SidebarLink = memo(({ name, path, open, icon }) => {
	const history = useHistory();
	// const match = useRouteMatch(path);

	// let { isExact } = match ? match : { isExact: false };

	return (
		<li
			className="side-nav-li"
			button
			key={name}
			onClick={() => history.push(path)}>
			<section className="side-bar-link-div">
				<img src={icon} alt="profile icon" />
			</section>
			{/* <p>{name}</p> */}
		</li>
	);
});

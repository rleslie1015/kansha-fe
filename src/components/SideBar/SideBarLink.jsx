import React, { memo } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const SidebarLink = memo(
	({ name, path, open, icon: Icon, className }) => {
		const { pathname } = useLocation();
		return (
			<Link
				to={path}
				title={name}
				className={pathname === path ? 'active-link' : ''}>
				<Icon className={className} />
				{open && <p>{name}</p>}
			</Link>
		);
	},
);

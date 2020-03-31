import React from 'react';
import { Badge } from '../Profile/styled';

function Badges({ userBadges, badges }) {
	return (
		<ul>
			{badges && (
				<>
					{userBadges.map(badge => {
						if (badge.badge) {
							return (
								<Badge key={badge.id} count={badge.count}>
									<img
										className="badge-profile"
										src={badge.badge}
										alt="badge"
										width="140"
									/>
								</Badge>
							);
						} else {
							return null;
						}
					})}
				</>
			)}
		</ul>
	);
}

export default Badges;

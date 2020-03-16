import React from 'react';

const TeamsEmployee = props => {
	return (
		<div>
			<h2>
				{props.data.first_name} {props.data.last_name}
			</h2>
			<h2>{props.data.job_title}</h2>
		</div>
	);
};

export default TeamsEmployee;

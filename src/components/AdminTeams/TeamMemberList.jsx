import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import { useLocation } from 'react-router-dom';
//component should render list of employees from one team

import { ReactComponent as HideIcon } from '../../assets/TeamsIcons/hide.svg';
import { ReactComponent as DeleteIcon } from '../../assets/TeamsIcons/delete.svg';
import { ReactComponent as GroupIcon } from '../../assets/TeamsIcons/Group.svg';
import { ReactComponent as RecognitionIcon } from '../../assets/TeamsIcons/recognition.svg';
import Member from './Member';

// Modal imports

function TeamMemberList({ profile }) {
	const [modal, setModal] = useState(false);
	const [teamDetails, setTeamDetails] = useState();

	let location = useLocation();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const { data } = await axiosWithAuth().get(
					`${location.pathname}`,
				);
				setTeamDetails(data);
			} catch (err) {
				console.log(err);
			}
		};
		fetchData();
	}, []);

	console.log(teamDetails, 'team details object');

	return (
		<section className="teams-dashboard">
			<div className="header">
				<h1>Hello</h1>
				<div className="add-team-container">
					<button>Create Team</button>
				</div>
				<h2>Members</h2>
			</div>
			<div className="employee-filter-container">
				<h3>Filter:</h3>
				<button className="btn-filter">Members</button>
				<div className="employee-search-container">
					<input
						// value={filter}
						// onChange={event => setFilter(event.target.value)}
						type="text"
						id="search"
						name="search"
						placeholder="Search"
					/>
				</div>
			</div>
			<tbody>
				{/* {members.map(member => {
					return (
						<Member
							key={member.id}
							member={member}
							modal={modal}
							setModal={setModal}
							profile={profile}
							teamDetails={teamDetails}
						/>
					);
				})} */}
			</tbody>
		</section>
	);
}

export default TeamMemberList;

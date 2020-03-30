import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import { useLocation, useHistory } from 'react-router-dom';
import Member from './Member';

function TeamMemberList() {
	const [modal, setModal] = useState(false);
	const [teamDetails, setTeamDetails] = useState();
	const [filter, setFilter] = useState('');
	const [loadingState, setLoadingState] = useState(true);
	const [teamCount, setTeamCount] = useState([]);

	let location = useLocation();
	const history = useHistory();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const { data } = await axiosWithAuth().get(
					`${location.pathname}?search=${filter}`,
				);
				setTeamDetails(data);
				setLoadingState(false);
			} catch (err) {
				console.log(err);
			}
		};
		fetchData();
	}, [location.pathname, filter]);

	useEffect(() => {
		axiosWithAuth()
			.get('/teams/')
			.then(res => {
				setTeamCount(res.data);
			});
	}, []);

	// Getting total number of teams in an organization for header display
	const teamLength = teamCount.length;

	const handleBack = e => {
		e.preventDefault();
		history.push('/organization');
	};

	if (loadingState === true) {
		return <div>'Loading...'</div>;
	} else {
		return (
			<section className="teams-dashboard">
				<div className="header">
					<div className="teams-name-button">
						<h1>{teamDetails.name}</h1>
						<button
							onClick={
								handleBack
							}>{`All Teams (${teamLength})`}</button>
					</div>
					<h2>{`Members (${teamDetails.team_members.length})`}</h2>
				</div>
				<div className="employee-filter-container">
					<h3>Filter:</h3>
					<button className="btn-filter">Members</button>
					<div className="employee-search-container">
						<input
							value={filter}
							onChange={event => setFilter(event.target.value)}
							type="text"
							id="search"
							name="search"
							placeholder="Search"
						/>
					</div>
				</div>
				<table className="team-member-table">
					<tbody>
						{teamDetails?.team_members?.map(member => {
							return (
								<Member
									key={member.id}
									member={member}
									modal={modal}
									setModal={setModal}
									profile={member}
									teamDetails={teamDetails}
									setTeamDetails={setTeamDetails}
								/>
							);
						})}
					</tbody>
				</table>
			</section>
		);
	}
}

export default TeamMemberList;

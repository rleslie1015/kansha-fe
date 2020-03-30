import React from 'react';
import Header from './Header';
import Footer from './Footer';

import smith from '../../assets/aboutUs/kevin-smith.png';
import ackerman from '../../assets/aboutUs/andrew-ackerman.png';
import bruner from '../../assets/aboutUs/emily-bruner.svg';
import franceschi from '../../assets/aboutUs/anna-franceschi.jpeg';
import gillies from '../../assets/aboutUs/aaron-gillies.jpg';
import maddocks from '../../assets/aboutUs/andrew-maddocks.jpg';
import nelson from '../../assets/aboutUs/VickieNelson.svg';
import stancek from '../../assets/aboutUs/joscelyn-stancek.svg';
import tellez from '../../assets/aboutUs/vanessa-tellez.jpg';

import cori from './images/cori.png';
import ty from './images/ty.png';
import sydney from './images/sydney.png';
import andrew from './images/andrew.png';
import leslie from './images/leslie.png';
import gustavo from './images/gustavo.png';
import matt from './images/matt.png';
import nick from './images/nick.png';
import ahmar from './images/ahmar.png';
import gizella from './images/gizella.png';

export default function AboutUs() {
	const labs21 = [
		{
			name: 'Andrew Ackerman',
			job: 'Web Developer',
			imageUrl: ackerman,
		},
		{
			name: 'Emily Bruner',
			job: 'Web Developer',
			imageUrl: bruner,
		},
		{
			name: 'Anna Franceschi',
			job: 'Web Developer',
			imageUrl: franceschi,
		},
		{
			name: 'Aaron Gillies',
			job: 'Web Developer',
			imageUrl: gillies,
		},
		{
			name: 'Andrew Maddocks',
			job: 'Web Developer',
			imageUrl: maddocks,
		},
		{
			name: 'Vickie Nelson',
			job: 'UX Designer',
			imageUrl: nelson,
		},
		{
			name: 'Joscelyn Stancek',
			job: 'Web Developer',
			imageUrl: stancek,
		},
		{
			name: 'Vanessa Tellez',
			job: 'Web Developer',
			imageUrl: tellez,
		},
	];

	const labs19 = [
		{
			name: 'Ty Lippe',
			job: 'Web Developer',
			imageUrl: ty,
		},
		{
			name: 'Sydney Crumley',
			job: 'Web Developer',
			imageUrl: sydney,
		},
		{
			name: 'Andrew Goenner',
			job: 'Web Developer',
			imageUrl: andrew,
		},
		{
			name: 'Leslie Rodriguez',
			job: 'Web Developer',
			imageUrl: leslie,
		},
		{
			name: 'Gustavo Isturiz',
			job: 'Web Developer',
			imageUrl: gustavo,
		},
		{
			name: 'Matt Masters',
			job: 'Web Developer',
			imageUrl: matt,
		},
		{
			name: 'Nick Truson',
			job: 'Web Developer',
			imageUrl: nick,
		},
		{
			name: 'Ahmar Mansoor',
			job: 'Web Developer',
			imageUrl: ahmar,
		},
		{
			name: 'Gizella Ortiz',
			job: 'Web Developer',
			imageUrl: gizella,
		},
	];

	return (
		<div className="about-us-container">
			<Header />
			<main>
				<section className="labs-21-section">
					<h2>Labs 21</h2>
					<div className="labs-21-team-lead">
						<img
							className="aboutUs-picture"
							src={smith}
							alt="kevin smith"
						/>
						<h3>Kevin Smith</h3>
						<h4>Team Lead</h4>
					</div>
					<div className="labs-21-team">
						{labs21.map(data => {
							return (
								<div className="team-member-profile">
									<img
										className="aboutUs-picture"
										src={data.imageUrl}
										alt={data.name}
									/>
									<h3>{data.name}</h3>
									<h4>{data.job}</h4>
								</div>
							);
						})}
					</div>
				</section>
				<section className="labs-19-section">
					<h2>Labs 19</h2>
					<div className="labs-19-team-lead">
						<img
							className="aboutUs-picture"
							src={cori}
							alt="cori paris"
						/>
						{/* <h3>Cori Paris</h3>
						<h4>Team Lead</h4> */}
					</div>
					<div className="labs-19-team">
						{labs19.map(data => {
							return (
								<div className="team-member-profile">
									<img
										className="aboutUs-picture"
										src={data.imageUrl}
										alt={data.name}
									/>
									{/* <h4>{data.job}</h4> */}
								</div>
							);
						})}
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
}

import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default function AboutUs() {
	const labs21 = [
		{
			name: 'Andrew Ackerman',
			job: 'Web Developer',
			imageUrl: '../assets/',
		},
		{ name: 'Emily Bruner', job: 'Web Developer', imageUrl: '../assets/' },
		{
			name: 'Anna Franceschi',
			job: 'Web Developer',
			imageUrl: '../assets/',
		},
		{ name: 'Aaron Gillies', job: 'Web Developer', imageUrl: '../assets/' },
		{
			name: 'Andrew Maddocks',
			job: 'Web Developer',
			imageUrl: '../assets/',
		},
		{ name: 'Vickie Nelson', job: 'UX Designer', imageUrl: '../assets/' },
		{
			name: 'Joscelyn Stancek',
			job: 'Web Developer',
			imageUrl: '../assets/',
		},
		{
			name: 'Vanessa Tellez',
			job: 'Web Developer',
			imageUrl: '../assets/',
		},
	];

	return (
		<div className="about-us-container">
			<Header />
			<main>
				<h1>Our Team</h1>
				<section>
					<h2>Labs 21</h2>
				</section>
			</main>
			<Footer />
		</div>
	);
}

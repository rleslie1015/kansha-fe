import React from 'react';
import Main from './Main';
import Footer from './Footer';
import Header from './Header';
import ListOfFeatures from './ListOfFeatures.js';

export const Landing = () => {
	return (
		<div className="landing-page">
			<Header />
			<Main />
			<ListOfFeatures />
			<Footer />
		</div>
	);
};

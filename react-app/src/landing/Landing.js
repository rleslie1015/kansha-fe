import React from 'react';
import Main from './Main';
import Footer from './Footer';
import Header from './Header';
import WhyKansha from './WhyKansha';

export const Landing = () => {
	return (
		<div className="landing-page">
			<Header />
			<Main />
			<WhyKansha />
			<Footer />
		</div>
	);
};

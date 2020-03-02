import React from 'react';
import Main from './Main';
import Footer from './Footer';
import Header from './Header';
import WhyKansha from './WhyKansha';
import DidYouKnow from './DidYouKnow';
import ResultsYouCanSee from './ResultsYouCanSee';
import EnterEmail from './EnterEmail';
import ListOfFeatures from './ListOfFeatures';

const Landing = () => {
	return (
		<main className="landing-page">
			<Header />
			<Main />
			<WhyKansha />
			<DidYouKnow />
			<ListOfFeatures />
			<ResultsYouCanSee />
			<EnterEmail />
			<Footer />
		</main>
	);
};

export default Landing;

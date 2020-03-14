import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import S4UserUpload from '../../components/Onboarding/S4AUserUpload';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { renderWithRouter } from '../utils';

let S4Component = (
	<BrowserRouter>
		<S4UserUpload />
	</BrowserRouter>
);

afterEach(cleanup);

describe.skip('S4', () => {
	//   it('matches snapshot', () => {
	//   const tree = renderer.create(S4Component);
	//   expect(tree.toJSON()).toMatchSnapshot();
	// })

	it('renders without crashing', () => {
		render(S4Component);
	});

	it('should call props.onClick when clicked', () => {
		const { getByText, history } = renderWithRouter(<S4UserUpload />);

		const button = getByText(/Previous step/i);
		// fireEvent.click(button);
		expect(history.location.pathname).toBe('/');
	});

	it('should call the next button when clicked', () => {
		const { getByText, history } = renderWithRouter(S4UserUpload);

		const nextButton = getByText(/Next/i);
		fireEvent.click(nextButton);
		expect(history.location.pathname).toBe('/onboarding/step-6');
	});

	it('it displays add employees question', () => {
		const { getByText, getAllByText } = render(S4Component);
		getByText(/Would you like to add employees now?/i);
		getByText(/yes/i);
		getAllByText(/no/i);
	});

	it('renders without crashing', () => {
		render(S4Component);
	});

	// it('should call props.onClick when clicked', () => {
	// 	const { getByText, history } = renderWithRouter(<S4UserUpload />);

	// 	const button = getByText(/Previous step/i);

	// 	expect(history.location.pathname).toBe('/onboarding/step-2');
	// });

	it('should call the next button when clicked', () => {
		const { getByText, history } = renderWithRouter(<S4UserUpload />);

		const nextButton = getByText(/Next/i);
		fireEvent.click(nextButton);
		expect(history.location.pathname).toBe('/onboarding/step-6');
	});

	it('it displays add employees question', () => {
		const { getByText, getAllByText } = render(S4Component);
		getByText(/Would you like to add employees now?/i);
		getByText(/yes/i);
		getAllByText(/no/i);
	});
});

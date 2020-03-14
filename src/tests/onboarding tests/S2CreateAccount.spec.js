import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import S2CreateAccount from '../../components/Onboarding/S2CreateAccount';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { renderWithRouter } from '../utils';

let S2Component = (
	<BrowserRouter>
		<S2CreateAccount
			user={{
				first_name: 'Vanessa',
				last_name: 'Staneck',
				job_title: 'manager',
				org_name: 'kansha',
				org_name: 'less than 20',
				industry: 'accounting',
			}}
		/>
	</BrowserRouter>
);

afterEach(cleanup);

describe.skip('S2', () => {
	it('matches snapshot', () => {
		const tree = renderer.create(S2Component);
		expect(tree.toJSON()).toMatchSnapshot();
	});

	it('renders without crashing', () => {
		render(S2Component);
	});

	it('should call the next button when clicked', () => {
		const { getByText, history } = renderWithRouter(
			<S2CreateAccount
				user={{
					first_name: 'Vanessa',
					last_name: 'Staneck',
					job_title: 'manager',
					org_name: 'kansha',
					org_name: 'less than 20',
					industry: 'accounting',
				}}
			/>,
		);

		const nextButton = getByText(/Next/i);
		fireEvent.click(nextButton);
		expect(history.location.pathname).toBe('/onboarding/step-4');
	});

	it('it displays org size question', () => {
		const { getByText, getAllByText } = render(S2Component);
		getByText(/How big is your organization?/i);
		getByText(/less than 20/i);
		getByText(/21 to 100/i);
		getByText(/over 100/i);
	});
});

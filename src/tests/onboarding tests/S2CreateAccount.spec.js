import React from 'react';
import { fireEvent, cleanup, wait } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'mutationobserver-shim';
import S2CreateAccount from '../../components/Onboarding/S2CreateAccount';

import { renderWithRouter } from '../utils';

const user = {
	first_name: '',
	last_name: '',
	job_title: '',
	org_name: '',
	industry: '',
	company_size: '',
};

afterEach(cleanup);

describe.skip('S2', () => {
	it('renders without crashing', async () => {
		renderWithRouter(<S2CreateAccount user={user} />);
	});

	it('should call the next button when clicked', async () => {
		const { getByText, history } = renderWithRouter(
			<S2CreateAccount user={user} />,
		);

		const nextButton = getByText(/Next/i);
		fireEvent.click(nextButton);
		await wait(() => {
			expect(history.location.pathname).toBe('/onboarding/step-4');
		});
	});

	it('it displays org size question', async () => {
		const { getByText, getAllByText } = renderWithRouter(
			<S2CreateAccount user={user} />,
		);
		getByText(/How big is your organization?/i);
		getByText(/less than 20/i);
		getByText(/21 - 100/i);
		getByText(/over 100/i);
	});
});

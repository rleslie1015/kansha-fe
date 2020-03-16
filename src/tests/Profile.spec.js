import React from 'react';
import '@testing-library/jest-dom';
import mockAxios from 'axios';
import { wait } from '@testing-library/react';
import { Profile } from '../components/Profile';
import { renderWithRouterAndRedux } from './utils';

describe('<Profile />', () => {
	mockAxios.get.mockImplementation(() =>
		Promise.resolve({
			data: {
				peer: {
					id: 1,
					first_name: 'Test',
					last_name: 'User',
					department: 'x',
					profile_picture: 'https://fake.image',
					job_title: 'CEO',
					user_type: 'admin',
					org_id: 3,
					org_name: "Kevin's Funhouse",
					rec: [
						{
							id: 20,
							recipient: 7,
							sender: 1,
							message: 'Hayyyy',
							date: '2019-12-31T00:00:00.000Z',
							badge_id: 1,
							org_id: 3,
							first_name: 'Bruce',
							last_name: 'Banner',
							profile_pic: 'https://fake.image',
						},
					],
				},
			},
		}),
	);
	it('it should find a container in the profile', () => {
		return wait(() => {
			const { container } = renderWithRouterAndRedux(<Profile />, {
				route: '/profile/1',
			});
			expect(container).toBeInTheDocument();
		});
	});
});

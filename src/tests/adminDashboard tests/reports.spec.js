import React from 'react';
import { cleanup, wait } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-canvas-mock';
import ReportsPage from '../../components/AdminDashboard/AdminDashboard';
import { renderWithRouterAndRedux } from '../utils';
import mockAxios from 'axios';

afterEach(cleanup);

describe('Reports', () => {
	mockAxios.get.mockImplementation(url => {
		switch (url) {
			case '/reports/range?time=weeks':
				return Promise.resolve({
					data: {
						count: 5,
						results: {
							Saturday: 0,
							Friday: 0,
							Thursday: 0,
							Wednesday: 0,
							Tuesday: 0,
							Monday: 5,
							Sunday: 0,
						},
					},
				});
			case '/reports/top?type=sender&limit=5&time=weeks':
				return Promise.resolve({
					data: {
						count: 5,
						employees: [
							{
								first_name: 'Kevin',
								last_name: 'Smith',
								sender: 4,
								profile_picture:
									'https://lh3.googleusercontent.com/a-/AOh14GhcGzXoKjtH51pnoKbaUvz5ml2bDBvSduG-bhYL-Q',
								count: '5',
							},
						],
					},
				});
			case '/reports/top?type=recipient&limit=5&time=weeks':
				return Promise.resolve({
					data: {
						count: 5,
						employees: [
							{
								first_name: 'Thor',
								last_name: 'Odinson',
								recipient: 6,
								profile_picture:
									'https://kansha-bucket.s3-us-west-1.amazonaws.com/avatarblank.png',
								count: '2',
							},
						],
					},
				});
			default:
				return Promise.resolve({ data: {} });
		}
	});
	it('renders without crashing', async () => {
		await wait(() => {
			const { getByText } = renderWithRouterAndRedux(<ReportsPage />);
			const overview = getByText(/Overview/);
			expect(overview).toBeInTheDocument();
		});
	});

	it('displays header text', async () => {
		await wait(() => {
			const { getByText, getAllByText } = renderWithRouterAndRedux(
				<ReportsPage />,
			);
			getByText(/Overview/i);
			getAllByText(/Recognition/i);
			getAllByText(/Participation/i);
			getByText(/Most Thanked/i);
			getByText(/Most Thankful/i);
		});
	});
});

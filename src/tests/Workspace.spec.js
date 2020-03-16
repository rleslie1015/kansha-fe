import React from 'react';
import { wait, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import mockAxios from 'axios';

import Workspace from '../components/Workspace';
import { renderWithRouterAndRedux } from './utils';

describe('Workspace', () => {
	mockAxios.get.mockImplementation(() =>
		Promise.resolve({
			data: {
				count: 1,
				employees: [
					{
						id: 4,
						first_name: 'Test',
						last_name: 'User',
						profile_picture: 'https://fake.image',
						job_title: 'CEO',
						user_type: 'admin',
						department: 'x',
						org_name: "Kevin's Funhouse",
					},
				],
			},
		}),
	);
	it('should find word Workspace on page', async () => {
		await wait(() => {
			const { getByText } = renderWithRouterAndRedux(<Workspace />);
			getByText(/Workspace/);
		});
	});

	it('should change input', async () => {
		await wait(() => {
			const { container } = renderWithRouterAndRedux(<Workspace />);
			const input = container.querySelector('input');
			expect(input.value).toBe('');
			fireEvent.change(input, { target: { value: 'Test' } });
			expect(input.value).toBe('Test');
		});
	});

	it('should call backend on input change', async () => {
		await wait(() => {
			const { container } = renderWithRouterAndRedux(<Workspace />);
			const input = container.querySelector('input');
			fireEvent.change(input, { target: { value: 'Test' } });
			expect(mockAxios.get).toHaveBeenCalledWith(
				'/employees/organizations?search=Test',
			);
		});
	});
});

import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, wait, cleanup } from '@testing-library/react';

import { renderWithRouterAndRedux } from './utils';
import WorkspaceCard from '../components/Workspace/WorkspaceCard';

afterEach(cleanup);

const profile = {
	id: 1,
	first_name: 'Test',
	last_name: 'User',
	profile_picture: 'http://fake.image',
};

describe('Workspace Card', () => {
	it('should find an avatar in the workspace card', () => {
		const { container } = renderWithRouterAndRedux(
			<WorkspaceCard profile={profile} />,
		);
		const image = container.querySelector('img');

		expect(image).toBeInTheDocument();
	});

	it('should open a modal when send button clicked', async () => {
		const { container } = renderWithRouterAndRedux(
			<WorkspaceCard profile={profile} />,
		);
		const send = container.querySelector('button');
		fireEvent.click(send);
		await wait(() => {
			const modal = container.querySelector('.modal');
			expect(modal).toBeInTheDocument();
		});
	});

	it('should navigate to profile when profile button clicked', async () => {
		const { container, history } = renderWithRouterAndRedux(
			<WorkspaceCard profile={profile} />,
		);
		const [, profileBtn] = container.querySelectorAll('button');
		fireEvent.click(profileBtn);
		expect(history.location.pathname).toBe('/profile/1');
	});
});

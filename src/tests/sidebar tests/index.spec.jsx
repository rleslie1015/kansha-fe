import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent } from '@testing-library/react';
import SideBar from '../../components/SideBar';
import { renderWithRouterAndRedux, testAdminUser } from '../utils';

describe('SideBar', () => {
	it('should render', () => {
		const { container } = renderWithRouterAndRedux(<SideBar />);
		expect(container).toBeInTheDocument();
	});

	it('should expand when hamburger clicked', () => {
		const { container } = renderWithRouterAndRedux(<SideBar />);
		const sidebar = container.querySelector('.side-nav');
		const hamburger = container.querySelector('.hamburger');
		expect(sidebar.classList.contains('is-open')).toBe(false);
		fireEvent.click(hamburger);
		expect(sidebar.classList.contains('is-open')).toBe(true);
	});

	it('should go to workspace when first icon clicked', () => {
		const { container, history } = renderWithRouterAndRedux(<SideBar />);
		const link = container.querySelector('a');
		expect(history.location.pathname).toBe('/');
		fireEvent.click(link);
		expect(history.location.pathname).toBe('/workspace');
	});

	it('should go to the admin dashboard if logged in as admin', () => {
		const { container, history } = renderWithRouterAndRedux(<SideBar />, {
			store: testAdminUser,
		});
		const link = container.querySelector('a');
		expect(history.location.pathname).toBe('/');
		fireEvent.click(link);
		expect(history.location.pathname).toBe('/dashboard');
	});
});

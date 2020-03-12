import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ReportsPage from '../../components/AdminDashboard/AdminDashboard';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { renderWithRouterAndRedux } from '../testUtils';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

afterEach(cleanup);

describe('Reports', () => {
	it('renders without crashing', () => {
		let initialState = {
			feed: { feed: [{ recipient: 2, message: 'Hello' }] },
		};

		renderWithRouterAndRedux(<ReportsPage />, initialState);
	});

	it('matches snapshot', () => {
		let initialState = {
			feed: { feed: [{ recipient: 2, message: 'Hello' }] },
		};
		const tree = renderer.create(
			renderWithRouterAndRedux(<ReportsPage />, initialState),
		);
		expect(tree.toJSON()).toMatchSnapshot();
	});

	it('displays header text', () => {
		let initialState = {
			feed: { feed: [{ recipient: 2, message: 'Hello' }] },
		};
		const { getByText } = renderWithRouterAndRedux(
			<ReportsPage />,
			initialState,
		);
		getByText(/Overview/i);
		getByText(/Recognition/i);
		getByText(/Participation/i);
		getByText(/Most Thanked/i);
		getByText(/Most Thankful/i);
	});
});

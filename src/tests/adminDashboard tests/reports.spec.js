import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ReportsPage from '../../components/AdminDashboard/AdminDashboard';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { renderWithRouterAndRedux } from '../testUtils';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

let ReportsComponent = (
	<BrowserRouter>
		<ReportsPage />
	</BrowserRouter>
);
afterEach(cleanup);

describe('Reports', () => {
	const mockStore = configureStore();
	let store;

	it('renders without crashing', () => {
		store = mockStore({ feed: { feed: [] } });

		renderWithRouterAndRedux(
			<Provider store={store}>{ReportsComponent}</Provider>,
		);
	});

	it('matches snapshot', () => {
		const tree = renderer.create(
			renderWithRouterAndRedux(
				<Provider store={store}>{ReportsComponent}</Provider>,
			),
		);
		expect(tree.toJSON()).toMatchSnapshot();
	});

	it('displays header text', () => {
		const { getByText } = render(
			<Provider store={store}>{ReportsComponent}</Provider>,
		);
		getByText(/Overview/i);
		getByText(/Recognition/i);
		getByText(/Participation/i);
		getByText(/Most Thanked/i);
		getByText(/Most Thankful/i);
	});
});

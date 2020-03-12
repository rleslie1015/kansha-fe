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
		renderWithRouterAndRedux(<ReportsPage />);
	});

	it('matches snapshot', () => {
		const tree = renderer.create(renderWithRouterAndRedux(<ReportsPage />));
		expect(tree.toJSON()).toMatchSnapshot();
	});

	it('displays header text', () => {
		const { getByText } = renderWithRouterAndRedux(<ReportsPage />);
		getByText(/Overview/i);
		getByText(/Recognition/i);
		getByText(/Participation/i);
		getByText(/Most Thanked/i);
		getByText(/Most Thankful/i);
	});
});

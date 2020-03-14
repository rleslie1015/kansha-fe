import React from 'react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reduxReducer } from '../../store';

export const renderWithRouterAndRedux = (
	ui,
	{
		route = '/',
		history = createMemoryHistory({ initialEntries: [route] }),
		store = createStore(reduxReducer, applyMiddleware(thunk)),
	} = {},
) => {
	const Wrapper = ({ children }) => (
		<Provider store={store}>
			<Router history={history}>{children}</Router>
		</Provider>
	);
	return {
		...render(ui, { wrapper: Wrapper }),
		history,
		store,
	};
};

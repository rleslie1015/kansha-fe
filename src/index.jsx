import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { reduxReducer } from './store';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import './SCSS/main.scss';
import { App } from './App';
import { Auth0Provider } from "@auth0/auth0-react";

const middleware = compose(applyMiddleware(thunk), applyMiddleware(logger), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const reduxStore = createStore(reduxReducer, middleware);

ReactDOM.render(
	// <Auth0Provider
	// 	domain="kansha-rewards.us.auth0.com"
	// 	clientId="Ox5L5HjEARNV3mlP7n26Vl5fPh7VMk7u"
	// 	redirectUri={window.location.origin}>
		<Provider store={reduxStore}>
			<Router>
				<App />
			</Router>
		</Provider>
		,
	// </Auth0Provider>,
	document.getElementById('root'),
);

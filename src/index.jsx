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

const middleware = compose(applyMiddleware(thunk), applyMiddleware(logger));
const reduxStore = createStore(reduxReducer, middleware);

ReactDOM.render(
	<Provider store={reduxStore}>
		<Router>
			<App />
		</Router>
	</Provider>,
	document.getElementById('root'),
);

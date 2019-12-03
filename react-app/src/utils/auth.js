import auth0 from 'auth0-js';
import jwtDecode from 'jwt-decode';
import {
	USER_AUTH_SUCCESS,
	USER_AUTH_FAILURE,
} from '../store/actions/user-actions';
const LOGIN_SUCCESS_PAGE = '/home';
const LOGIN_FAILURE_PAGE = '/';

export default class Auth {
	auth0 = new auth0.WebAuth({
		domain: process.env.REACT_APP_AUTH_DOMAIN,
		clientID: process.env.REACT_APP_CLIENT_ID,
		redirectUri: `${process.env.REACT_APP_REDIRECT_URI_BASE}/auth`,
		audience: `https://${process.env.REACT_APP_AUTH_DOMAIN}/userinfo`,
		responseType: 'token id_token',
		scope: 'openid profile',
	});

	constructor() {
		this.login = this.login.bind(this);
	}

	login() {
		this.auth0.authorize();
	}

	async handleAuthentication(dispatch) {
		await this.auth0.parseHash((err, authResults) => {
			if (authResults && authResults.accessToken && authResults.idToken) {
				let expiresAt = JSON.stringify(
					authResults.expiresIn * 1000 + new Date().getTime(),
				);
				localStorage.setItem('access_token', authResults.accessToken);
				localStorage.setItem('id_token', authResults.idToken);
				localStorage.setItem('expires_at', expiresAt);
				window.location.hash = '';
				window.location.pathname = LOGIN_SUCCESS_PAGE;
				dispatch({ type: USER_AUTH_SUCCESS });
			} else if (err) {
				window.location.pathname = LOGIN_FAILURE_PAGE;
				console.log(err)
				dispatch({ type: USER_AUTH_FAILURE });
			}
		});
	}

	isAuthenticated() {
		let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
		return new Date().getTime() < expiresAt;
	}

	logout() {
		localStorage.removeItem('access_token');
		localStorage.removeItem('id_token');
		localStorage.removeItem('expires_at');
		window.location.pathname = LOGIN_FAILURE_PAGE;
	}

	getProfile() {
		if (localStorage.getItem('id_token')) {
			return jwtDecode(localStorage.getItem('id_token'));
		} else {
			return {};
		}
	}
}

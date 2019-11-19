import auth0 from 'auth0-js';
import jwtDecode from 'jwt-decode';

const LOGIN_SUCCESS_PAGE = '/home';
const LOGIN_FAILURE_PAGE = '/';

export default class Auth {
	auth0 = new auth0.WebAuth({
		domain: 'kansha.auth0.com',
		clientID: process.env.REACT_APP_CLIENT_ID,
		redirectUri: process.env.REACT_APP_REDIRECT_URI,
		audience: 'https://kansha.auth0.com/userinfo',
		responseType: 'token id_token',
		scope: 'openid profile',
	});

	constructor() {
		this.login = this.login.bind(this);
	}

	login() {
		this.auth0.authorize();
	}

	handleAuthentication() {
		this.auth0.parseHash((err, authResults) => {
			if (authResults && authResults.accessToken && authResults.idToken) {
				let expiresAt = JSON.stringify(
					authResults.expiresIn * 1000 + new Date().getTime(),
				);
				localStorage.setItem('access_token', authResults.accessToken);
				localStorage.setItem('id_token', authResults.idToken);
				localStorage.setItem('expires_at', expiresAt);
				window.location.hash = '';
				window.location.pathname = LOGIN_SUCCESS_PAGE;
				console.log(authResults.accessToken);
			} else if (err) {
				window.location.pathname = LOGIN_FAILURE_PAGE;
				console.log(err);
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

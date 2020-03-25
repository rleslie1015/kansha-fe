import auth0 from 'auth0-js';

export default class Auth {
	auth0 = new auth0.WebAuth({
		domain: process.env.REACT_APP_AUTH_DOMAIN,
		clientID: process.env.REACT_APP_CLIENT_ID,
		redirectUri: process.env.REACT_APP_REDIRECT_URI_BASE,
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

	handleAuthentication(cb) {
		return this.auth0.parseHash((err, authResults) => {
			if (authResults && authResults.accessToken && authResults.idToken) {
				let expiresAt = JSON.stringify(
					authResults.expiresIn * 1000 + new Date().getTime(),
				);
				localStorage.setItem('access_token', authResults.accessToken);
				localStorage.setItem('id_token', authResults.idToken);
				localStorage.setItem('expires_at', expiresAt);
				window.location.hash = '';
				window.location.reload();
				cb();
			} else if (err) {
				console.log(err);
				cb(err);
			}
		});
	}

	isAuthenticated() {
		let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
		return new Date().getTime() < expiresAt;
	}
}

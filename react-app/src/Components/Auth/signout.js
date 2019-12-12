export const signout = () => {
	localStorage.removeItem('access_token');
	localStorage.removeItem('id_token');
	localStorage.removeItem('expires_at');
	window.location.href = 
		`https://${process.env.REACT_APP_AUTH_DOMAIN}/v2/logout?\
		client_id=${process.env.REACT_APP_CLIENT_ID}&\
		returnTo=${process.env.REACT_APP_REDIRECT_URI_BASE}`;
};

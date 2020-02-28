import { axiosWithAuth } from '../../utils/axiosWithAuth';

export const ORG_UPDATE_LOGO_START = 'ORG_UPDATE_LOGO_START';
export const ORG_UPDATE_LOGO_SUCCESS = 'ORG_UPDATE_LOGO_SUCCESS';
export const ORG_UPDATE_LOGO_FAILURE = 'ORG_UPDATE_LOGO_FAILURE';
export const ORG_UPDATE_LOGO_BAD_CONTENT =
	'ORG_UPDATE_LOGO_BAD_CONTENT'; /* <- for when users attempt to upload bad file types */

/* this handles a user uploading a profile photo */
export const uploadLogo = (id, data) => dispatch => {
	dispatch({ type: ORG_UPDATE_LOGO_START });
	axiosWithAuth()
		.put(`/organizations/${id}`, data)
		.then(({ data: { url } }) =>
			/* returned url will be placed ins tate */
			dispatch({ type: ORG_UPDATE_LOGO_SUCCESS, payload: url }),
		)
		.catch(err => {
			console.log(err);
			dispatch({ type: ORG_UPDATE_LOGO_FAILURE, payload: err });
		});
};

export const uploadBadContent = (badType, types) => dispatch => {
	let payload = { badType, types };
	dispatch({ type: ORG_UPDATE_LOGO_BAD_CONTENT, payload });
};

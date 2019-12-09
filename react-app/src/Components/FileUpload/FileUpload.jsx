import React from 'react';
import { connect } from 'react-redux';
import {
	uploadPicture,
	uploadBadContent,
} from '../../store/actions/user-actions';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	input: {
		opacity: 0,
		borderRadius: '100%',
		width: '100%',
		position: 'absolute',
		top: '0',
		left: '0',
		height: '100%',
		cursor: 'pointer',
	},
}));

const imageTypes = types => {
	return types.map(type => `image/${type}`);
};

export const FileUpload = connect(({ user }) => ({ ...user }), {
	uploadPicture,
	uploadBadContent,
})(({ uploadPicture, uploadBadContent, uploadError }) => {
	const classes = useStyles();

	const HandleUpload = e => {
		const file = e.target.files[0];
		const allowedImageTypes = imageTypes(['png', 'jpeg', 'gif']);
		if (allowedImageTypes.includes(file.type)) {
			const data = new FormData();
			data.append('image', file);
			uploadPicture(data);
		} else {
			uploadBadContent(file.type, allowedImageTypes);
		}
    };

	return (
		<input
			className={classes.input}
			onChange={HandleUpload}
			type="file"></input>
	);
});

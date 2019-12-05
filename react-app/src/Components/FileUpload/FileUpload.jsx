import React, { useState } from 'react';
import { connect } from 'react-redux';
import { uploadPicture } from '../../store/actions/user-actions';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	input: {
        opacity: 0,
        borderRadius: '100%',
        width: '100%',
        position: "absolute",
        top: '0',
        left: '0',
        height: '100%',
        cursor: 'pointer',
	},
}));

export const FileUpload = connect(() => ({}), { uploadPicture })(({ uploadPicture }) => {
    const classes = useStyles();

    const HandleUpload = e => {
        console.log(e.target.files[0])
        const data = new FormData();
        data.append('image', e.target.files[0])  
        uploadPicture(data) 
    }

	return <input className={classes.input} onChange={HandleUpload} type="file"></input>;
});

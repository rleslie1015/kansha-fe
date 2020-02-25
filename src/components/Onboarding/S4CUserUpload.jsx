//bulk user account creation component
import React, { useEffect, useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

import {ReactComponent as CloudUpload} from '../../assets/cloud-upload.svg';

function S4CUserUpload() {
	const [error, setError] = useState('');
	const [file, setFile] = useState(null);

	const onDrop = useCallback(acceptedFiles => {
		acceptedFiles.forEach(file => {
			if(file.type === 'text/csv'){
				const reader = new FileReader();

			reader.onabort = () => setError('file reading was aborted');
			reader.onerror = () => setError('file reading has failed');
			reader.onload = () => {
				const binaryStr = reader.result;
				setFile(file);
			};
			reader.readAsArrayBuffer(file);	
			} else {
				setError('Please choose a CSV file.');
			}
		});
	}, []);

	
	const { getRootProps, getInputProps } = useDropzone({onDrop});

	return (
		<div>
			<div className="bulk-upload-container">
				<h2 className="bulk-upload-title">Upload your spreadsheet.</h2>
				<div {...getRootProps({ className: 'dropzone' })}>
					<input {...getInputProps()} />
					<CloudUpload/>
					<p>Drag and drop file or <span>browse</span></p>
				</div>
				<div className="file-preview">{file?.path} </div>
				<div>{file && <button>Upload</button>}</div>
				<div>{error}</div>
			</div>
		</div>
	);
}
export default S4CUserUpload;

import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useDropzone } from 'react-dropzone';
import { useHistory } from 'react-router-dom';

import { axiosWithAuth } from '../../utils/axiosWithAuth';
import { ReactComponent as CloudUpload } from '../../assets/cloud-upload.svg';

function S4CUserUpload({ user }) {
	let history = useHistory();

	const [error, setError] = useState('');
	const [file, setFile] = useState(null);

	const handleSubmit = e => {
		e.preventDefault();
		const data = new FormData();
		data.append('bulkupload', file);

		axiosWithAuth()
			.post('/csv', data)
			.then(response => {
				console.log(response);
				setFile(null);
				setError(response.data.message)
			})
			.catch(error => {
				console.log(error.response);
			});		
	}

	const handleNext = () => {
		history.push("/onboarding/step-6");
	}

	const onDrop = useCallback(acceptedFiles => {
		acceptedFiles.forEach(file => {
			if (file.type === 'text/csv') {
				const reader = new FileReader();
				reader.onabort = () => setError('file reading was aborted');
				reader.onerror = () => setError('file reading has failed');
				reader.onload = () => {
					// const binaryStr = reader.result;
					setFile(file);

				};
				reader.readAsArrayBuffer(file);
			} else {
				setError('Please choose a CSV file.');
			}
		});
	}, []);

	const { getRootProps, getInputProps } = useDropzone({ onDrop });

	return (
		<div className="bulk-upload-container">
			<h2 className="bulk-upload-title">Upload your spreadsheet.</h2>
			<div className="bulk-template-download">
				<Link to="/files/bulk_employee_upload_template.csv" target='_blank' download> <p>Download sample format</p></Link>
			</div>
			<div {...getRootProps({ className: 'dropzone' })}>
				<input {...getInputProps()} />
				<CloudUpload className='AddBulkIcon'/>
				<p>
					Drag and drop file or <span>browse</span>
				</p>
			</div>
			<div className="file-preview">{file?.path} </div>
			<div>{file && <button onClick={handleSubmit}>Upload</button>}</div>
			<div>{error}</div>

			
				<button onClick={handleNext}>Next</button>
			

			<div className="step-p-container">
				<span className="previousarrow">
					<i class="fas fa-arrow-left" />
					<Link to="/onboarding/step-4">
						<p>Previous step</p>
					</Link>
				</span>
			</div>
		</div>
	);
}
export default S4CUserUpload;

import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useDropzone } from 'react-dropzone';

import { axiosWithAuth } from '../../utils/axiosWithAuth';
import { ReactComponent as CloudUpload } from '../../assets/cloud-upload.svg';

function BulkUser({ user }) {
	const [error, setError] = useState('');
	const [file, setFile] = useState(null);
	const [userArray, setUserArray] = useState([]);

	const handleSubmit = e => {
		e.preventDefault();
		const data = new FormData();
		data.append('bulkupload', file);

		axiosWithAuth()
			.post('/csv', data)
			.then(response => {
				setUserArray(response.data.userArray);
				setFile(null);
				setError(response.data.message);
			})
			.catch(error => {
				console.log(error.response);
			});
	};

	const onDrop = useCallback(acceptedFiles => {
		acceptedFiles.forEach(file => {
			if (file.name.substr(file.name.length - 3) === 'csv') {
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
				<Link
					to="/files/bulk_employee_upload_template.csv"
					target="_blank"
					download>
					{' '}
					<p>Download sample format</p>
				</Link>
			</div>
			<div {...getRootProps({ className: 'dropzone' })}>
				<input {...getInputProps()} />
				<CloudUpload />
				<p>
					Drag and drop file or <span>browse</span>
				</p>
			</div>
			<div className="file-preview">{file?.path} </div>
			<div>
				{file && (
					<button
						className="user-upload-buttons"
						onClick={handleSubmit}>
						Upload
					</button>
				)}
			</div>
			{userArray[0] && (
				<>
					<br />
					<br /> <h6>{error}</h6>
					<div className="bulk-success-container-names">
						<table>
							<tr>
								<th>First name</th>
								<th>Last name</th>
								<th>Email</th>
							</tr>
							{userArray.map(person => {
								return (
									<tr>
										<td>{person['first_name']}</td>
										<td>{person['last_name']}</td>
										<td>{person['email']}</td>
									</tr>
								);
							})}
						</table>
					</div>
				</>
			)}

			<div className="step-p-container">
				<span className="previousarrow">
					<i class="fas fa-arrow-left" />
					<Link to="/add-user">
						<p>Previous Page</p>
					</Link>
				</span>
			</div>
		</div>
	);
}
export default BulkUser;

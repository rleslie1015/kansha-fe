import React, { useEffect } from 'react';
import { axiosWithAuth } from '../../../utils/axiosWithAuth';

function MostRecog() {
	useEffect(() => {
		axiosWithAuth()
			.get('/reports/topemployees?time=years')
			.then(res => {
				// console.log(res);
			})
			.catch(err => {
				console.log(err);
			});
	}, []);
	return (
		<div>
			<h1>andrew was here</h1>
		</div>
	);
}
export default MostRecog;

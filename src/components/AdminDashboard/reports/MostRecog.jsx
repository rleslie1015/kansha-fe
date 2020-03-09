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
	return <div></div>;
}
export default MostRecog;

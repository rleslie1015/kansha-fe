import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from '../../../utils/axiosWithAuth';

function MostRecog() {
	const [filter, setFilter] = useState('');
	const [rank, setRank] = useState([]);

	useEffect(() => {
		// setFilter('days');

		axiosWithAuth()
			.get(`/reports/topemployees?time=days`)
			.then(res => {
				// console.log(res);
				setRank(res.data);
				console.log(rank, 'Rank');
				console.log(res.data, 'res.data');
			})
			.catch(err => {
				console.log(err);
			});
	}, []);

	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		try {
	// 			setFilter('days');
	// 			const { data } = await axiosWithAuth().get(
	// 				`/reports/topemployees?time=${filter}`,
	// 			);
	// 			await setRank(data);
	// 			console.log(data, 'data');
	// 			console.log('this is rank', rank);
	// 		} catch (err) {
	// 			console.error(err);
	// 		}
	// 	};
	// 	fetchData();
	// }, [filter]);

	return (
		<div>
			<h1>andrew was here</h1>
		</div>
	);
}
export default MostRecog;

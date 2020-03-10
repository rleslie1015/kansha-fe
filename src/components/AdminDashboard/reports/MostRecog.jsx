import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from '../../../utils/axiosWithAuth';
import heart from '../../../assets/heart.png';

function MostRecog() {
	const [filter, setFilter] = useState('weeks');
	const [rank, setRank] = useState([]);
	const [count, setCount] = useState();

	console.log(rank, 'this is the rank');
	console.log(filter, 'filter');

	useEffect(() => {
		axiosWithAuth()
			.get(`/reports/top?type=recipient&limit=5&time=${filter}`)
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

import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from '../../../utils/axiosWithAuth';

import RecogList from './RecogList';
import LimitDropdown from './LimitDropdown';

function LeadershipBoard(props) {
	const [rank, setRank] = useState([]);
	const [count, setCount] = useState(0);
	const [limit, setLimit] = useState(5);

	const handleLimit = e => {
		setLimit(e);
	};

	useEffect(() => {
		axiosWithAuth()
			.get(
				`/reports/top?type=${props.type}&limit=${limit}&time=${props.filter}`,
			)
			.then(res => {
				setRank(res.data.employees);
				setCount(res.data.count);
			})
			.catch(err => {
				console.log(err);
			});
	}, [props.type, props.filter, limit]);

	return (
		<div className="most-recog-container">
			<div className="most-recog-title-container">
				<h3>{props.title}</h3>
				<LimitDropdown limit={limit} handleLimit={handleLimit} />
			</div>

			<RecogList rank={rank} count={count} />
		</div>
	);
}
export default LeadershipBoard;

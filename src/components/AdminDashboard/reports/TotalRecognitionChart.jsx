import React, { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { axiosWithAuth } from '../../../utils/axiosWithAuth';

const TotalRecognitionChart = () => {
	useEffect(() => {
		axiosWithAuth()
			.get('/reports/engagement')
			.then(res => {
				console.log(res);
				setPercentThanked(res.data.percentThanked);
			})
			.catch(error => {
				console.log(error);
			});
	}, []);

	const [percentThanked, setPercentThanked] = useState();

	const percentUnthanked = 100 - percentThanked;

	const data = {
		labels: ['Percent Not Thanked', 'Percent Thanked'],
		datasets: [
			{
				data: [percentUnthanked, percentThanked],
				backgroundColor: [
					'rgba(201, 23, 87, 0.15)',
					'rgba(201, 23, 87, 1)',
				],
				hoverBackgroundColor: [
					'rgba(201, 23, 87, 0.15)',
					'rgba(201, 23, 87, 1)',
				],
			},
		],
	};
	const options = {
		aspectRatio: 1,
		responsive: true,
		cutoutPercentage: 90,
		legend: false,
	};

	return (
		<div className="doughnut">
			<h1>Participation</h1>
			<h3 className="doughnut-text">
				{Math.round(percentThanked)}% *Participation
			</h3>
			<Doughnut data={data} options={options} />
			<h5>*percent of employees who have received thanks</h5>
		</div>
	);
};

export default TotalRecognitionChart;

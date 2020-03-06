import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from '../../../utils/axiosWithAuth';
import { Line } from 'react-chartjs-2';

function TotalRecogGraph() {
	const [graphData, setGraphData] = useState({
		chartData: {
			labels: [
				'January',
				'February',
				'March',
				'April',
				'May',
				'June',
				'July',
				'August',
				'September',
				'October',
				'November',
				'December',
			],
			datasets: [
				{
					label: 'Recognition',
					data: [54, 103, 65, 78, 121, 93, 101, 143, 102, 67, 73, 78],
					borderColor: 'rgb(201,23,87)',
					borderWidth: 3,
					hoverBackgroundColor: 'rgba(255,99,132,0.4)',
					hoverBorderColor: 'rgba(255,99,132,1)',
					fill: false,
					lineTension: 0.1,
				},
			],
		},
	});

	useEffect(() => {
		axiosWithAuth()
			.get('/reports/range?time=years&number=1')
			.then(res => {
				console.log(res, 'range res');
			})
			.catch(err => {
				console.log(err);
			});
	}, []);

	return (
		<div className="Chart">
			<Line
				data={graphData.chartData}
				options={{
					responsive: true,
					maintainAspectRatio: false,
					title: {
						fontSize: 18,
						display: true,
						text: 'Total Organization Recognitions',
					},
					scales: {
						xAxes: [
							{
								gridLines: {
									display: false,
								},
							},
						],
						yAxes: [
							{
								gridLines: {
									display: false,
								},
							},
						],
					},
					elements: {
						point: {
							radius: 0,
						},
					},
				}}
			/>
		</div>
	);
}
export default TotalRecogGraph;

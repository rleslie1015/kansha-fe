import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from '../../../utils/axiosWithAuth';
import { Line } from 'react-chartjs-2';

function TotalRecogGraph() {
	const [graphData, setGraphData] = useState();
	const [labels, setLabels] = useState();

	useEffect(() => {
		axiosWithAuth()
			.get('/reports/range')
			.then(res => {
				setGraphData(Object.values(res.data.results).reverse());
				setLabels(Object.keys(res.data.results).reverse());
			})
			.catch(error => {
				console.log(error);
			});
	}, []);

	const data = {
		labels: labels,
		datasets: [
			{
				data: graphData,
				borderColor: 'rgb(201,23,87)',
				borderWidth: 3,
				hoverBackgroundColor: 'rgba(255,99,132,0.4)',
				hoverBorderColor: 'rgba(255,99,132,1)',
				fill: false,
				lineTension: 0.3,
			},
		],
	};

	return (
		<div className="Chart">
			<h1>Recognition</h1>
			<Line
				data={data}
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
					legend: false,
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

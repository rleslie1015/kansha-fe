import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from '../../../utils/axiosWithAuth';
import { Line } from 'react-chartjs-2';

function TotalRecogGraph({ lineFilter }) {
	const [graphData, setGraphData] = useState([]);
	const [labels, setLabels] = useState([]);

	useEffect(() => {
		axiosWithAuth()
			.get(`/reports/range?time=${lineFilter}`)
			.then(res => {
				setGraphData(Object.values(res.data.results).reverse());
				setLabels(Object.keys(res.data.results).reverse());
			})
			.catch(error => {
				console.log(error);
			});
	}, [lineFilter]);

	const data = {
		labels: labels,
		datasets: [
			{
				data: graphData,
				borderColor: 'rgb(201,23,87)',
				borderWidth: 5,
				hoverBackgroundColor: 'rgba(255,99,132,0.4)',
				hoverBorderColor: 'rgba(255,99,132,1)',
				fill: false,
				lineTension: 0.3,
				borderCapStyle: 'round',
			},
		],
	};

	return (
		<div className="Chart">
			<Line
				data={data}
				options={{
					responsive: true,
					maintainAspectRatio: false,
					title: {
						fontSize: 18,
						display: false,
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
								scaleLabel: {
									display: true,
									labelString: 'Number of Recognitions',
									fontSize: 16,
								},
								ticks: {
									beginAtZero: true,
									stepSize: 1,
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

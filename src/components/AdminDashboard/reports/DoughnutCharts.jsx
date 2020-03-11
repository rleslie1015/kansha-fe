import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../../../utils/axiosWithAuth';
import axios from 'axios';
import TotalRecognitionChart from './TotalRecognitionChart';

const DoughnutCharts = ({ doughnutFilter }) => {
	const [percentThanked, setPercentThanked] = useState();
	const [percentThankful, setPercentThankful] = useState();

	useEffect(() => {
		function getThanked() {
			return axiosWithAuth().get(
				`/reports/engagement?person=recipient&time=${doughnutFilter}`,
			);
		}

		function getThankful() {
			return axiosWithAuth().get(
				`/reports/engagement?person=sender&time=${doughnutFilter}`,
			);
		}

		axios.all([getThanked(), getThankful()]).then(
			axios.spread(function(thanked, thankful) {
				setPercentThanked(thanked.data.percentThanked);
				setPercentThankful(thankful.data.percentThanked);
			}),
		);
	}, [doughnutFilter]);

	const percentUnthanked = 100 - percentThanked;
	const percentUnthankful = 100 - percentThankful;

	const recipientData = {
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

	const senderData = {
		labels: ['Percent Not Thankful', 'Percent Thankful'],
		datasets: [
			{
				data: [percentUnthankful, percentThankful],
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
		<div className="doughnut-charts">
			<TotalRecognitionChart
				percent={percentThankful}
				data={senderData}
				options={options}
				text="Recognitions sent"
			/>
			<TotalRecognitionChart
				percent={percentThanked}
				data={recipientData}
				options={options}
				text="Recognitions received"
			/>
		</div>
	);
};

export default DoughnutCharts;

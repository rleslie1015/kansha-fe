import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const TotalRecognitionChart = ({ data, options, percent, text }) => {
	return (
		<div className="doughnut-container">
			<div className="doughnut">
				<h3 className="doughnut-text">
					{Math.round(percent)}% Participation
				</h3>
				<Doughnut data={data} options={options} />
			</div>
			<h5>{text}</h5>
		</div>
	);
};

export default TotalRecognitionChart;

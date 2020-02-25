import React from 'react';

function ProgressBar() {
	return (
		<>
			<div className="progress-container">
				<progress id="file" value="20" max="100"></progress>
			</div>
		</>
	);
}

export default ProgressBar;

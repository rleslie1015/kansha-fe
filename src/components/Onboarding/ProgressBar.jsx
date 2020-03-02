import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const ProgressBar = props => {
	let location = useLocation();
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		const [page] = location.pathname.match(/\d+/g);
		setProgress(page);
		return () => {};
	}, [location]);
	return <progress value={progress} max="6"></progress>;
};

export default ProgressBar;

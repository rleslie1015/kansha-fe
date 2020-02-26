import React, { useEffect } from 'react';
import Loader from 'react-loader-spinner';

import Auth from '../../utils/auth';

const auth = new Auth();

function Login(props) {
	useEffect(() => {
		console.log(props);
		debugger;
		auth.login();
	}, [props]);

	return (
		<Loader
			type="Rings"
			color="#EE4D71"
			height={100}
			width={100}
			timeout={10000}
		/>
	);
}

export default Login;

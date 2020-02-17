import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import isometric from './images/isometric.png';

export default function WhyKansha() {
	return (
		<div className="root">
			<div>
				<p className="whyKansha">Why Kansha?</p>
			</div>
			<div className="box">
				<p className="textBox">
					Kansha is a workplace recognition tool that allows you to
					publicly recognize your peers with a thank you message,
					badges, and a gift card! Kansha is an easy, fun, effective
					way to show your peers that you appreciate them! Our public
					feed displays all workplace recognition for everyone to see!
				</p>
				<img src={isometric} alt="" className="isometric" />
			</div>
		</div>
	);
}

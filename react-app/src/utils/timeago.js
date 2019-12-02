/* Generates realative time strings */

//accepts any valid Date timestamp string!!
export const timeAgo = timestamp => {
    // get time in milliseconds
    const currentTime = new Date(Date.now()).getTime();
    const eventTime = new Date(timestamp).getTime()

    // get time elapsed in milliseconds
    const elapsedTime = currentTime - eventTime;
    
    // create time units in milliseconds
	const minute = 60 * 1000;
	const hour = minute * 60;
	const day = hour * 24;
	const week = day * 7;
	const month = week * 4;
	const year = day * 365;

	if (elapsedTime < minute) {
		return 'now';
	} else if (elapsedTime < hour) {
		let time = Math.round(elapsedTime / minute);
		return `${time} minute${time > 1 ? 's' : ''} ago`;
	} else if (elapsedTime < day) {
		let time = Math.round(elapsedTime / hour);
		return `${time} hour${time > 1 ? 's' : ''} ago`;
	} else if (elapsedTime < week) {
		let time = Math.round(elapsedTime / day);
		return `${time} day${time > 1 ? 's' : ''} ago`;
	} else if (elapsedTime < month) {
		let time = Math.round(elapsedTime / week);
		return `${time} week${time > 1 ? 's' : ''} ago`;
	} else if (elapsedTime < year) {
		let time = Math.round(elapsedTime / month);
		return `${time} month${time > 1 ? 's' : ''} ago`;
	} else {
		let time = Math.round(elapsedTime / year);
		return `${time} year${time > 1 ? 's' : ''} ago`;
	}
};

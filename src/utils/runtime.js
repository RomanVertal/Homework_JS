export const parseRuntime = (num) => {
	const hour = 60;
	let parseNum;
	if (num % hour === 0) {
		parseNum = `${num / hour}h`;
	} else {
		parseNum = `${Math.floor(num / hour)}h ${num % hour}min`;
	}

	return parseNum;
};

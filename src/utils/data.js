export const parseDate = (data) => {
	const parsed = data.split("-");
	return {
		year: parsed[0],
		month: parsed[0],
		day: parsed[0],
	};
};

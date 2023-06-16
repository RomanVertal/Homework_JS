export const parseRuntime = (mins) => {
	const hours = Math.trunc(mins / 60);
	const minutes = mins % 60;
	return `${hours ? `${hours}h` : ""}${minutes ? `${minutes}min` : ""}`;
};

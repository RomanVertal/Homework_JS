import { createHeader } from "../header";
import { createMovieDetails } from "../movieDetails";

export const renderTopPage = (container) => {
	const { pathname } = window.location;
	const movieDetailsRegex = /\/movie/i;

	container.textContent = "";

	if (movieDetailsRegex.test(pathname)) {
		createMovieDetails(container);
	} else {
		createHeader(container);
	}
};

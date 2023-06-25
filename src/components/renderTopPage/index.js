import { createHeader } from "../header";
import { createMovieDetails } from "../movieDetails";
import { headerOrDetails } from "../wrapper";

export const renderTopPage = (container = undefined) => {
	const realContainer = container || headerOrDetails
	const { pathname } = window.location;
	const movieDetailsRegex = /\/movie/i;

	window.scrollTo({
		top:0,
		behavior: "smooth"
	})
	realContainer.textContent = "";

	if (movieDetailsRegex.test(pathname)) {
		createMovieDetails(realContainer);
	} else {
		createHeader(realContainer);
	}
};

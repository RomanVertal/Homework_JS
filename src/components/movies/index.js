import defaultPoster from "../../../public/images/poster.jpg";
import { updateMoviesState } from "../../api";
import { parseDate } from "../../utils/data";
import { searchToObject } from "../../utils/search";

const template = document.querySelector(".movieItem");

export const createMovie = (movie) => {
	const movieElement = template.content.cloneNode(true);

	movieElement.querySelector("img").src = movie.poster_path;
	movieElement.querySelector("img").onerror = (e) => {
		e.target.src = defaultPoster;
	};
	movieElement.querySelector("a").textContent = movie.title;
	movieElement.querySelector("p").textContent = movie.genres.toString();
	movieElement.querySelector("span").textContent = parseDate(
		movie.release_date
	).year;

	return movieElement;
};

export const createMovies = (container) => {
	const params = window.location.search;
	console.log(searchToObject(params));
	updateMoviesState().then((data) => {
		const movies = data.data;
		const moviesElements = movies.map(createMovie);

		container.innerHTML = "";
		container.append(...moviesElements);
	});
};

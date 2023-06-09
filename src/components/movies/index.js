import defaultPoster from "../../../public/images/poster.jpg";
import { createMovie, updateMoviesState } from "../../api";
import { parseDate } from "../../utils/data";
import { goToMovieDetails } from "../../utils/search";

const template = document.querySelector(".movieItem");

export const createMovieItem = (movie) => {
	const movieElement = template.content.cloneNode(true);

	movieElement.querySelector(".main__content-films-block").dataset.id =
		movie.id;

	movieElement.querySelector("img").src = movie.poster_path;
	movieElement.querySelector("img").onerror = (e) => {
		e.target.src = defaultPoster;
	};
	movieElement.querySelector("a").textContent = movie.title;
	movieElement.querySelector("p").textContent = movie.genres.toString();
	movieElement.querySelector("span").textContent = parseDate(
		movie.release_date
	).year;
	movieElement.querySelector(".nav-btn-menu").innerHTML = "&#8942;";
	movieElement.querySelector(".nav-btn-edit").textContent = "Edit";
	movieElement.querySelector(".nav-btn-delete").textContent = "Delete";

	return movieElement;
};

export const createMovies = (container) => {
	const clickHandler = (e) => {
		const movieCard = e.target.closest("[data-id]");
		if (movieCard) {
			const { id } = movieCard.dataset;
			goToMovieDetails(id);
		}
	};
	container.addEventListener("click", clickHandler);

	updateMoviesState().then((data) => {
		const movies = data.data;

		const moviesElements = movies.map(createMovie);

		container.innerHTML = "";
		container.append(...moviesElements);
	});
};

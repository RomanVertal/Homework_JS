import { createMovie, updateMoviesState } from "../../api";
import { parseDate } from "../../utils/data";
import { makeSafeImage } from "../../utils/img";
import { goToMovieDetails } from "../../utils/search";
import { renderTopPage } from "../renderTopPage";
import { headerOrDetails } from "../wrapper";

const template = document.querySelector(".movieItem");

export const createMovieItem = (movie) => {
	const movieElement = template.content.cloneNode(true);

	movieElement.querySelector(".main__content-films-block").dataset.id =
		movie.id;

	movieElement.querySelector("img").src = movie.poster_path;
	makeSafeImage(movieElement.querySelector("img"));
	// movieElement.querySelector("img").onerror = (e) => {
	// 	e.target.src = defaultPoster;
	// };
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
		const btnDelete = e.target.className === "nav-btn-delete";
		const btnEdit = (e.target.className === "nav-btn-edit");
		
		if (movieCard && !btnDelete && !btnEdit) {
			const { id } = movieCard.dataset;
			goToMovieDetails(id);
			renderTopPage();
		}
	
	};
	container.addEventListener("click", clickHandler);

	updateMoviesState();
};

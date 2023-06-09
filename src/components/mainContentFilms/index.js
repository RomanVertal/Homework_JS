import { moviesList } from "../../api";
import { createDeleteMovieForm } from "../deleteMovie";
import { createEditMovieForm } from "../editMovie";

export const createMainContentFilms = (container) => {
	const mainContentFilms = document.createElement("div");

	mainContentFilms.classList.add("main__content-films");
	container.append(mainContentFilms);

	mainContentFilms.addEventListener("click", (e) => {
		const wrapper = document.querySelector(".wrapper");
		const movieBlock = e.target.closest(".main__content-films-block");
		const idMovie = e.target.closest(".main__content-films-block").dataset.id;

		if (e.target.classList == "nav-btn-edit") {
			const movie = moviesList[idMovie];
			createEditMovieForm(wrapper, movie);
		} else if (e.target.classList == "nav-btn-delete") {
			createDeleteMovieForm(wrapper, idMovie, movieBlock);
		}
	});

	return mainContentFilms;
};

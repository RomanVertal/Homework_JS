import "./style.scss";
import "./style_adaptive.scss";

import { createAddMovieForm } from "./components/addMovieForm";
import { createCountFilms } from "./components/countFilms";
import { createFooter } from "./components/footer";
import { createHeader } from "./components/header";
import { createMoreButton } from "./components/moreMoviesButton";
import { createMovies } from "./components/movies";
import { createNavigation } from "./components/navigation";
import { createWrapper } from "./components/wrapper";
import { createMain } from "./components/main";

export const mainContentFilms = document.createElement("div");

const initApp = () => {

	const wrapper =  createWrapper();

	createHeader(wrapper);	

	const main = createMain()

	createNavigation(main);

	createCountFilms(main);


	mainContentFilms.classList.add("main__content-films");
	main.append(mainContentFilms);

	createMovies(mainContentFilms);

	createMoreButton(main);

	createFooter(wrapper);

	createAddMovieForm(wrapper);

	document.body.append(wrapper);
};

initApp();

const addMovieForm = document.querySelector(".add_movie");
const addMovieButton = document.querySelector(".button_add_movie");
const closeMovieButton = document.querySelector(
	".add_movie__form-button-close"
);

export const toggleAddMovieForm = () => {
	addMovieForm.classList.toggle("hidden_block");
};

addMovieButton.addEventListener("click", toggleAddMovieForm);
closeMovieButton.addEventListener("click", toggleAddMovieForm);

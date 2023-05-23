import "./style.scss";
import "./style_adaptive.scss";

import { asyncFunc } from "./async";
import { createMovies } from "./components/movies";

asyncFunc();

const addMovieForm = document.querySelector(".add_movie");
const addMovieButton = document.querySelector(".button_add_movie");
const closeMovieButton = document.querySelector(
	".add_movie__form-button-close"
);

const toggleAddMovieForm = () => {
	addMovieForm.classList.toggle("hidden_block");
};

addMovieButton.addEventListener("click", toggleAddMovieForm);
closeMovieButton.addEventListener("click", toggleAddMovieForm);

const initApp = () => {
	createMovies();
};

initApp();

import "./style.scss";
import "./style_adaptive.scss";

import { createAddMovieForm } from "./components/addMovieForm";
import { createCountFilms } from "./components/countFilms";
import { createFooter } from "./components/footer";
import { createHeader } from "./components/header";
import { createMain } from "./components/main";
import { createMainContentFilms } from "./components/mainContentFilms";
import { createMoreButton } from "./components/moreMoviesButton";
import { createMovies } from "./components/movies";
import { createNavigation } from "./components/navigation";
import { createWrapper } from "./components/wrapper";

const renderHomepage = (wrapper)=>{

	createHeader(wrapper);

	const main = createMain();

	createNavigation(main);

	createCountFilms(main);

	const mainContentFilms = createMainContentFilms(main);

	createMovies(mainContentFilms);

	createMoreButton(main, mainContentFilms);

	createAddMovieForm(wrapper);

}

const initApp = () => {
	const wrapper = createWrapper();

	


	const {pathName} = window
	const movieDetailsRegex = /\/movies\//i

	
	if(movieDetailsRegex.test(pathName)){
		console.log("hello from details")
	} else renderHomepage(wrapper)


	createFooter(wrapper)

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

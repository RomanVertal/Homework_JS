import { mainContentFilms } from "../..";
import { createMovie, defaultLimit, updateMoviesState } from "../../api";
import { getSearchParams, updateSearchParams } from "../../utils/search";
import { createMovies } from "../movies";


export const createMoreButton = (container) => {
	const moreButtonContainer = document.createElement("div");
	moreButtonContainer.classList.add("main__more-button-container");

	const button = document.createElement("button");
	button.type = "button";
	button.id = "showMore";
	button.innerText = "show more";

	const onClick = () =>{
		const currentLimit = getSearchParams()?.limit || defaultLimit;
		updateMoviesState({limit: currentLimit + defaultLimit}).then((data) => {
			const movies = data.data;

			const moviesElements = movies.map(createMovie);
			console.log(data)

			mainContentFilms.innerHTML = '';
			mainContentFilms.append(...moviesElements);

		})
		
	}

	button.addEventListener("click", onClick);

	moreButtonContainer.append(button);
	container.append(moreButtonContainer);
};

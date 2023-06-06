import defaultPoster from "../../../public/images/poster.jpg";
import { createMovie, updateMoviesState } from "../../api";
import { parseDate } from "../../utils/data";
import { searchToObject } from "../../utils/search";
import { createDeleteMovieForm } from "../deleteMovie";
import { createEditMovieForm } from "../editMovie";

const template = document.querySelector(".movieItem");

export const createMovieItem = (movie) => {
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
	movieElement.querySelector(".nav-btn-edit").innerHTML = '&#8942';
	movieElement.querySelector(".nav-btn-edit").textContent = 'Edit';
	movieElement.querySelector(".nav-btn-delete").textContent = 'Delete';

	const wrapper = document.querySelector(".wrapper");

	const btnDelete = movieElement.querySelector(".nav-btn-delete");

	btnDelete.addEventListener("click", () => {
		createDeleteMovieForm(wrapper);		
	});

	const btnEdit = movieElement.querySelector(".nav-btn-edit");

	btnEdit.addEventListener("click", () => {
		createEditMovieForm(wrapper, movie);
		
	});

	return movieElement;
};

export const createMovies = (container) => {
	
	updateMoviesState().then((data) => {
		const movies = data.data;
		const moviesElements = movies.map(createMovie);

		container.innerHTML = "";
		container.append(...moviesElements);
	});
};

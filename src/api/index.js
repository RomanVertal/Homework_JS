import { createMovieItem } from "../components/movies";
import {
	getSearchParams,
	objToSearch,
	updateSearchParams,
} from "../utils/search";

const baseUrl = "http://localhost:4000/movies";

export const defaultLimit = 10;

export const defaultParams = {
	limit: 10,
	filter: undefined,
	search: undefined,
	sortBy: undefined,
	sortOrder: "dest",
};

export const getMovies = (params) =>
	fetch(`${baseUrl}${objToSearch(params || defaultParams)}`).then((data) =>
		data.json()
	);

export const createMovie = (body) =>
	fetch(baseUrl, {
		method: "POST",
		body,
	}).then((data) => data.json());

export const updateMovie = (body) =>
	fetch(baseUrl, {
		method: "PUT",
		body: JSON.stringify(body),
		headers: {
			"Content-Type": "application/json",
		}
	}).then((data) => data.json());

export const getMovie = (id) => fetch(`${baseUrl}/${id}`);

export const deleteMovie = (id) =>
	fetch(`${baseUrl}/${id}`, {
		method: "DELETE",
	});

export const moviesList = {};

export const updateMoviesState = (params) => {
	if (params) updateSearchParams(params);
	const currentParams = getSearchParams() || defaultParams;
	return getMovies(currentParams).then((data) => {
		data.data.forEach((elem) => {
			moviesList[elem.id] = elem;
		});

		const movies = data.data;
		const moviesElements = movies.map(createMovieItem);

		const moviesContainer = document.querySelector(".main__content-films");

		moviesContainer.innerHTML = "";
		moviesContainer.append(...moviesElements);

		const moviesCountContainer = document.querySelector(".count_films");

		if (moviesCountContainer) {
			moviesCountContainer.textContent = data.totalAmount;
		}

		const showMoreButton = document.querySelector("#showMore");
		console.log(currentParams.limit);

		if (data.totalAmount <= (currentParams.limit || defaultLimit)) {
			showMoreButton.classList.add("hidden");
		} else {
			showMoreButton.classList.remove("hidden");
		}
	});
};

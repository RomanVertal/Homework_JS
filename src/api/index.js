import { objToSearch } from "../utils/search";

const baseUrl = "http://localhost:4000/movies";

const defaultParams = {
	limit: 10,
	filter: undefined,
	search: undefined,
	sortBy: undefined,
	sortOrder: "dest",
};

export const updateMoviesState = (params) => {};

export const getMovies = (params) =>
	fetch(`${baseUrl}${objToSearch(params)}`).then((data) => data.json());

export const createMovie = (body) =>
	fetch(baseUrl, {
		method: "POST",
		body,
	}).then((data) => data.json());

export const updateMovie = (body) =>
	fetch(baseUrl, {
		method: "PUT",
		body,
	}).then((data) => data.json());

export const getMovie = (id) => fetch(`${baseUrl}/${id}`);

export const deleteMovie = (id) =>
	fetch(`${baseUrl}/${id}`, {
		method: "DELETE",
	});

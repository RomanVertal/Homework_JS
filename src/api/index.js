import { getSearchParams, objToSearch, updateSearchParams } from "../utils/search";

const baseUrl = "http://localhost:4000/movies";

export const defaultLimit = 10;

const defaultParams = {
	limit: 10,
	filter: undefined,
	search: undefined,
	sortBy: undefined,
	sortOrder: "dest",
};



export const getMovies = (params) =>
	fetch(`${baseUrl}${objToSearch(params||defaultParams)}`).then((data) => data.json());

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

export const updateMoviesState = (params) => {
	if(params) updateSearchParams(params);
	return getMovies(getSearchParams() || defaultParams)
};
const baseUrl = "http://localhost:4000/movies";

export const getMovies = () => fetch(baseUrl).then((data) => data.json());

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

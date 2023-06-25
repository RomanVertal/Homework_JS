import { defaultLimit, defaultParams, updateMovie, updateMoviesState } from "../../api";
import { getSearchParams } from "../../utils/search";
import { congratulationsEdit, createCongratulationsForm } from "../congratulationsForm";
import { wrapper } from "../wrapper";

export const editMovieBlock = document.createElement("div");

export const onRemoveEditMovieForm = () => {
	document.querySelector(".edit_movie").innerHTML = "";
	document.querySelector(".edit_movie").remove();
};

export const createEditMovieForm = (container, movie) => {
	editMovieBlock.classList.add("edit_movie");
	console.log(movie);
	const editMovieForm = document.createElement("div");
	editMovieForm.classList.add("edit_movie__form");

	const editMovieFormTitle = document.createElement("span");
	editMovieFormTitle.classList.add("edit_movie__form-title");
	editMovieFormTitle.textContent = "EDIT MOVIE";
	editMovieForm.append(editMovieFormTitle);

	const editMovieFormButton = document.createElement("button");
	editMovieFormButton.type = "button";
	editMovieFormButton.classList.add("edit_movie__form-button-close");
	editMovieFormButton.textContent = "✕";
	editMovieForm.append(editMovieFormButton);

	editMovieFormButton.addEventListener("click", onRemoveEditMovieForm);

	const form = document.createElement("form");
	form.action = "";
	form.method = "get";
	form.target = "_self";

	const template = document.querySelector(".addMovieFormItem");

	const title = template.content.cloneNode(true);
	title.querySelector("label").for = "title";
	title.querySelector("label").textContent = "title";
	title.querySelector("input").name = "title";
	title.querySelector("input").type = "text";
	title.querySelector("input").placeholder = "Name";
	title.querySelector("input").classList.add("title");
	title.querySelector("input").value = movie.title;
	form.append(title);

	const releaseDate = template.content.cloneNode(true);
	releaseDate.querySelector("label").for = "release_date";
	releaseDate.querySelector("label").textContent = "Release date";
	releaseDate.querySelector("input").name = "release_date";
	releaseDate.querySelector("input").type = "date";
	releaseDate.querySelector("input").placeholder = "Select Date";
	releaseDate.querySelector("input").classList.add("releaseDate");
	releaseDate.querySelector("input").value = movie.release_date;

	form.append(releaseDate);

	const movieUrl = template.content.cloneNode(true);
	movieUrl.querySelector("label").for = "movie_url";
	movieUrl.querySelector("label").textContent = "Movie url";
	movieUrl.querySelector("input").name = "movie_url";
	movieUrl.querySelector("input").type = "text";
	movieUrl.querySelector("input").placeholder = "https://";
	movieUrl.querySelector("input").classList.add("movieUrl");
	movieUrl.querySelector("input").value = movie.poster_path;
	form.append(movieUrl);

	const rating = template.content.cloneNode(true);
	rating.querySelector("label").for = "rating";
	rating.querySelector("label").textContent = "Rating";
	rating.querySelector("input").name = "rating";
	rating.querySelector("input").type = "text";
	rating.querySelector("input").placeholder = "7.8";
	rating.querySelector("input").classList.add("rating");
	rating.querySelector("input").value = movie.vote_average;

	form.append(rating);

	const genre = template.content.cloneNode(true);
	genre.querySelector("label").for = "genre";
	genre.querySelector("label").textContent = "Genre";
	genre.querySelector("input").name = "genre";
	genre.querySelector("input").type = "text";
	genre.querySelector("input").placeholder = "Select Genre";
	genre.querySelector("input").classList.add("genre");
	genre.querySelector("input").value = movie.genres;

	form.append(genre);

	const runtime = template.content.cloneNode(true);
	runtime.querySelector("label").for = "runtime";
	runtime.querySelector("label").textContent = "Runtime";
	runtime.querySelector("input").name = "runtime";
	runtime.querySelector("input").type = "text";
	runtime.querySelector("input").placeholder = "Minutes";
	runtime.querySelector("input").classList.add("runtime");
	runtime.querySelector("input").value = movie.runtime;

	form.append(runtime);

	const overview = template.content.cloneNode(true);
	overview.querySelector("div").classList.add("add_movie__form-block-overview");
	overview.querySelector("label").for = "overview";
	overview.querySelector("label").textContent = "Overview";
	overview.querySelector("input").remove();
	const overviewTextarea = document.createElement("textarea");
	overviewTextarea.name = "overview";
	overviewTextarea.placeholder = "Movie description";
	overviewTextarea.classList.add("textarea");
	overviewTextarea.value = movie.overview;
	overview.querySelector("div").append(overviewTextarea);
	form.append(overview);

	const formButton = document.createElement("div");
	formButton.classList.add("add_movie__form-button");

	const formButtonReset = document.createElement("button");
	formButtonReset.classList.add("add_movie__form-button-reset");
	formButtonReset.type = "reset";
	formButtonReset.textContent = "Reset";
	formButton.append(formButtonReset);

	const formButtonSubmit = document.createElement("button");
	formButtonSubmit.classList.add("add_movie__form-button-submit");
	formButtonSubmit.type = "button";
	formButtonSubmit.textContent = "Submit";
	formButton.append(formButtonSubmit);

	const handlerUpdateMovie = () => {
			
		movie.title = document.querySelector(".title").value;
		movie.overview = document.querySelector(".textarea").value;
		movie.runtime = +document.querySelector(".runtime").value;
		movie.poster_path = document.querySelector(".movieUrl").value;
		movie.release_date = document.querySelector(".releaseDate").value;
		movie.vote_average = +document.querySelector(".rating").value;
		
		updateMovie(movie).then(()=> {
			onRemoveEditMovieForm();
			createCongratulationsForm(wrapper,congratulationsEdit)
		
		});;
		
		const currentLimit = getSearchParams()?.limit || defaultLimit;
		updateMoviesState({limit: currentLimit});
		
	};

	formButtonSubmit.addEventListener("click", handlerUpdateMovie);

	form.append(formButton);

	editMovieForm.append(form);

	editMovieBlock.append(editMovieForm);

	container.append(editMovieBlock);
};

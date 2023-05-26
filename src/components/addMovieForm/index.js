export const createAddMovieForm = (container) => {
	const addMovieBlock = document.createElement("div");
	addMovieBlock.classList.add("add_movie", "hidden_block");

	const addMovieForm = document.createElement("div");
	addMovieForm.classList.add("add_movie__form");

	const addMovieFormTitle = document.createElement("span");
	addMovieFormTitle.classList.add("add_movie__form-title");
	addMovieFormTitle.textContent = "ADD MOVIE";
	addMovieForm.append(addMovieFormTitle);

	const addMovieFormButton = document.createElement("button");
	addMovieFormButton.type = "button";
	addMovieFormButton.classList.add("add_movie__form-button-close");
	addMovieFormButton.textContent = "✕";
	addMovieForm.append(addMovieFormButton);

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
	form.append(title);

	const releaseDate = template.content.cloneNode(true);
	releaseDate.querySelector("label").for = "release_date";
	releaseDate.querySelector("label").textContent = "Release date";
	releaseDate.querySelector("input").name = "release_date";
	releaseDate.querySelector("input").type = "text";
	releaseDate.querySelector("input").placeholder = "Select Date";
	form.append(releaseDate);

	const movieUrl = template.content.cloneNode(true);
	movieUrl.querySelector("label").for = "movie_url";
	movieUrl.querySelector("label").textContent = "Movie url";
	movieUrl.querySelector("input").name = "movie_url";
	movieUrl.querySelector("input").type = "text";
	movieUrl.querySelector("input").placeholder = "https://";
	form.append(movieUrl);

	const rating = template.content.cloneNode(true);
	rating.querySelector("label").for = "rating";
	rating.querySelector("label").textContent = "Rating";
	rating.querySelector("input").name = "rating";
	rating.querySelector("input").type = "text";
	rating.querySelector("input").placeholder = "7.8";
	form.append(rating);

	const genre = template.content.cloneNode(true);
	genre.querySelector("label").for = "genre";
	genre.querySelector("label").textContent = "Genre";
	genre.querySelector("input").name = "genre";
	genre.querySelector("input").type = "text";
	genre.querySelector("input").placeholder = "Select Genre";
	form.append(genre);

	const runtime = template.content.cloneNode(true);
	runtime.querySelector("label").for = "runtime";
	runtime.querySelector("label").textContent = "Runtime";
	runtime.querySelector("input").name = "runtime";
	runtime.querySelector("input").type = "text";
	runtime.querySelector("input").placeholder = "Minutes";
	form.append(runtime);

	const overview = template.content.cloneNode(true);
	overview.querySelector("div").classList.add("add_movie__form-block-overview");
	overview.querySelector("label").for = "overview";
	overview.querySelector("label").textContent = "Overview";
	overview.querySelector("input").remove();
	const overviewTextarea = document.createElement("textarea");
	overviewTextarea.name = "overview";
	overviewTextarea.placeholder = "Movie description";
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
	formButtonSubmit.type = "submit";
	formButtonSubmit.textContent = "Submit";
	formButton.append(formButtonSubmit);

	form.append(formButton);

	addMovieForm.append(form);

	addMovieBlock.append(addMovieForm);

	container.append(addMovieBlock);
};

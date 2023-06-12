import defaultPoster from "../../../public/images/poster.jpg";
import { getMovie } from "../../api";
import { parseDate } from "../../utils/data";
import { parseRuntime } from "../../utils/runtime";
import { searchToObject } from "../../utils/search";

export const createMovieDetails = (container) => {
	const { id } = searchToObject(window.location.search);
	getMovie(id).then((data) => {
		const movieDetails = document.createElement("div");
		movieDetails.classList.add("movie-details");

		const movieDetailsTop = document.createElement("div");
		movieDetailsTop.classList.add("movie-details-top");
		movieDetails.append(movieDetailsTop);

		const movieDetailsTopTitle = document.createElement("div");
		movieDetailsTopTitle.classList.add("movie-details-top-title");
		movieDetailsTopTitle.innerHTML = "<span>netflix</span>roulette";
		movieDetailsTop.append(movieDetailsTopTitle);

		const movieDetailsMain = document.createElement("div");
		movieDetailsMain.classList.add("movie-details-main");
		movieDetails.append(movieDetailsMain);

		const movieDetailsImage = document.createElement("div");
		movieDetailsImage.classList.add("movie-details-image");
		movieDetailsMain.append(movieDetailsImage);

		const image = document.createElement("img");
		image.src = data.poster_path;
		image.onerror = () => {
			image.src = defaultPoster;
		};
		movieDetailsImage.append(image);

		const movieDetailsInfo = document.createElement("div");
		movieDetailsInfo.classList.add("movie-details-info");
		movieDetailsMain.append(movieDetailsInfo);

		const titleAndRating = document.createElement("div");
		titleAndRating.classList.add("movie-details-title-and-rating");
		movieDetailsInfo.append(titleAndRating);

		const title = document.createElement("div");
		title.classList.add("movie-details-title");
		title.textContent = data.title;
		titleAndRating.append(title);

		const rating = document.createElement("div");
		rating.classList.add("movie-details-rating");
		rating.textContent = data.vote_average;
		titleAndRating.append(rating);

		const genre = document.createElement("div");
		genre.classList.add("movie-details-genre");
		genre.textContent = data.genres;
		movieDetailsInfo.append(genre);

		const yearAndRuntime = document.createElement("div");
		yearAndRuntime.classList.add("movie-details-year-and-rantime");
		movieDetailsInfo.append(yearAndRuntime);

		const year = document.createElement("div");
		year.classList.add("movie-details-year");
		year.textContent = parseDate(data.release_date).year;
		yearAndRuntime.append(year);

		const runtime = document.createElement("div");
		runtime.classList.add("movie-details-runtime");
		runtime.textContent = parseRuntime(data.runtime);
		yearAndRuntime.append(runtime);

		const overview = document.createElement("div");
		overview.classList.add("movie-details-overview");
		overview.textContent = data.overview;
		movieDetailsInfo.append(overview);

		container.prepend(movieDetails);
	});
};

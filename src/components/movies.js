import defaultPoster from "../../public/images/poster.jpg";
import { getMovies } from "../api";
import { parseDate } from "../utils/data";

const container = document.querySelector(".main__content-films");
const template = document.querySelector(".movieItem");
const paginator = document.querySelector(".main__paginator");

const createMovie = (movie) => {
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

	return movieElement;
};

const newCreateMovies = (number) => {
	const newGetMovies = () =>
		fetch(`http://localhost:4000/movies?offset=${number * 10}`).then((data) =>
			data.json()
		);
	const oldMovieElements = document.querySelectorAll(
		".main__content-films-block"
	);
	oldMovieElements.forEach((elem) => {
		elem.remove();
	});
	newGetMovies().then((data) => {
		const movies = data.data;
		const moviesElements = movies.map(createMovie);

		container.append(...moviesElements);
	});
};

const newPaginatorActive = (event) => {
	const paginatorElements = document.querySelectorAll(".paginator_link");
	paginatorElements.forEach((elem) => {
		elem.classList.remove("paginator_link_active");
	});
	event.target.classList.add("paginator_link_active");
};

const createPaginator = (pagesAmount) => {
	const paginatorContainer = document.createElement("div");
	paginatorContainer.classList.add("main__paginator_container");

	for (let i = 0; i < pagesAmount; i++) {
		const paginatorElement = document.createElement("a");
		paginatorElement.href = "#";
		paginatorElement.classList.add("paginator_link");
		paginatorElement.textContent = `${i + 1}`;
		if (i === 0) {
			paginatorElement.classList.add("paginator_link_active");
		}
		paginatorElement.addEventListener("click", (event) => {
			newCreateMovies(i);
			newPaginatorActive(event);
		});
		paginatorContainer.append(paginatorElement);
	}
	paginator.append(paginatorContainer);
};

export const createMovies = () => {
	getMovies().then((data) => {
		const movies = data.data;
		const pagesAmount = data.totalAmount / data.limit;
		createPaginator(pagesAmount);

		const moviesElements = movies.map(createMovie);

		container.append(...moviesElements);
	});
};

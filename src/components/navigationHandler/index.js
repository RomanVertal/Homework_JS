import { updateMoviesState } from "../../api/index";

const sortFilms = (paramOne, paramTwo) => {
	updateMoviesState({ sortBy: paramOne, sortOrder: paramTwo });
};

const filterFilms = (param) => {
	updateMoviesState({ filter: param });
};

export const navigationHandler = (e) => {
	const { target } = e;
	const labels = target.closest("div").querySelectorAll("label");
	const inputs = target.closest("div").querySelectorAll("input");

	if (target.tagName === "SELECT") {
		const sortBy = target.options[target.selectedIndex].value;
		const sortOrder = target.options[target.selectedIndex].dataset.order;
		sortFilms(sortBy, sortOrder);
	} else if (target.tagName === "INPUT" && target.value !== "all") {
		const formData = new FormData(e.currentTarget);

		labels.forEach((elem) => {
			if (elem.htmlFor === target.id) {
				elem.classList.toggle("main__nav-categories_active");
			} else if (elem.htmlFor === "all") {
				elem.classList.remove("main__nav-categories_active");
			}
		});
		inputs.forEach((elem) => {
			if (elem.id === "all") {
				elem.checked = false;
			}
		});

		filterFilms(formData.getAll("genre"));
	} else if (target.tagName === "INPUT" && target.value === "all") {
		labels.forEach((elem) => {
			if (elem.htmlFor === "all") {
				elem.classList.add("main__nav-categories_active");
			} else {
				elem.classList.remove("main__nav-categories_active");
			}
		});
		inputs.forEach((elem) => {
			if (elem.id !== "all") {
				elem.checked = false;
			}
		});

		const url = new URL(window.location);
		url.searchParams.delete("filter");
		window.history.pushState(null, "movie details", url.toString());
		updateMoviesState();
	}
};

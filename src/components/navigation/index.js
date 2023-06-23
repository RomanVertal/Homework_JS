import { navigationHandler } from "../navigationHandler";

export const createNavigation = (container) => {
	const mainNav = document.createElement("nav");
	mainNav.classList.add("main__nav");

	const form = document.createElement("form");
	form.action = "";
	form.method = "get";
	form.target = "_self";
	form.classList.add("form");
	mainNav.append(form);

	const mainNavCategories = document.createElement("div");
	mainNavCategories.classList.add("main__nav-categories");
	form.append(mainNavCategories);

	const allLabel = document.createElement("label");
	allLabel.classList.add("main__nav-categories_active");
	allLabel.htmlFor = "all";
	allLabel.textContent = "All";
	mainNavCategories.append(allLabel);

	const allInput = document.createElement("input");
	allInput.type = "checkbox";
	allInput.checked = true;
	allInput.name = "all";
	allInput.id = "all";
	allInput.value = "all";
	mainNavCategories.append(allInput);

	const documentaryLabel = document.createElement("label");
	documentaryLabel.htmlFor = "documentary";
	documentaryLabel.textContent = "Documentary";
	mainNavCategories.append(documentaryLabel);

	const documentaryInput = document.createElement("input");
	documentaryInput.type = "checkbox";
	documentaryInput.name = "genre";
	documentaryInput.id = "documentary";
	documentaryInput.value = "documentary";
	mainNavCategories.append(documentaryInput);

	const comedyLabel = document.createElement("label");
	comedyLabel.htmlFor = "comedy";
	comedyLabel.textContent = "Comedy";
	mainNavCategories.append(comedyLabel);

	const comedyInput = document.createElement("input");
	comedyInput.type = "checkbox";
	comedyInput.name = "genre";
	comedyInput.id = "comedy";
	comedyInput.value = "comedy";
	mainNavCategories.append(comedyInput);

	const horrorLabel = document.createElement("label");
	horrorLabel.htmlFor = "horror";
	horrorLabel.textContent = "Horror";
	mainNavCategories.append(horrorLabel);

	const horrorInput = document.createElement("input");
	horrorInput.type = "checkbox";
	horrorInput.name = "genre";
	horrorInput.id = "horror";
	horrorInput.value = "horror";
	mainNavCategories.append(horrorInput);

	const crimeLabel = document.createElement("label");
	crimeLabel.htmlFor = "crime";
	crimeLabel.textContent = "Crime";
	mainNavCategories.append(crimeLabel);

	const crimeInput = document.createElement("input");
	crimeInput.type = "checkbox";
	crimeInput.name = "genre";
	crimeInput.id = "crime";
	crimeInput.value = "crime";
	mainNavCategories.append(crimeInput);

	const mainNavFilters = document.createElement("div");
	mainNavFilters.classList.add("main__nav-filters");
	form.append(mainNavFilters);

	const mainNavFiltersTitle = document.createElement("span");
	mainNavFiltersTitle.classList.add("main__nav-filters-title");
	mainNavFiltersTitle.textContent = "Sort by";
	mainNavFilters.append(mainNavFiltersTitle);

	const select = document.createElement("select");
	mainNavFilters.append(select);

	const releaseDateUp = document.createElement("option");
	releaseDateUp.value = "release_date";
	releaseDateUp.dataset.order = "asc";
	releaseDateUp.innerHTML = "Release date <span>&#11165;</span>";
	select.append(releaseDateUp);

	const releaseDateDown = document.createElement("option");
	releaseDateDown.value = "release_date";
	releaseDateDown.dataset.order = "desc";
	releaseDateDown.innerHTML = "Release date <span>&#11167;</span>";
	select.append(releaseDateDown);

	const raitingUp = document.createElement("option");
	raitingUp.value = "vote_average";
	raitingUp.dataset.order = "asc";
	raitingUp.innerHTML = "Raiting <span>&#11165;</span>";
	select.append(raitingUp);

	const raitingDown = document.createElement("option");
	raitingDown.value = "vote_average";
	raitingDown.dataset.order = "desc";
	raitingDown.innerHTML = "Raiting <span>&#11167;</span>";
	select.append(raitingDown);

	container.append(mainNav);

	form.addEventListener("change", (e) => {
		navigationHandler(e);
	});
};

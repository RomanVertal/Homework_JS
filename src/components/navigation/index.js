export const createNavigation = (container) => {
	const mainNav = document.createElement("nav");
	mainNav.classList.add("main__nav");

	const mainNavCategories = document.createElement("div");
	mainNavCategories.classList.add("main__nav-categories");
	mainNav.append(mainNavCategories);

	const linkAll = document.createElement("a");
	linkAll.href = "#";
	linkAll.classList.add(
		"main__nav-categories-link",
		"main__nav-categories-link_active"
	);
	linkAll.textContent = "All";
	mainNavCategories.append(linkAll);

	const linkDocumentary = document.createElement("a");
	linkDocumentary.href = "#";
	linkDocumentary.classList.add("main__nav-categories-link");
	linkDocumentary.textContent = "Documentary";
	mainNavCategories.append(linkDocumentary);

	const linkComedy = document.createElement("a");
	linkComedy.href = "#";
	linkComedy.classList.add("main__nav-categories-link");
	linkComedy.textContent = "Comedy";
	mainNavCategories.append(linkComedy);

	const linkHorror = document.createElement("a");
	linkHorror.href = "#";
	linkHorror.classList.add("main__nav-categories-link");
	linkHorror.textContent = "Horror";
	mainNavCategories.append(linkHorror);

	const linkCrime = document.createElement("a");
	linkCrime.href = "#";
	linkCrime.classList.add("main__nav-categories-link");
	linkCrime.textContent = "Crime";
	mainNavCategories.append(linkCrime);

	const mainNavFilters = document.createElement("div");
	mainNavCategories.classList.add("main__nav-filters");
	mainNav.append(mainNavFilters);

	const mainNavFiltersTitle = document.createElement("span");
	mainNavFiltersTitle.classList.add("main__nav-filters-title");
	mainNavFiltersTitle.textContent = "Sort by";
	mainNavFilters.append(mainNavFiltersTitle);

	const mainNavFiltersButton = document.createElement("button");
	mainNavFiltersButton.classList.add("main__nav-filters-button");
	mainNavFiltersButton.textContent = "release date";
	mainNavFilters.append(mainNavFiltersButton);

	container.append(mainNav);
};

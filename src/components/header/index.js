export const createHeader = (container) => {
	const header = document.createElement("header");
	header.classList.add("header");

	const headerTop = document.createElement("div");
	headerTop.classList.add("header__top");
	header.append(headerTop);

	const headerTopTitle = document.createElement("span");
	headerTopTitle.classList.add("header__top-title");
	headerTopTitle.innerHTML = "<span>netflix</span>roulette";
	headerTop.append(headerTopTitle);

	const buttonAddMovie = document.createElement("button");
	buttonAddMovie.classList.add("button_add_movie");
	buttonAddMovie.textContent = "+ add movie";
	headerTop.append(buttonAddMovie);

	const headerSearch = document.createElement("div");
	headerSearch.classList.add("header__search");
	header.append(headerSearch);

	const headerSearchTitle = document.createElement("p");
	headerSearchTitle.classList.add("header__search-title");
	headerSearchTitle.textContent = "FIND YOUR MOViE";
	headerSearch.append(headerSearchTitle);

	const formSearch = document.createElement("form");
	formSearch.action = "";
	formSearch.method = "get";
	formSearch.target = "_self";
	headerSearch.append(formSearch);

	const headerSearchInput = document.createElement("input");
	headerSearchInput.classList.add("header__search-input");
	headerSearchInput.type = "text";
	headerSearchInput.placeholder = "What do you want to watch?";
	formSearch.append(headerSearchInput);

	const headerSearchButton = document.createElement("button");
	headerSearchButton.classList.add("header__search-button");
	headerSearchButton.type = "button";
	headerSearchButton.textContent = "Search";
	formSearch.append(headerSearchButton);

	container.append(header);
};

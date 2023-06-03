export const createMainContentFilms = (container) => {
	const mainContentFilms = document.createElement("div");

	mainContentFilms.classList.add("main__content-films");
	container.append(mainContentFilms);

    return mainContentFilms
}
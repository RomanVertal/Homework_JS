export const createCountFilms = (container) => {
	const mainCount = document.createElement("div");
	mainCount.classList.add("main__count-films");
	const counter = document.createElement("span");
	counter.textContent = "39 movies found";
	mainCount.append(counter);
	container.append(mainCount);
};

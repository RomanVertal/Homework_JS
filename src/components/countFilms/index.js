export const createCountFilms = (container) => {
	const mainCount = document.createElement("div");
	mainCount.classList.add("main__count-films");
	const number = document.createElement("span");
	number.textContent = "";
	number.classList.add('count_films')
	const counter = document.createElement("span");
	counter.textContent = " movies found";
	mainCount.append(number)
	mainCount.append(counter);
	container.append(mainCount);
};

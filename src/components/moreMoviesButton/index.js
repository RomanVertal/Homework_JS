export const createMoreButton = (container) => {
	const moreButtonContainer = document.createElement("div");
	moreButtonContainer.classList.add("main__more-button-container");

	const button = document.createElement("button");
	button.type = "button";
	button.id = "showMore";
	button.innerText = "show more";

	button.addEventListener("click", () => {});

	moreButtonContainer.append(button);
	container.append(moreButtonContainer);
};

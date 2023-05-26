export const createFooter = (container) => {
	const footer = document.createElement("footer");
	footer.classList.add("footer");

	const footerTitle = document.createElement("span");
	footerTitle.classList.add("footer__title");
	footerTitle.innerHTML = "<span>netflix</span>roulette";
	footer.append(footerTitle);

	container.append(footer);
};

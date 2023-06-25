import { wrapper } from "../wrapper";

export const createMain = () => {
	const main = document.createElement("main");
	main.classList.add("main");
	wrapper.append(main);
	return main;
};

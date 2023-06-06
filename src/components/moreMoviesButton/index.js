import { defaultLimit, updateMoviesState } from "../../api";
import { getSearchParams } from "../../utils/search";

export const createMoreButton = (container, mainContentFilms) => {
	const moreButtonContainer = document.createElement("div");
	moreButtonContainer.classList.add("main__more-button-container");

	const button = document.createElement("button");
	button.type = "button";
	button.id = "showMore";
	button.innerText = "show more";

	const onClick = () =>{
		const currentLimit = getSearchParams()?.limit || defaultLimit;
		updateMoviesState({limit: currentLimit + defaultLimit})
		
	}

	button.addEventListener("click", onClick);

	moreButtonContainer.append(button);
	container.append(moreButtonContainer);
};

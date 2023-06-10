import { getMovie } from "../../api";
import { searchToObject } from "../../utils/search";

export const createMovieDetails = (container) => {
	const {id} = searchToObject(window.location.search);
	getMovie(id).then(data => {
		container.textContent = data.title;
	})
	
	
};

import { updateMoviesState } from "../../api";

export const onSearch = (e) => {
	e.preventDefault();
	const searchValue = new FormData(e.target).get("search");

	updateMoviesState({ search: searchValue });
};

import { updateMoviesState } from "../../api";
import { createMovie } from "../movies";

export const onSearch = (e) => {
    e.preventDefault();
    const searchValue = new FormData(e.target).get('search')
    

	updateMoviesState({search: searchValue})
   
}

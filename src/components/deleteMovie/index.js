import { defaultLimit, defaultParams, deleteMovie, updateMoviesState } from "../../api";
import { getSearchParams } from "../../utils/search";
import { congratulationsDelete, createCongratulationsForm } from "../congratulationsForm";
import { wrapper } from "../wrapper";

export const deleteMovieBlock = document.createElement("div");

export const onRemoveDeleteMovieForm = () => {
	document.querySelector(".delete_movie").innerHTML = "";
	document.querySelector(".delete_movie").remove();
};

export const createDeleteMovieForm = (container, idMovie, movieBlock) => {
	deleteMovieBlock.classList.add("delete_movie");

	const deleteMovieForm = document.createElement("div");
	deleteMovieForm.classList.add("delete_movie__form");

	const deleteMovieFormTitle = document.createElement("p");
	deleteMovieFormTitle.classList.add("delete_movie__form-title");
	deleteMovieFormTitle.textContent = "Delete MOVIE";
	deleteMovieForm.append(deleteMovieFormTitle);

	const deleteMovieFormSubtitle = document.createElement("p");
	deleteMovieFormSubtitle.classList.add("delete_movie__form-subtitle");
	deleteMovieFormSubtitle.textContent =
		"Are you sure you want to delete this movie?";
	deleteMovieForm.append(deleteMovieFormSubtitle);

	const deleteMovieFormBtnConfirm = document.createElement("button");
	deleteMovieFormBtnConfirm.type = "button";
	deleteMovieFormBtnConfirm.classList.add("delete_movie__form-btn-confirm");
	deleteMovieFormBtnConfirm.textContent = "confirm";
	deleteMovieForm.append(deleteMovieFormBtnConfirm);

	const handlerDeleteMovie = () => {
		deleteMovie(idMovie).then(()=> {
			onRemoveDeleteMovieForm();
			createCongratulationsForm(wrapper, congratulationsDelete)
		});
		
		const currentLimit = getSearchParams()?.limit || defaultLimit;	
		console.log(currentLimit)	
		updateMoviesState({limit: currentLimit})		
		
	};

	deleteMovieFormBtnConfirm.addEventListener("click", handlerDeleteMovie);

	const deleteMovieFormBtnClose = document.createElement("button");
	deleteMovieFormBtnClose.type = "button";
	deleteMovieFormBtnClose.classList.add("delete_movie__form-btn-close");
	deleteMovieFormBtnClose.textContent = "✕";
	deleteMovieForm.append(deleteMovieFormBtnClose);

	deleteMovieFormBtnClose.addEventListener("click", onRemoveDeleteMovieForm);

	deleteMovieBlock.append(deleteMovieForm);
	container.append(deleteMovieBlock);
};

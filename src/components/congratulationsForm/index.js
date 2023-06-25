export const congratulationsDelete = "The movie has been delete to<br>database successfully ";
export const congratulationsEdit = "The movie has been edit to<br>database successfully ";

export const onRemoveCongratulationsForm = () => {
	document.querySelector(".congratulations_movie").innerHTML = "";
	document.querySelector(".congratulations_movie").remove();
};
export const createCongratulationsForm = (container, textCongratulations) => {
	const congratulationsMovieBlock = document.createElement("div");
	congratulationsMovieBlock.classList.add("congratulations_movie");

	const congratulationsMovieForm = document.createElement("div");
	congratulationsMovieForm.classList.add("congratulations_movie__form");

	const congratulationsLogo = document.createElement("div");
	congratulationsLogo.classList.add("congratulations_logo");
	const congratulationsLogoCheck = document.createElement("span");
	congratulationsLogoCheck.innerHTML = "&#10004;";
	congratulationsLogo.append(congratulationsLogoCheck);
	congratulationsMovieForm.append(congratulationsLogo);

	const congratulationsTitle = document.createElement("p");
	congratulationsTitle.classList.add("congratulations_movie__title");
	congratulationsTitle.textContent = "congratulations !";
	congratulationsMovieForm.append(congratulationsTitle);

	const congratulationsSubtitle = document.createElement("p");
	congratulationsSubtitle.classList.add("congratulations_movie__subtitle");
	congratulationsSubtitle.innerHTML = textCongratulations;
		
	congratulationsMovieForm.append(congratulationsSubtitle);

	const congratulationsBtnClose = document.createElement("button");
	congratulationsBtnClose.type = "button";
	congratulationsBtnClose.classList.add("congratulations_movie__btn-close");
	congratulationsBtnClose.textContent = "✕";
	congratulationsMovieForm.append(congratulationsBtnClose);

	congratulationsBtnClose.addEventListener(
		"click",
		onRemoveCongratulationsForm
	);

	congratulationsMovieBlock.append(congratulationsMovieForm);
	container.append(congratulationsMovieBlock);
};

export const searchToObject = (searchString) => {
	const separatedString = searchString.substring(1);
	const params = separatedString.split("&");
	const searchObj = {};
	params.forEach((element) => {
		const [key, value] = element.split("=");
		const parsentValue = parseInt(value, 10);
		searchObj[key] = parsentValue || value;
	});

	return searchObj;
};

export const objToSearch = (params) => {
	let searchString = "";
	if (!params) return searchString;
	Object.entries(params).forEach(([key, value], index) => {
		if (value) {
			const symbol = !index ? "?" : "&";
			searchString += `${symbol}${key}=${value}`;
		}
	});
	return searchString;
};

export const getSearchParams = () => searchToObject(window.location.search);

export const updateSearchParams = (params) => {
	const url = new URL(window.location);
	if (params.filter) {
		url.searchParams.set("filter", params.filter);
	}
	if (params.limit) {
		url.searchParams.set("limit", params.limit);
	}
	if (params.search) {
		url.searchParams.set("search", params.search);
		url.searchParams.set("searchBy", "title");
	}
	if (params.sortBy) {
		url.searchParams.set("sortBy", params.sortBy);
	}
	if (params.sortOrder) {
		url.searchParams.set("sortOrder", params.sortOrder);
	}

	window.history.pushState(null, "", url.toString());
};

export const goToMovieDetails = (id) => {
	const url = new URL(window.location);
	url.pathname = `/movies/${id}`;
	window.history.pushState(null, "movie details", url.toString());
};

export const wrapper = document.createElement("div");
export const headerOrDetails = document.createElement("header");
headerOrDetails.classList.add("headerOrDetails");

export const createWrapper = () => {
	wrapper.classList.add("wrapper");
	wrapper.append(headerOrDetails);
	return wrapper;
};

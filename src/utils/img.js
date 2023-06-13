import defaultPoster from "../../public/images/poster.jpg";
export const makeSafeImage = (img) => {
    img.onerror = (e) => {
        e.target.src = defaultPoster
    }
}
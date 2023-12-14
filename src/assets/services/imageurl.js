import noImage from "../noimage.webp"
const getCroppedImageURL = (url) => {
    if (!url) return noImage;
    const target = "media/";
    const index = url.indexOf(target) + target.length;
    return (url.slice(0, index) + "crop/600/400/" + url.slice(index, url.length));
}
export default getCroppedImageURL;
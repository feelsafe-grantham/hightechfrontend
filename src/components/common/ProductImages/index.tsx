import styles from "./ProductImages.module.css"
import useAutoScroll from "../../../utils/helper/useAutoScroll";
import useProductImages from "./useProductImages";
import CoverImageShimmer from "../Shimmer/CoverImageShimmer";

const ProductImages = ({ productsImages }: { productsImages?: string[] }) => {

    const imageGridRef = useAutoScroll();
    const { productsImages: images, loading, error } = useProductImages();
    if (loading) return (<CoverImageShimmer />)
    if (error) return (<div></div>)
    return (
        <>
            <div ref={imageGridRef} className={`${styles.imageGrid}`}>
                {images.map((image, index) =>
                    <img key={index} className={`${styles.productImage}`} src={image} />
                )}
            </div>
        </>

    )

}
export default ProductImages;
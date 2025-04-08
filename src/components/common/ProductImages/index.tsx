import styles from "./ProductImages.module.css"
import useAutoScroll from "../../../utils/helper/useAutoScroll";

const ProductImages = ({ productsImages }: { productsImages: string[] }) => {
    const imageGridRef = useAutoScroll();
    if (!productsImages) return (<div></div>)
    if (typeof productsImages === "string") return (<div></div>)
    if (productsImages.length === 0) return (<div></div>)
    return (<div ref={imageGridRef} className={`${styles.imageGrid}`}>
        {productsImages.map((image, index) =>
            <img key={index} className={`${styles.productImage}`} src={image} />
        )}
    </div>)
}
export default ProductImages;
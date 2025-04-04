import { Link, Links } from "react-router-dom";
import styles from "./OneProduct.module.css"
import { ProductCardType } from "../../../types/contentTypes";
import { createSlug } from "../../../utils/helper";
const OneProduct = ({ product = {
    id: 1,
    product_image: "/images/product1.png",
    product_name: "Faux Wood Blinds",
    product_stars: 5,
    connect_link: "",
    download_link: "",
} }: { product: ProductCardType }) => {

    const {
        id,
        product_image,
        product_name,
        product_stars,
        connect_link,
        download_link } = product;
    const slug = createSlug(product_name, id);
    return (
        <div className={`${styles.productCard}`}>
            <Link to={`/brochure/${slug}`}>
                <img
                    className={`${styles.productImage}`}
                    src={product_image}
                    alt={product_name}
                    loading="lazy"
                />
            </Link>
            <h4 className={`${styles.productName}`}>{product_name}</h4>
            <div className={`${styles.productStars}`}>
                {Array(product_stars).fill("⭐").map((star, index) => <span key={index}>{star}</span>)}
            </div>
            <div className={`${styles.btnContainer}`}>
                <Link to={connect_link} className={`${styles.ctaBtn} ${styles.connectBtn}`}>Connect Now!</Link>
                <Link to={download_link} className={`${styles.ctaBtn} ${styles.downloadBtn}`}>Download Brochure</Link>
            </div>
        </div>
    );
}
export default OneProduct;
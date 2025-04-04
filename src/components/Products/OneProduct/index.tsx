import { Link } from "react-router-dom";
import styles from "./OneProduct.module.css"
import { ProductCardType } from "../../../types/contentTypes";
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
    return (
        <div className={`${styles.productCard}`}>
            <img
                className={`${styles.productImage}`}
                src={product_image}
                alt="aman"
            />
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
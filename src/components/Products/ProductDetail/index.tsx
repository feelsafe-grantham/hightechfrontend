import styles from "./ProductDetail.module.css";
import { useState } from "react";
import { ProductDetailType } from "../../../types/contentTypes";
const ProductDetail = ({ product }: { product: ProductDetailType }) => {
    const [quantity, setQuantity] = useState(1);
    const incrementQuantity = () => {
        setQuantity((prevQuantity) => prevQuantity + 1);
    };
    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity((prevQuantity) => prevQuantity - 1);
        }
    };

    const totalPrice = product.product_price * quantity;
    return (
        <div className={`${styles.productDetail}`}>
            <div className={`${styles.productImageContainer}`}>
                <img className={`${styles.productImage}`} src={product.product_image} alt={product.product_name} />
            </div>
            <div className={`${styles.productInfo}`}>
                <h3 className={`${styles.productName}`}>{product.product_name}</h3>
                <div className={`${styles.reviewContainer}`}>
                    <img className={`${styles.icon}`} src="/images/google.png" alt="" />
                    <img className={`${styles.icon}`} src="/images/star.png" alt="" />
                    <p className={`${styles.reviewCount}`}>{product.product_stars}/10</p>

                </div>
                <ul className={`${styles.checkContainer}`}>
                    {product.product_review.map((text) =>
                        <li className={`${styles.checkList}`}>{text}</li>
                    )}
                </ul>
                <div className={`${styles.dimenssionContainer}`}>
                    <div className={`${styles.dimension}`}>
                        <span className={`${styles.lableSpan}`}>Height</span>
                        <span className={`${styles.productDimension}`}>{product.product_height}</span>
                    </div>
                    <div className={`${styles.dimension}`}>
                        <span className={`${styles.lableSpan}`}>Width</span>
                        <span className={`${styles.productDimension}`}>{product.product_width}</span>
                    </div>

                </div>
                <p className={`${styles.productPrice}`}>{totalPrice}/-</p>
                <div className={`${styles.CartBtnContainer}`}>
                    <button onClick={incrementQuantity} className={`${styles.cartButton}`}>+</button>
                    <span className={`${styles.quantity}`}>{quantity}</span>
                    <button onClick={decrementQuantity} className={`${styles.cartButton}`}>-</button>
                </div>
                <div className={`${styles.ctaButtonContainer}`}>
                    <button className={`${styles.ctaButton} ${styles.contactBtn}`}>
                        <img className={`${styles.btnIcon}`} src="/images/whatsapp.png" alt="" />
                        Contact Now!
                    </button>
                    <button className={`${styles.ctaButton} ${styles.downloadBtn}`}>Download Brochure</button>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
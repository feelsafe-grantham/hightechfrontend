import Breadcrum from "../../components/common/Breadcrum";
import ContactCta from "../../components/common/ContactCta";
import MainHeading from "../../components/common/MainHeading";
import OneProduct from "../../components/Products/OneProduct";
import styles from "./ProductView.module.css"
const ProductView = () => {
    const product = {
        product_image: "",
        product_name: "Roller Blinds",
        product_star: 8,
        product_review: ["Dealer Verified", "Factory Product", "Quality Approved",],
        product_height: "102cm",
        product_width: "102cm",
        product_price: "1200",
        whatsapp_link: "",
        download_link: "",
    }
    return (
        <div className={`${styles.productView}`}>
            <Breadcrum imgUrl="/images/breadcrum1.png" />
            <MainHeading />
            <div className={`${styles.productDetail}`}>
                <div className={`${styles.productImageContainer}`}>
                    <img className={`${styles.productImage}`} src="/images/product1.png" alt="" />
                </div>
                <div className={`${styles.productInfo}`}>
                    <h3 className={`${styles.productName}`}>{product.product_name}</h3>
                    <div className={`${styles.reviewContainer}`}>
                        <img className={`${styles.icon}`} src="/images/google.png" alt="" />
                        <img className={`${styles.icon}`} src="/images/star.png" alt="" />

                        <p className={`${styles.reviewCount}`}>{product.product_star}/10</p>

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
                    <p className={`${styles.productPrice}`}>{product.product_price} /-</p>
                    <div className={`${styles.CartBtnContainer}`}>
                        <button className={`${styles.cartButton}`}>+</button>
                        <button className={`${styles.cartButton}`}>-</button>
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
            <ContactCta />
            <div className={`${styles.productsContainer}`}>
                <OneProduct />
                <OneProduct />
                <OneProduct />
                <OneProduct />
                <OneProduct />
                <OneProduct />
            </div>
            <div className={`${styles.gallerySection}`}>
                <h2 className={`${styles.sectionHeading}`}>Top Selling Products</h2>
                <p className={`${styles.sectionDescription}`}>Lorem ipsum dolor sit amet consecte consecte</p>
                <div className={`${styles.galleryContainer}`}>
                    <div className={`${styles.hotProductsContainer}`}>
                        <img className={`${styles.hotProductImage}`} src="/images/home1.png" alt="" />
                        <p className={`${styles.hotCta}`}>Our Hot<br /> <span className={`${styles.hotCtaSpan}`}>Products</span>
                        </p>
                    </div>
                    <div className={`${styles.hotProductsContainer}`}>
                        <img className={`${styles.hotProductImage}`} src="/images/home1.png" alt="" />
                        <p className={`${styles.hotCta}`}>Our Hot<br /> <span className={`${styles.hotCtaSpan}`}>Products</span>
                        </p>
                    </div>
                </div>
                <div className={`${styles.hotProductsContainer}`}>
                    <img className={`${styles.hotProductImage}`} src="/images/home1.png" alt="" />
                    <p className={`${styles.hotCta}`}>Our Hot<br /> <span className={`${styles.hotCtaSpan}`}>Products</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ProductView;
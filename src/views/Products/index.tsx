import Breadcrum from "../../components/common/Breadcrum";
import ContactCta from "../../components/common/ContactCta";
import ImageCta from "../../components/common/ImageCta";
import MainHeading from "../../components/common/MainHeading";
import ProductsContainer from "../../components/common/ProductsContainer";
import SectionHeading from "../../components/common/SectionHeading/SectionHeading";
import { ProductDetailType } from "../../types/contentTypes";
import { ProductData } from "../../utils/Data";
import styles from "./ProductView.module.css"
const ProductView = () => {
    const product: ProductDetailType = {
        id: 1,
        product_image: "/images/product1.png",
        product_name: "Roller Blinds",
        product_stars: 8,
        product_review: ["Dealer Verified", "Factory Product", "Quality Approved",],
        product_height: "102cm",
        product_width: "102cm",
        product_price: "1200",
        whatsapp_link: "",
        download_link: "",
        connect_link: "",
    }

    return (
        <div className={`${styles.productView}`}>
            <Breadcrum imgUrl="/images/breadcrum1.png" />
            <MainHeading />
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
            <ProductsContainer products={ProductData} />
            <SectionHeading heading="Top Selling Products" description="Lorem ipsum dolor sit amet consecte consecte" />
            <div className={`${styles.galleryContainer}`}>
                <ImageCta aspectRatio="21" imageUrl="/images/home1.png" text="Our Hot" subText="Products" />
                <ImageCta aspectRatio="21" imageUrl="/images/home1.png" text="Our Hot" subText="Products" />
            </div>
            <div className={`${styles.maxWidthLimit}`}>
                <ImageCta aspectRatio="31" imageUrl="/images/home1.png" text="Our Hot" subText="Products" />
            </div>
        </div>
    )
}

export default ProductView;
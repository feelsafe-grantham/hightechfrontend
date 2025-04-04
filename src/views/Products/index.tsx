import Breadcrum from "../../components/common/Breadcrum";
import ContactCta from "../../components/common/ContactCta";
import ImageCta from "../../components/common/ImageCta";
import MainHeading from "../../components/common/MainHeading";
import ProductsContainer from "../../components/common/ProductsContainer";
import SectionHeading from "../../components/common/SectionHeading/SectionHeading";
import ProductDetail from "../../components/Products/ProductDetail";
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
        product_price: 1200,
        whatsapp_link: "",
        download_link: "",
        connect_link: "",
    }

    return (
        <div className={`${styles.productView}`}>
            <Breadcrum imgUrl="/images/breadcrum1.png" />
            <MainHeading />
            <ProductDetail product={product} />
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
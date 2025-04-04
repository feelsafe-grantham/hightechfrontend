import Breadcrum from "../../components/common/Breadcrum";
import ContactCta from "../../components/common/ContactCta";
import ImageCta from "../../components/common/ImageCta";
import MainHeading from "../../components/common/MainHeading";
import ProductsContainer from "../../components/common/ProductsContainer";
import SectionHeading from "../../components/common/SectionHeading/SectionHeading";
import ProductDetail from "../../components/Products/ProductDetail";
import styles from "./ProductView.module.css"
import useProductDetail from "./useProductDetail";
const ProductView = () => {
    const { product, relatedProducts, getLimitedImages } = useProductDetail();
    return (
        <div className={`${styles.productView}`}>
            <Breadcrum imgUrl="/images/breadcrum1.png" />
            <MainHeading />
            <ProductDetail product={product} />
            <ContactCta />
            <ProductsContainer products={relatedProducts} />
            <SectionHeading heading="Top Selling Products" description="Lorem ipsum dolor sit amet consecte consecte" />
            <div className={`${styles.galleryContainer}`}>
                {getLimitedImages("21").map((image, index) => (
                    <ImageCta
                        key={index}
                        aspectRatio={image.aspectRatio}
                        imageUrl={image.imageUrl}
                        text={image.text}
                        subText={image.subText}
                    />
                ))}
            </div>
            <div className={`${styles.maxWidthLimit}`}>
                {getLimitedImages("31").map((image, index) => (
                    <ImageCta
                        key={index}
                        aspectRatio={image.aspectRatio}
                        imageUrl={image.imageUrl}
                        text={image.text}
                        subText={image.subText}
                    />
                ))}
            </div>
        </div>
    )
}

export default ProductView;
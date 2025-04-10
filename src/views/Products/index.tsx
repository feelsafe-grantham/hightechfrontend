import { useParams } from "react-router-dom";
import Breadcrum from "../../components/common/Breadcrum";
import ContactCta from "../../components/common/ContactCta";
import ImageCta from "../../components/common/ImageCta";
import MainHeading from "../../components/common/MainHeading";
import ProductsContainer from "../../components/common/ProductsContainer";
import SectionHeading from "../../components/common/SectionHeading/SectionHeading";
import ProductContainer from "../../components/common/Shimmer/ProductContainer";
import ProductDetail from "../../components/Products/ProductDetail";
import styles from "./ProductView.module.css"
import useProductDetail from "./useProductDetail";
import { getIdFromSlug } from "../../utils/helper";
import PageSeo from "../../components/common/PageSeo";
const ProductView = () => {
    const { slug } = useParams<{ slug: string }>();
    const id = getIdFromSlug(slug as string)
    const { product, relatedProducts, getLimitedImages, loading } = useProductDetail(id);
    return (
        <>
            <PageSeo
                title={product.product_name + ` - High Tech Window Blinds by Vishal Interior`}
                description={`View the ${product.product_name} brochure from High Tech Window Blinds by Vishal Interior and discover stylish, custom blinds for your windows.`}
                url={`https://hightechwindowblinds.in/${slug}`}
                canonicalUrl={`https://hightechwindowblinds.in/${slug}`}
                keywords=""
            />

            <div className={`${styles.productView}`}>
                <Breadcrum imgUrl="/images/breadcrum1.png" />
                <MainHeading />
                <ProductDetail product={product} />
                <ContactCta />
                {loading ? <ProductContainer /> : <ProductsContainer products={relatedProducts} />}
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
        </>
    )
}

export default ProductView;
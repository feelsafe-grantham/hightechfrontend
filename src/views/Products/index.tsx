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
import CoverImageShimmer from "../../components/common/Shimmer/CoverImageShimmer";
import ProductImages from "../../components/common/ProductImages";
const ProductView = () => {
    const { slug } = useParams<{ slug: string }>();
    const id = getIdFromSlug(slug as string)
    const { oneHalfRatio,
        oneRatio, threeRatio, videoUrl,
        vLoading, product, relatedProducts, loading } = useProductDetail(id);
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
                {vLoading ? <CoverImageShimmer /> : <Breadcrum videoUrl={videoUrl} fallback="/images/brochureDetailFallback.jpg" />}
                <MainHeading />
                <div className="productDetail">

                    <ProductDetail product={product} />
                </div>
                <ContactCta />
                {loading ? <ProductContainer /> : <ProductsContainer products={relatedProducts} />}
                <SectionHeading heading="Top Selling Products" description="Explore our top selling products" />
                <div className={`${styles.galleryContainer}`}>
                    <ImageCta imageUrl={oneHalfRatio[0]?.imageUrl} aspectRatio={oneHalfRatio[0]?.aspectRatio} />
                    <ImageCta imageUrl={oneRatio[0]?.imageUrl} aspectRatio={oneRatio[0]?.aspectRatio} />
                </div>
                <div className={`${styles.maxWidthLimit}`}>
                    <ImageCta aspectRatio={threeRatio[0]?.aspectRatio} imageUrl={threeRatio[0]?.imageUrl} />
                </div>
                <ProductImages />
            </div>
        </>
    )
}

export default ProductView;
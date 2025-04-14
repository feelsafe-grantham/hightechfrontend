import styles from "./Home.module.css"
import useHomeView from "./useHomeView";
import PageSeo from "../../components/common/PageSeo";
import ImageCta from "../../components/common/ImageCta";
import ContactCta from "../../components/common/ContactCta";
import CoverImage from "../../components/common/CoverImage";
import useAutoScroll from "../../utils/helper/useAutoScroll";
import MainHeading from "../../components/common/MainHeading";
import ProductImages from "../../components/common/ProductImages";
import ProductsContainer from "../../components/common/ProductsContainer";
import ProductContainer from "../../components/common/Shimmer/ProductContainer";
import CoverImageShimmer from "../../components/common/Shimmer/CoverImageShimmer";
import HeroImagesShimmer from "../../components/common/Shimmer/HeroImagesShimmer";
import SectionHeading from "../../components/common/SectionHeading/SectionHeading";

const HomeView = () => {
    const { vLoading, videoUrl, heroImages, chips, activeChip, handleChipClick, products, ctaImage, loading } = useHomeView();
    const imageGridRef = useAutoScroll();
    return (
        <>
            <PageSeo
                title="High Tech Window Blinds by Vishal Interior - Window Blinds in Delhi"
                description="Explore High Tech Window Blinds by Vishal Interior. Top manufacturer in Delhi offering stylish and durable window blinds for homes and offices."
                url="https://www.hightechwindowblinds.in/"
                canonicalUrl="https://www.hightechwindowblinds.in/"
                keywords=""
            />
            <div className={`${styles.homeView}`}>

                {vLoading ? <CoverImageShimmer /> : <CoverImage videoUrl={videoUrl} />}
                {loading ? <HeroImagesShimmer /> :
                    <div ref={imageGridRef} className={`${styles.productImageContainer} `}>
                        {heroImages.map((image, index) =>
                            <img key={index} src={image.image} className={`${styles.productImage}`} alt="High Tech Window Blinds by Vishal Interior" />
                        )}
                    </div>
                }
                <div className={`${styles.chipsContainer} scrollbar-hidden`}>
                    {chips.map((chip, index) =>
                        <span
                            key={index}
                            className={`${styles.chip} ${activeChip === chip ? styles.chipActive : ""}`}
                            onClick={() => handleChipClick(chip)}>{chip}
                        </span>
                    )}
                </div>
                <MainHeading />
                <ContactCta />
                <SectionHeading heading="Top Selling Products" description="See a large selection of our top selling products" />
                {loading ? <ProductContainer /> : <ProductsContainer products={products} />}
                <ProductImages />
                {loading ? <CoverImageShimmer /> : <div className={`${styles.ctaContainer}`}>
                    <ImageCta
                        aspectRatio={ctaImage.aspectRatio}
                        imageUrl={ctaImage.imageUrl}
                        text={ctaImage.text}
                        subText={ctaImage.subText}
                    />

                </div>}
            </div>
        </>
    );
}


export default HomeView;
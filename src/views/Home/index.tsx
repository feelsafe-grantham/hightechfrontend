import styles from "./Home.module.css"
import CoverImage from "../../components/common/CoverImage";
import MainHeading from "../../components/common/MainHeading";
import ContactCta from "../../components/common/ContactCta";
import SectionHeading from "../../components/common/SectionHeading/SectionHeading";
import ProductsContainer from "../../components/common/ProductsContainer";
import ImageCta from "../../components/common/ImageCta";
import ProductContainer from "../../components/common/Shimmer/ProductContainer";
import CoverImageShimmer from "../../components/common/Shimmer/CoverImageShimmer";
import HeroImagesShimmer from "../../components/common/Shimmer/HeroImagesShimmer";
import useAutoScroll from "../../utils/helper/useAutoScroll";
import PageSeo from "../../components/common/PageSeo";
import useHomeView from "./useHomeView";
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
                            <img key={index} className={`${styles.productImage}`} src={image.image} alt="High Tech Window Blinds by Vishal Interior" />
                        )}
                    </div>
                }
                <div className={`${styles.chipsContainer}`}>
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
                <SectionHeading heading="Top Selling Products" description="Lorem ipsum dolor sit amet consecte consecte" />
                {loading ? <ProductContainer /> : <ProductsContainer products={products} />}
                {loading ? <CoverImageShimmer /> : <div className={`${styles.ctaContainer}`}>
                    <ImageCta
                        aspectRatio={ctaImage.aspectRatio}
                        imageUrl={ctaImage.imageUrl}
                        text={ctaImage.text}
                        subText={ctaImage.subText}
                    />

                </div>
                }
            </div>
        </>
    );
}


export default HomeView;
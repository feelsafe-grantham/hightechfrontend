import styles from "./Home.module.css"
import CoverImage from "../../components/common/CoverImage";
import MainHeading from "../../components/common/MainHeading";
import ContactCta from "../../components/common/ContactCta";
import SectionHeading from "../../components/common/SectionHeading/SectionHeading";
import ProductsContainer from "../../components/common/ProductsContainer";
import ImageCta from "../../components/common/ImageCta";
import useHomeView from "./useHomeView";
import ProductContainer from "../../components/common/Shimmer/ProductContainer";
const HomeView = () => {
    const { chips, activeChip, handleChipClick, productsImages, products, ctaImage, loading } = useHomeView();
    return (
        <div className={`${styles.homeView}`}>
            <CoverImage imgUrl="/images/homeCover.png" />
            <div className={`${styles.productImageContainer}`}>
                {productsImages.map((image, index) =>
                    <img key={index} className={`${styles.productImage}`} src={image} alt="High Tech Window Blinds by Vishal Interior" />
                )}
            </div>
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
            <div className={`${styles.ctaContainer}`}>
                <ImageCta
                    aspectRatio={ctaImage.aspectRatio}
                    imageUrl={ctaImage.imageUrl}
                    text={ctaImage.text}
                    subText={ctaImage.subText}
                />

            </div>
        </div>
    );
}


export default HomeView;
import styles from "./Home.module.css"
import CoverImage from "../../components/common/CoverImage";
import MainHeading from "../../components/common/MainHeading";
import ContactCta from "../../components/common/ContactCta";
import SectionHeading from "../../components/common/SectionHeading/SectionHeading";
import ProductsContainer from "../../components/common/ProductsContainer";
import ImageCta from "../../components/common/ImageCta";
import useHomeView from "./useHomeView";
const HomeView = () => {
    const { chips, activeChip, handleChipClick, products } = useHomeView();
    return (
        <div className={`${styles.homeView}`}>
            <CoverImage imgUrl="/images/homeCover.png" />
            <div className={`${styles.productImageContainer}`}>
                <img className={`${styles.productImage}`} src="/images/homeProduct1.png" alt="" />
                <img className={`${styles.productImage}`} src="/images/homeProduct2.png" alt="" />
                <img className={`${styles.productImage}`} src="/images/homeProduct3.png" alt="" />
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
            <ProductsContainer products={products} />
            <ImageCta aspectRatio="31" imageUrl="/images/home1.png" text="Our Hot" subText="Products" />
        </div>
    );
}


export default HomeView;
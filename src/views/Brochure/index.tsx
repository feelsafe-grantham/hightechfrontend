import Breadcrum from "../../components/common/Breadcrum";
import ContactCta from "../../components/common/ContactCta";
import MainHeading from "../../components/common/MainHeading";
import ProductsContainer from "../../components/common/ProductsContainer";
import SectionHeading from "../../components/common/SectionHeading/SectionHeading";
import ProductContainer from "../../components/common/Shimmer/ProductContainer";
import styles from "./Brochure.module.css";
import useBrochureView from "./useBrochureList";

const BrochureView = () => {
    const { error, loading, products } = useBrochureView();

    return (

        <div className={`${styles.brochureView}`}>
            <Breadcrum imgUrl="/images/breadcrum1.png" />
            <MainHeading />
            {loading ? <ProductContainer /> : <ProductsContainer products={products} />}
            <SectionHeading heading="Contact Us" description="Lorem ipsum dolor sit amet consecte consecte" />
            <ContactCta />
        </div>
    )

}
export default BrochureView;
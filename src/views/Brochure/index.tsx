import Breadcrum from "../../components/common/Breadcrum";
import ContactCta from "../../components/common/ContactCta";
import MainHeading from "../../components/common/MainHeading";
import PageSeo from "../../components/common/PageSeo";
import ProductsContainer from "../../components/common/ProductsContainer";
import SectionHeading from "../../components/common/SectionHeading/SectionHeading";
import ProductContainer from "../../components/common/Shimmer/ProductContainer";
import styles from "./Brochure.module.css";
import useBrochureView from "./useBrochureList";

const BrochureView = () => {
    const { error, loading, products } = useBrochureView();

    return (
        <>
            <PageSeo
                title="Window Blinds Brochures - High Tech Blinds by Vishal Interior"
                description="Download brochures from High Tech Window Blinds by Vishal Interior to explore our range of premium window blinds for your space."
                url="https://hightechwindowblinds.in/brochure/"
                canonicalUrl="https://hightechwindowblinds.in/brochure/"
                keywords=""
            />
            <div className={`${styles.brochureView}`}>
                <Breadcrum imgUrl="/images/breadcrum1.png" />
                <MainHeading />
                {error && <div>Something went wrong</div>}
                {loading ? <ProductContainer /> : <ProductsContainer products={products} />}
                <SectionHeading heading="Contact Us" description="Lorem ipsum dolor sit amet consecte consecte" />
                <ContactCta />
            </div>
        </>
    )

}
export default BrochureView;
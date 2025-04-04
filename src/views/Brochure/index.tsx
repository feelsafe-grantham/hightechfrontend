import Breadcrum from "../../components/common/Breadcrum";
import ContactCta from "../../components/common/ContactCta";
import MainHeading from "../../components/common/MainHeading";
import ProductsContainer from "../../components/common/ProductsContainer";
import SectionHeading from "../../components/common/SectionHeading/SectionHeading";
import { ProductCardType } from "../../types/contentTypes";
import styles from "./Brochure.module.css";

const BrochureView = () => {
    const products: ProductCardType[] = [
        {
            id: 1,
            product_image: "/images/product1.png",
            product_name: "Roller Blinds",
            product_stars: 3,
            download_link: "",
            connect_link: "",
        },
        {
            id: 2,
            product_image: "/images/product2.png",
            product_name: "Roller Blinds",
            product_stars: 3,
            download_link: "",
            connect_link: "",
        },
        {
            id: 3,
            product_image: "/images/product3.png",
            product_name: "Roller Blinds",
            product_stars: 3,
            download_link: "",
            connect_link: "",
        },
        {
            id: 4,
            product_image: "/images/product4.png",
            product_name: "Roller Blinds",
            product_stars: 3,
            download_link: "",
            connect_link: "",
        }, {
            id: 1,
            product_image: "/images/product1.png",
            product_name: "Roller Blinds",
            product_stars: 3,
            download_link: "",
            connect_link: "",
        },
        {
            id: 2,
            product_image: "/images/product2.png",
            product_name: "Roller Blinds",
            product_stars: 3,
            download_link: "",
            connect_link: "",
        },
        {
            id: 3,
            product_image: "/images/product3.png",
            product_name: "Roller Blinds",
            product_stars: 3,
            download_link: "",
            connect_link: "",
        },
        {
            id: 4,
            product_image: "/images/product4.png",
            product_name: "Roller Blinds",
            product_stars: 3,
            download_link: "",
            connect_link: "",
        },
    ]


    return (

        <div className={`${styles.brochureView}`}>
            <Breadcrum imgUrl="/images/breadcrum1.png" />
            <MainHeading />
            <ProductsContainer products={products} />
            <div className={`${styles.headingContainer}`}>
                <SectionHeading heading="Contact Us" description="Lorem ipsum dolor sit amet consecte consecte" />
            </div>
            <ContactCta />
        </div>
    )

}
export default BrochureView;
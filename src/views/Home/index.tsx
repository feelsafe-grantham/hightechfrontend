import Form from "../../components/common/Form";
import OneProduct from "../../components/Products/OneProduct";
import { ContactData } from "../../utils/Data";
import styles from "./Home.module.css"
import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import TestimonialCard from "../../components/common/TestimonialCard";
import CoverImage from "../../components/common/CoverImage";
import MainHeading from "../../components/common/MainHeading";
import ContactCta from "../../components/common/ContactCta";
const HomeView = () => {
    const chips = [
        "Zebra Blinds",
        "Bamboo Blinds",
        "Bamboo Chick",
        "Triple Shade",
        "Honeycomb",
        "Skylight",
        "Motorized",
    ]
    const [activeChip, setChip] = useState("Zebra Blinds");
    const handleChipClick = (chip: string) => {
        setChip(chip);
    }
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
                        onClick={() => handleChipClick(chip)}>{chip}</span>)
                }
            </div>
            {/*<MainHeading />
            <ContactCta />
            <div className={`${styles.productsSection}`}>
                <h2 className={`${styles.sectionHeading}`}>Top Selling Products</h2>
                <p className={`${styles.sectionDescription}`}>Lorem ipsum dolor sit amet consecte consecte</p>
                <div className={`${styles.productsContainer}`}>
                    <OneProduct />
                    <OneProduct />
                    <OneProduct />
                    <OneProduct />
                    <OneProduct />
                    <OneProduct />
                </div>
            </div>
            <div className={`${styles.hotProductsContainer}`}>
                <img className={`${styles.hotProductImage}`} src="/images/home1.png" alt="" />
                <p className={`${styles.hotCta}`}>Our Hot<br /> <span className={`${styles.hotCtaSpan}`}>Products</span>
                </p>
            </div> */}


        </div>
    );
}


export default HomeView;
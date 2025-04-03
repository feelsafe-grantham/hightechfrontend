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
            <CoverImage imgUrl="/images/home3.png" />
            <div className={`${styles.productImageContainer}`}>
                <img className={`${styles.productImage}`} src="/images/home1.png" alt="" />
                <img className={`${styles.productImage}`} src="/images/home1.png" alt="" />
                <img className={`${styles.productImage}`} src="/images/home1.png" alt="" />
            </div>
            <div className={`${styles.chipsContainer}`}>
                {chips.map((chip, index) =>
                    <span
                        key={index}
                        className={`${styles.chip} ${activeChip === chip ? styles.chipActive : ""}`}
                        onClick={() => handleChipClick(chip)}>{chip}</span>)
                }
            </div>
            <div className={`${styles.headingContainer}`}>
                <h2 className={`${styles.heading}`}>
                    India's No 1 Window <br />
                    <span className={`${styles.headingSpan}`}>Blinds Manufacturer</span>
                </h2>
            </div>
            <div className={`${styles.ctaContainer}`}>
                <div className={`${styles.cta}`}>
                    <div className={`${styles.ctaImageContainer}`}>
                        <img className={`${styles.ctaImage}`} src="/images/globe.png" alt="" />
                    </div>
                    <div className={`${styles.contactContainer}`}>
                        <div className="flex gap-1">
                            <a className={`${styles.contactNo}`} href={`tel:${ContactData.phone1}`}>+91-{ContactData.phone1}</a>
                            |
                            <a className={`${styles.contactNo}`} href={`tel:${ContactData.phone2}`}>+91-{ContactData.phone2}</a>
                        </div>
                        <a className={`${styles.contactNo}`} href={`mailto:${ContactData.email}`}>{ContactData.email}</a>
                    </div>
                </div>
                <Form />
            </div>
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
            </div>
            {/* <div className={`${styles.testimonialSection}`}>
                <h2 className={`${styles.sectionHeading}`}>Testimonials</h2>
                <p className={`${styles.sectionDescription}`}>Lorem ipsum </p>
                <div className={`${styles.testimonialContainer}`}>
                    <Swiper slidesPerView={2} pagination={true} modules={[Pagination]} className="mySwiper">
                        <SwiperSlide className={`${styles.testimonialCard}`}>
                            <TestimonialCard />
                        </SwiperSlide>
                        <SwiperSlide className={`${styles.testimonialCard}`}>
                            <TestimonialCard />
                        </SwiperSlide>
                        <SwiperSlide className={`${styles.testimonialCard}`}>
                            <TestimonialCard />
                        </SwiperSlide>
                        <SwiperSlide className={`${styles.testimonialCard}`}>
                            <TestimonialCard />
                        </SwiperSlide>
                        <SwiperSlide className={`${styles.testimonialCard}`}>
                            <TestimonialCard />
                        </SwiperSlide>
                        <SwiperSlide className={`${styles.testimonialCard}`}>
                            <TestimonialCard />
                        </SwiperSlide>

                    </Swiper>
                </div>
            </div> */}

        </div>
    );
}


export default HomeView;
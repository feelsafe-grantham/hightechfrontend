import { useEffect, useRef, useState } from "react";
import Breadcrum from "../../components/common/Breadcrum";
import ImageCta from "../../components/common/ImageCta";
import MainHeading from "../../components/common/MainHeading";
import ProductContainer from "../../components/common/Shimmer/ProductContainer";
import styles from "./AboutView.module.css"
import useAboutView from "./useAboutView";
import ProductImages from "../../components/common/ProductImages";
const AboutView = () => {
    const { loading, team, productsImages, twoRatio,
        threeRatio, } = useAboutView();
    const imageGridRef = useRef<HTMLDivElement | null>(null);
    const [scrollingForward, setScrollingForward] = useState(true);

    useEffect(() => {
        const scrollInterval = setInterval(() => {
            if (imageGridRef.current) {
                const scrollWidth = imageGridRef.current.scrollWidth;
                const clientWidth = imageGridRef.current.clientWidth;

                // Check if it's scrolling forward and adjust scroll position
                if (scrollingForward) {
                    if (imageGridRef.current.scrollLeft + clientWidth >= scrollWidth) {
                        setScrollingForward(false); // Switch direction to scroll back
                    } else {
                        imageGridRef.current.scrollLeft += 2; // Scroll forward by 2px
                    }
                } else {
                    if (imageGridRef.current.scrollLeft <= 0) {
                        setScrollingForward(true); // Switch direction to scroll forward
                    } else {
                        imageGridRef.current.scrollLeft -= 2; // Scroll backward by 2px
                    }
                }
            }
        }, 30); // Adjust interval for scrolling speed

        return () => clearInterval(scrollInterval); // Clean up interval on component unmount
    }, [scrollingForward]);
    return (
        <div className={`${styles.aboutView}`}>
            <Breadcrum imgUrl="/images/breadcrum2.png" />
            <MainHeading />
            <div className={`${styles.ownerSection}`}>
                <h2 className={`${styles.sectionHeading}`}>About Us</h2>
                <p className={`${styles.sectionDescription}`}>Lorem ipsum Lorem ipsum dolor sit.</p>

                <div className={`${styles.ownerContainer}`}>
                    <div className={`${styles.imageContainer}`}>
                        <img className={`${styles.ownerImage}`} src="/images/owner.png" alt="Vishal Interior" />
                    </div>
                    <div className={`${styles.offerCtaContainer}`}>
                        <p className={`${styles.segmentText}`}>Interior Desing  | Window Blinds</p>
                        <p className={`${styles.companyName}`}>
                            <span >Hightech</span><br />
                            <span className={`${styles.designation}`}>OWNER</span>
                        </p>
                        <p className={`${styles.ourWork}`}>We are whoreseller</p>
                        <img className={`${styles.qrImage}`} src="/images/qr.png" alt="hightech qr" />
                        <img className={`${styles.signImage}`} src="/images/sign.png" alt="hightech sign" />
                    </div>
                </div>

                <p className={`${styles.ownerPara}`}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quos error voluptatibus nisi dicta, accusamus ipsa distinctio, consectetur vero ea similique delectus atque asperiores, incidunt animi! Voluptas delectus laborum pariatur!
                </p>
            </div>
            <div className={`${styles.teamSection}`}>
                <h2 className={`${styles.sectionHeading}`}>Our Team</h2>
                <p className={`${styles.sectionDescription}`}>Lorem ipsum dolor sit amet consectetur ipsum dolor sit.</p>
                <div className={`${styles.teamMemberContainer}`}>
                    {loading ? <ProductContainer /> :
                        team.map((member, index) =>
                            <div key={index} className={`${styles.memberImageContainer}`}>
                                <img className={`${styles.memberImage}`} src={member?.image} alt={member?.name} />
                                <div className={`${styles.memberInfo}`}>
                                    <p className={`${styles.memberName}`}>{member?.name}</p>
                                    <p className={`${styles.memberDesignatino}`}>{member?.designation}</p>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
            <div className={`${styles.legacySection}`}>
                <h2 className={`${styles.sectionHeading}`}>Our Legacy</h2>
                <p className={`${styles.sectionDescription}`}>Lorem ipsum dolor sit amet consectetur ipsum dolor sit.</p>
                <p className={`${styles.legacyPara}`}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, soluta neque accusamus quidem quas voluptatum facere iste temporibus, accusantium, molestias doloribus impedit ea iure placeat? Rerum, provident porro repellendus dolor, excepturi fugit molestiae consectetur esse officia quos vero, quod commodi similique. Laboriosam, nobis impedit esse fuga tempore veritatis aut est?
                </p>
            </div>
            <div className={`${styles.galleryContainer}`}>
                <div className={`${styles.col2Grid}`} >
                    <ImageCta imageUrl={threeRatio[0]?.imageUrl} aspectRatio={threeRatio[0]?.aspectRatio} />
                    <ImageCta imageUrl={twoRatio[0]?.imageUrl} aspectRatio={twoRatio[0]?.aspectRatio} />
                </div>
                <ImageCta aspectRatio={threeRatio[1]?.aspectRatio} imageUrl={threeRatio[1]?.imageUrl} />
            </div>
            {loading ? <ProductContainer /> : <ProductImages productsImages={productsImages} />}
        </div>
    );
}
export default AboutView; 
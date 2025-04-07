import Breadcrum from "../../components/common/Breadcrum";
import ImageCta from "../../components/common/ImageCta";
import MainHeading from "../../components/common/MainHeading";
import ProductContainer from "../../components/common/Shimmer/ProductContainer";
import styles from "./AboutView.module.css"
import useAboutView from "./useAboutView";
const AboutView = () => {
    const { loading, team, ctaImages, productsImages } = useAboutView();
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
                    <ImageCta imageUrl={ctaImages[0]?.imageUrl} aspectRatio={ctaImages[0]?.aspectRatio} />
                    <ImageCta imageUrl={ctaImages[2]?.imageUrl} aspectRatio={ctaImages[2]?.aspectRatio} />
                </div>
                <ImageCta aspectRatio={ctaImages[1]?.aspectRatio} imageUrl={ctaImages[1]?.imageUrl} />
            </div>
            {loading ? <ProductContainer /> : <div className={`${styles.imageGrid}`}>
                {productsImages.map((image, index) =>
                    <img key={index} className={`${styles.productImage}`} src={image} />
                )}
            </div>}
        </div>
    );
}
export default AboutView; 
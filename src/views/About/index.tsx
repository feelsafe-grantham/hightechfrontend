
import Breadcrum from "../../components/common/Breadcrum";
import ImageCta from "../../components/common/ImageCta";
import MainHeading from "../../components/common/MainHeading";
import ProductContainer from "../../components/common/Shimmer/ProductContainer";
import styles from "./AboutView.module.css"
import useAboutView from "./useAboutView";
import ProductImages from "../../components/common/ProductImages";
import PageSeo from "../../components/common/PageSeo";
import CoverImageShimmer from "../../components/common/Shimmer/CoverImageShimmer";
const AboutView = () => {
    const { vLoading, videoUrl, loading, oneHalfRatio, oneRatio, team, productsImages,
        threeRatio, } = useAboutView();

    return (
        <>
            <PageSeo
                title="About High Tech Window Blinds by Vishal Interior - Delhi Manufacturer"
                description="Learn about High Tech Window Blinds by Vishal Interior, the leading window blinds manufacturer in Delhi, offering quality and custom solutions."
                url="https://hightechwindowblinds.in/about"
                canonicalUrl="https://hightechwindowblinds.in/about"
                keywords=""
            />
            <div className={`${styles.aboutView}`}>
                {vLoading ? <CoverImageShimmer /> : <Breadcrum videoUrl={videoUrl} fallback="/images/aboutFallback.jpg" />}
                <MainHeading />
                <div className={`${styles.ownerSection}`}>
                    <h2 className={`${styles.sectionHeading}`}>About Us</h2>
                    <p className={`${styles.sectionDescription}`}>Know more about our Owner</p>

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
                        With a passion for excellence and years of experience, our founder leads with integrity, vision, and a dedication to quality that defines everything we do.
                    </p>
                </div>
                <div className={`${styles.teamSection}`}>
                    <h2 className={`${styles.sectionHeading}`}>Our Team</h2>
                    <p className={`${styles.sectionDescription}`}>Meet our expert team</p>
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
                    <p className={`${styles.sectionDescription}`}>Built on trust. Powered by innovation.</p>
                    <p className={`${styles.legacyPara}`}>
                        For over 17 years, we’ve been shaping spaces and redefining comfort. As India’s leading window blind manufacturer, our legacy is one of craftsmanship, dedication, and an unwavering commitment to quality.

                        Driven by a passion to enhance interiors, we continue to set benchmarks in design and functionality. Our journey is a reflection of the values we stand for—precision, performance, and people-first service.
                    </p>
                </div>
                <div className={`${styles.galleryContainer}`}>
                    <div className={`${styles.col2Grid}`} >
                        <ImageCta imageUrl={oneHalfRatio[0]?.imageUrl} aspectRatio={oneHalfRatio[0]?.aspectRatio} />
                        <ImageCta imageUrl={oneRatio[0]?.imageUrl} aspectRatio={oneRatio[0]?.aspectRatio} />
                    </div>
                    <ImageCta aspectRatio={threeRatio[0]?.aspectRatio} imageUrl={threeRatio[0]?.imageUrl} />
                </div>
                {loading ? <ProductContainer /> : <ProductImages productsImages={productsImages} />}
            </div>
        </>
    );
}
export default AboutView; 
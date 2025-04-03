import CoverImage from "../../components/common/CoverImage";
import styles from "./AboutView.module.css"
const AboutView = () => {
    const team = [
        {
            name: "Mr Rahul",
            image: "/images/rahul.png",
            designation: "Accountant",
        },
        {
            name: "Ms Divya",
            image: "/images/divya.png",
            designation: "Operations Executive",
        },
        {
            name: "Ms Pinky",
            image: "/images/pinky.png",
            designation: "Sales Represntative",
        },
        {
            name: "Ms Anjali",
            image: "/images/anjali.png",
            designation: "Sales Represntative",
        },
        {
            name: "Ms Komal",
            image: "/images/komal.png",
            designation: "Sales Head",
        },

    ]
    const products = [
        "/images/product1.png",
        "/images/product2.png",
        "/images/product3.png",
        "/images/product4.png",
        "/images/product1.png",
        "/images/product2.png",
        "/images/product3.png",
        "/images/product4.png",
        "/images/product1.png",
        "/images/product2.png",
        "/images/product3.png",
        "/images/product4.png",
    ]

    return (
        <div className={`${styles.aboutView}`}>
            <CoverImage imgUrl="/images/home1.png" />
            <div className={`${styles.headingContainer}`}>
                <h2 className={`${styles.heading}`}>
                    India's No 1 Window <br />
                    <span className={`${styles.headingSpan}`}>Blinds Manufacturer</span>
                </h2>
            </div>
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
                    {team.map((member, index) => <div key={index} className={`${styles.memberImageContainer}`}>
                        <img className={`${styles.memberImage}`} src={member?.image} alt={member?.name} />
                        <div className={`${styles.memberInfo}`}>
                            <p className={`${styles.memberName}`}>{member?.name}</p>
                            <p className={`${styles.memberDesignatino}`}>{member?.designation}</p>
                        </div>
                    </div>)}
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
                    <img className={`${styles.img1Col2Grid}`} src="/images/rect1.png" alt="aman" />
                    <img className={`${styles.img2Col2Grid}`} src="/images/rect2.5.png" alt="aman" />
                </div>
                <div className={`${styles.coverImageContainer}`}>
                    <img className={`${styles.coverImage}`} src="/images/home3.png" alt="" />
                </div>
                <div className={`${styles.imageGrid}`}>
                    {
                        products.map((image, index) =>
                            <img key={index} className={`${styles.productImage}`} src={image} />
                        )}
                </div>
            </div>
        </div>
    );
}
export default AboutView; 
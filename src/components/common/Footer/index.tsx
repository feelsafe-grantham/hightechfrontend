import { Link } from "react-router-dom";
import styles from "./Footer.module.css"
import { ContactData } from "../../../utils/Data";
const Footer = () => {
    const chips = [
        "Affordable Widonw Blinds",
        "Premium Blinds",
        "Eco friendly Blinds",
        "Wooden Widonw Blinds",
        "Office Widonw Blinds",
        "Smart Widonw Blinds",
        "Zebra Widonw Blinds",
    ]
    return (
        <div className={`${styles.footerWrapper}`}>
            <div className={`${styles.footerContainer}`}>
                <div className={`${styles.topBar}`}>
                    <div className={`${styles.row1}`}>
                        <h3 className={`${styles.colHeading} ${styles.companyName}`}>Hightech Windows Blind</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat aliquam exercitationem,
                        </p>
                        <div className={`${styles.socialIconContainer}`}>
                            <a href={ContactData.instagramlink}>
                                <img className={`${styles.socialIcon}`} src="/images/instagram.png" alt="instagram" />
                            </a>
                            <a href={ContactData.xlink}>
                                <img className={`${styles.socialIcon}`} src="/images/x.png" alt="x" />
                            </a>
                            <a href={ContactData.facebooklink}>
                                <img className={`${styles.socialIcon}`} src="/images/facebook.png" alt="facebook" />
                            </a>
                        </div>
                    </div>
                    <div className={`${styles.row2}`}>
                        <h3 className={`${styles.colHeading}`}>Quick Links</h3>
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/products">Products</Link>
                        <Link to="/blogs">Blogs</Link>
                        <Link to="/contact">Contact</Link>
                    </div>
                    <div className={`${styles.row3}`}>
                        <div>
                            <h3 className={`${styles.colHeading}`}>Contact Us</h3>
                            <div className={`${styles.contactInfo}`}>
                                <p className={`${styles.contactContainer}`}>
                                    <a href={`tel:${ContactData.phone1}`}>{ContactData.phone1}</a>,
                                    <a href={`tel:${ContactData.phone2}`}>{ContactData.phone2}</a>
                                </p>
                                <p className={`${styles.contactContainer}`}>
                                    <a href={`tel:${ContactData.phone1}`}>{ContactData.phone1}</a>,
                                    <a href={`tel:${ContactData.phone2}`}>{ContactData.phone2}</a>
                                </p>
                            </div>

                        </div>
                        <div>
                            <h3 className={`${styles.colHeading}`}>Mail Us at</h3>
                            <div className={`${styles.contactInfo}`}>
                                <a href={`mailto:${ContactData.email}`}>{ContactData.email}</a>

                            </div>
                        </div>

                    </div>
                </div>
                <div className={`${styles.midBar}`}>
                    {chips.map((chip, index) => <span key={index} className={`${styles.footerChip}`}>{chip}</span>)}
                </div>
                <div className={`${styles.bottomBar}`}>
                    <span className={`${styles.companyUsername} ${styles.bottomLink}`}>@hightech</span>
                    <div className={`${styles.termsContainer} ${styles.bottomLink}`}>
                        <Link to={"#"}>Terms of service</Link>
                        <Link to={""}>Privacy Policy</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
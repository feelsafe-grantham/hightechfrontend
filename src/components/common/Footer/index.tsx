import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
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
        <footer className={`${styles.footerWrapper}`}>
            <img src="/images/truck.gif" alt="footer-bg" className={`${styles.footerTruck}`} />
            <div className={`${styles.footerContainer}`}>
                <section className={`${styles.topBar}`}>
                    <div className={`${styles.row1}`}>
                        <h3 className={`${styles.colHeading} ${styles.companyName}`}>Hightech Windows Blind</h3>
                        <p className={`${styles.companyDescription}`}>
                            We are dealing in various types of window blinds and delivering all over in India.
                        </p>
                        <div className={`${styles.socialIconContainer}`}>
                            <a href={ContactData.instagramlink} target="_blank" aria-label="Follow us on Instagram">
                                <img className={`${styles.socialIcon}`} src="/images/instagram.png" alt="instagram logo" />
                            </a>
                            <a href={ContactData.youtubelink} target="_blank" aria-label="Follow us on X">
                                <img className={`${styles.socialIcon}`} src="/images/youtube.png" alt="x logo" />
                            </a>
                            <a href={ContactData.facebooklink} target="_blank" aria-label="Like us on Facebook">
                                <img className={`${styles.socialIcon}`} src="/images/facebook.png" alt="facebook logo" />
                            </a>
                        </div>
                    </div>
                    <div className={`${styles.row2}`}>
                        <h3 className={`${styles.colHeading}`}>Quick Links</h3>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/brochure">Brochure</Link>
                            </li>
                            <li>
                                <Link to="/blog">Blogs</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
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
                </section>
                <section className={`${styles.midBar}`}>
                    {chips.map((chip, index) => <span key={index} className={`${styles.footerChip}`}>{chip}</span>)}
                </section>
                <section className={`${styles.bottomBar}`}>
                    <span className={`${styles.companyUsername} ${styles.bottomLink}`}>@hightech</span>
                    <div className={`${styles.termsContainer} ${styles.bottomLink}`}>
                        <Link to={"#"} title="Read our Terms of Service">Terms of service</Link>
                        <Link to={"#"} title="Read our Privacy Policy">Privacy Policy</Link>
                    </div>
                </section>
                <section className={`${styles.bottomcontainer}`}>
                    <div className={`${styles.companyUsername} ${styles.bottomLink}
                    `}>
                        <span>Build with class</span>{" "}
                        <Link className={`${styles.buildByLink}`} rel="noopener" target="_blank" to={"https://feelsafemarkone.com"} >@feelsafemarkone</Link></div>
                </section>
            </div>
        </footer>
    )
}

export default Footer;
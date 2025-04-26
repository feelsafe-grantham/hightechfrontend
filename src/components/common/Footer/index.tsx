import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import { ContactData } from "../../../utils/Data";
const Footer = () => {
  const chips = [
    "Roller Blinds",
    "Vertical Blinds",
    "Venetian Blinds",
    "Roman Blinds",
    "Zebra Blinds (Dual or Day-Night Blinds)",
    "Honeycomb Blinds (Cellular Shades)",
    "Panel Blinds",
    "Wooden Blinds",
    "Bamboo Blinds",
    "Motorized Blinds"
  ];
  return (
    <footer className={`${styles.footerWrapper}`}>
      <img
        src="/images/truck.gif"
        alt="footer-bg"
        className={`${styles.footerTruck}`}
      />
      <div className={`${styles.footerContainer}`}>
        <section className={`${styles.topBar}`}>
          <div className={`${styles.row1}`}>
            <h3 className={`${styles.colHeading} ${styles.companyName}`}>
              Hightech Windows Blind
            </h3>
            <p className={`${styles.companyDescription}`}>
              Serving 2000+ dealers across India for over 17 years | We offer modern blinds and customizable options.
            </p>
            <div className={`${styles.socialIconContainer}`}>
              <a
                href={ContactData.instagramlink}
                target="_blank"
                aria-label="Follow us on Instagram"
              >
                <img
                  className={`${styles.socialIcon}`}
                  src="/images/instagram.png"
                  alt="instagram logo"
                />
              </a>
              <a
                href={ContactData.youtubelink}
                target="_blank"
                aria-label="Follow us on X"
              >
                <img
                  className={`${styles.socialIcon}`}
                  src="/images/youtube.png"
                  alt="x logo"
                />
              </a>
              <a
                href={ContactData.facebooklink}
                target="_blank"
                aria-label="Like us on Facebook"
              >
                <img
                  className={`${styles.socialIcon}`}
                  src="/images/facebook.png"
                  alt="facebook logo"
                />
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
                  <a href={`tel:${ContactData.phone1}`}>{ContactData.phone1}</a>
                  ,
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
          {chips.map((chip, index) => (
            <span key={index} className={`${styles.footerChip}`}>
              {chip}
            </span>
          ))}
        </section>
        <section className={`${styles.bottomBar}`}>
          <span className={`${styles.companyUsername} ${styles.bottomLink}`}>
            &copy; hightechwindowblinds.in
          </span>
          <div className={`${styles.termsContainer} ${styles.bottomLink}`}>
            <Link to={"/terms-of-service"} title="Read our Terms of Service">
              Terms of service
            </Link>
            <Link to={"/privacy-policy"} title="Read our Privacy Policy">
              Privacy Policy
            </Link>
          </div>
        </section>
        <section className={`${styles.bottomcontainer}`}>
          <div
            className={`${styles.companyUsername} ${styles.bottomLink}`}
          >
            <span>Build with class</span>{" "}
            <Link
              className={`${styles.buildByLink}`}
              rel="noopener"
              target="_blank"
              to={"https://feelsafemarkone.com"}
            >
              @feelsafemarkone
            </Link>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;

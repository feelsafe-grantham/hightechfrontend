
import Form from "../../components/common/Form";
import { ContactData } from "../../utils/Data";
import styles from "./Contact.module.css"
const ContactView = () => {
    return (
        <div className={`${styles.contactView}`}>
            <div className={`${styles.addressContainer}`}>
                <div className={`${styles.address}`}>
                    <div className={`${styles.cta}`}>
                        <p className={`${styles.ctaText} ${styles.ctaText1}`}>India's No.1</p>
                        <p className={`${styles.ctaText} ${styles.ctaText2}`}>Manufacture</p>
                        <p className={`${styles.ctaText} ${styles.ctaText3}`}>Window Blinds</p>
                        <p className={`${styles.ctaText} ${styles.ctaText4}`}>Get in touch with us</p>
                    </div>
                    <div className={`${styles.writtenAddress}`}>
                        <h5 className={`${styles.addressHead}`}>Our Office</h5>
                        <p className={`${styles.contactInfo}`}>
                            A-869,Basement, Ramphal Chowk Road ,
                            Chandar Vihat Block B , Sector-7 Dwarka  New Delhi  110075
                        </p>
                    </div>
                    <div className={`${styles.writtenAddress}`}>
                        <h5 className={`${styles.addressHead}`}>Contact us at</h5>
                        <p className={`${styles.contactInfo}`}>
                            <a href={`tel:${ContactData.phone1}`}>
                                {ContactData.phone1}
                            </a>,
                            <a href={`tel:${ContactData.phone1}`}>
                                {ContactData.phone1}
                            </a>
                        </p>
                        <p className={`${styles.contactInfo}`}>
                            <a href={`mailto:${ContactData.email}`}>
                                {ContactData.email}
                            </a>
                        </p>
                    </div>
                </div>
                <div className={`${styles.formContainer}`}>
                    <Form />
                </div>
            </div>

            <div className={`${styles.mapContainer}`}>
                <iframe
                    className={`${styles.map}`}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.2698770932325!2d77.19160719999999!3d28.6516369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d029c5f769541%3A0xd28083094a50b672!2sHigh%20Tech%20Window%20Blinds%20-%20Vishal%20Sales%20Corporation!5e0!3m2!1sen!2sin!4v1743678610078!5m2!1sen!2sin"
                    width="100%" height="400"
                    loading="lazy"
                >
                </iframe>
            </div>
        </div>
    )
}

export default ContactView;
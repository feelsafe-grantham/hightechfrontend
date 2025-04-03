import { ContactData } from "../../../utils/Data";
import styles from "./ContactCta.module.css"
import Form from "../Form";
const ContactCta = () => {
    return (<div className={`${styles.ctaContainer}`}>
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
    </div>)
}

export default ContactCta;
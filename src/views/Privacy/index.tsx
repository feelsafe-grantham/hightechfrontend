import styles from "./Privacy.module.css";
import { ContactData } from "../../utils/Data";
import PageSeo from "../../components/common/PageSeo";

const Privacy = () => {
    return (
        <div className={styles.privacyContainer}>
            <PageSeo
                title="Privacy Policy - High Tech Window Blinds"
                description="Read our Privacy Policy to understand how we collect, use, and protect your personal information."
            />
            <div className={styles.privacyContent}>
                <h1>Privacy Policy</h1>
                <div className={styles.section}>
                    <h2>1. Information We Collect</h2>
                    <p>
                        We collect information that you provide directly to us, including your name, email address, phone number,
                        and address when you request our services. We also collect information about your window treatment preferences
                        and installation requirements.
                    </p>
                </div>
                <div className={styles.section}>
                    <h2>2. How We Use Your Information</h2>
                    <p>
                        We use the information we collect to provide, maintain, and improve our services, communicate with you about
                        your orders, and send you updates about our products and services. We may also use your information for
                        internal analytics and to comply with legal obligations.
                    </p>
                </div>
                <div className={styles.section}>
                    <h2>3. Information Sharing</h2>
                    <p>
                        We do not sell or rent your personal information to third parties. We may share your information with
                        service providers who assist us in operating our business, such as installation teams and payment processors.
                        These third parties are required to maintain the confidentiality of your information.
                    </p>
                </div>
                <div className={styles.section}>
                    <h2>4. Data Security</h2>
                    <p>
                        We implement appropriate security measures to protect your personal information from unauthorized access,
                        alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure,
                        and we cannot guarantee absolute security.
                    </p>
                </div>
                <div className={styles.section}>
                    <h2>5. Your Rights</h2>
                    <p>
                        You have the right to access, correct, or delete your personal information. You may also opt-out of receiving
                        marketing communications from us. To exercise these rights, please contact us using the information provided
                        below.
                    </p>
                </div>
                <div className={styles.section}>
                    <h2>6. Contact Us</h2>
                    <p>
                        If you have any questions about this Privacy Policy or our data practices, please contact us at:
                        <br />
                        Email:  order@hightechwindowblinds.in
                        <br />
                        Phone: +91 {ContactData.phone1}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Privacy;

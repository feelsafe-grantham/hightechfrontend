import PageSeo from "../../components/common/PageSeo";
import styles from "./Terms.module.css";

const Terms = () => {
    return (
        <div className={styles.termsContainer}>
            <PageSeo
                title="Terms of Service - High Tech Window Blinds"
                description="Review our Terms of Service to understand the rules and guidelines for using our services."
            />
            <div className={styles.termsContent}>
                <h1>Terms of Service</h1>
                <div className={styles.section}>
                    <h2>1. Acceptance of Terms</h2>
                    <p>
                        By accessing and using High Tech Window Blinds' services, you agree to be bound by these Terms of Service.
                        If you do not agree to these terms, please do not use our services.
                    </p>
                </div>
                <div className={styles.section}>
                    <h2>2. Services Description</h2>
                    <p>
                        High Tech Window Blinds provides window treatment solutions, including consultation, installation,
                        and maintenance services. All services are subject to availability and may be modified or discontinued
                        at our discretion.
                    </p>
                </div>
                <div className={styles.section}>
                    <h2>3. User Responsibilities</h2>
                    <p>
                        Users are responsible for providing accurate information and maintaining the confidentiality of their
                        account credentials. Any misuse of our services may result in termination of access.
                    </p>
                </div>
                <div className={styles.section}>
                    <h2>4. Intellectual Property</h2>
                    <p>
                        All content, designs, and materials provided through our services are the property of High Tech Window Blinds
                        and are protected by intellectual property laws.
                    </p>
                </div>
                <div className={styles.section}>
                    <h2>5. Limitation of Liability</h2>
                    <p>
                        High Tech Window Blinds shall not be liable for any indirect, incidental, special, or consequential damages
                        arising from the use of our services.
                    </p>
                </div>
                <div className={styles.section}>
                    <h2>6. Changes to Terms</h2>
                    <p>
                        We reserve the right to modify these terms at any time. Continued use of our services after changes
                        constitutes acceptance of the modified terms.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Terms;

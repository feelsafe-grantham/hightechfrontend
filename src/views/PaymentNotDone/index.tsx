import styles from "./PaymentNotDone.module.css";
const PaymentNotDone = () => {
    return (
        <div className={styles.container}>
            <div className={styles.messageBox}>
                <h1 className={styles.title}>Service Temporarily Suspended</h1>
                <p className={styles.message}>
                    Access to this website has been temporarily disabled due to a billing issue.
                </p>
                <p className={styles.secondary}>
                    यदि कोई परेशानी हो तो संपर्क करें 📞
                </p>
            </div>
        </div>

    );

}
export default PaymentNotDone;
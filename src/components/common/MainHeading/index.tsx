import styles from "./MainHeading.module.css"
const MainHeading =
    ({ line1 = "India's No 1 Window", line2 = "Blinds Manufacturer" }
        :
        { line1?: string, line2?: string }) => {
        return (<div className={`${styles.headingContainer}`}>
            <h3 className={`${styles.heading}`}>
                {line1} <br />
                <span className={`${styles.headingSpan}`}>{line2}</span>
            </h3>
        </div>
        )
    }
export default MainHeading;
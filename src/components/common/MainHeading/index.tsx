import styles from "./MainHeading.module.css"
import { useEffect, useState } from "react";
const MainHeading = (
    { line1 = "India's No 1 Window", line2 = "Blinds Manufacturer" }
        :
        { line1?: string, line2?: string }) => {
    const [isTheme1, setIsTheme1] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => setIsTheme1(prev => !prev), 1000);
        return () => clearInterval(interval);
    }, []);
    return (

        <div className={`${styles.headingContainer}`}>
            <h1 className={`${styles.heading} ${isTheme1 ? styles.theme1 : styles.theme2}`}>
                {line1} <br />
                <span className={`${styles.headingSpan}`}>{line2}</span>
            </h1>
        </div>
    )
}
export default MainHeading;
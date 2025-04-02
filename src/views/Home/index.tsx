import Form from "../../components/common/Form";
import styles from "./Home.module.css"
import { useState } from "react";
const HomeView = () => {
    const chips = [
        "Zebra Blinds",
        "Bamboo Blinds",
        "Bamboo Chick",
        "Triple Shade",
        "Honeycomb",
        "Skylight",
        "Motorized",
    ]
    const [activeChip, setChip] = useState("Zebra Blinds");
    const handleChipClick = (chip: string) => {
        setChip(chip);
    }
    return (
        <div className={`${styles.homeView}`}>
            <div className={`${styles.coverImageContainer}`}>
                <img className={`${styles.coverImage}`} src="/images/home4.png" alt="This is alt for here" />
            </div>
            <div className={`${styles.productImageContainer}`}>
                <img className={`${styles.productImage}`} src="/images/home1.png" alt="" />
                <img className={`${styles.productImage}`} src="/images/home1.png" alt="" />
                <img className={`${styles.productImage}`} src="/images/home1.png" alt="" />
            </div>
            <div className={`${styles.chipsContainer}`}>
                {chips.map((chip, index) =>
                    <span
                        key={index}
                        className={`${styles.chip} ${activeChip === chip ? styles.chipActive : ""}`}
                        onClick={() => handleChipClick(chip)}>{chip}</span>)
                }
            </div>
            <div className={`${styles.headingContainer}`}>
                <h2 className={`${styles.heading}`}>
                    India's No 1 Window <br />
                    <span className={`${styles.headingSpan}`}>Blinds Manufacturer</span>
                </h2>
            </div>
            <div className={`${styles.ctaContainer}`}>
                <div>

                </div>
                <Form />
            </div>
        </div>
    );
}


export default HomeView;
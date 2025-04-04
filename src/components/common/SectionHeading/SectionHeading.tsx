import styles from "./SectionHeading.module.css";

const SectionHeading = ({ heading, description }: { heading: string, description: string }) => {
    return (
        <div className={`${styles.sectionHeadingContainer}`}>
            <h2 className={`${styles.sectionHeading}`}>{heading}</h2>
            <p className={`${styles.sectionDescription}`}>{description}</p>
        </div>
    )
}

export default SectionHeading;
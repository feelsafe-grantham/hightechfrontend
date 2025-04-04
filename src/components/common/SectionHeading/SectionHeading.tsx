import styles from "./SectionHeading.module.css";

const SectionHeading = ({ heading, description }: { heading: string, description: string }) => {
    return (
        <>
            <h2 className={`${styles.sectionHeading}`}>{heading}</h2>
            <p className={`${styles.sectionDescription}`}>{description}</p>
        </>
    )
}

export default SectionHeading;
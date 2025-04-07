import styles from "./ImageCta.module.css"
interface ImageCtaProps {
    imageUrl?: string;
    text?: string;
    subText?: string;
    aspectRatio?: "31" | "21" | "11";
}

const ImageCta = ({ imageUrl = "/images/home1.png", text = "", subText = '', aspectRatio = "21" }: ImageCtaProps) => {
    const ratioClass = aspectRatio === "21" ? styles.ratio21 : aspectRatio === "11" ? styles.ratio1 : styles.ratio31;
    return (
        <div className={`${styles.hotProductsContainer}`}>
            <img className={`${styles.hotProductImage} ${ratioClass}`} src={imageUrl} alt="" />
            <p className={`${styles.hotCta}`}>{text ? text : ""}<br /> <span className={`${styles.hotCtaSpan}`}>{subText ? subText : ""}</span>
            </p>
        </div>
    );
}

export default ImageCta;
import styles from "./ImageCta.module.css"
interface ImageCtaProps {
    imageUrl?: string;
    text?: string;
    subText?: string;
    aspectRatio?: "31" | "21" | "15" | "11";
}

const ImageCta = ({ imageUrl = "/imags/home1.png", text = "", subText = '', aspectRatio = "21" }: ImageCtaProps) => {
    const ratioClass = aspectRatio === "31" ? styles.ratio31 : aspectRatio === "21" ? styles.ratio21 : aspectRatio === "15" ? styles.ratio15 : styles.ratio11
    return (
        <div className={`${styles.hotProductsContainer}`}>
            <img className={`${styles.hotProductImage} ${ratioClass}`} src={imageUrl} alt="" />
            <p className={`${styles.hotCta}`}>{text ? text : ""}<br /> <span className={`${styles.hotCtaSpan}`}>{subText ? subText : ""}</span>
            </p>
        </div>
    );
}

export default ImageCta;
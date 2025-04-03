import styles from "./CoverImage.module.css"
const CoverImage = ({ imgUrl }: { imgUrl: string }) => {
    return (
        <div className={`${styles.coverImageContainer}`}>
            <img className={`${styles.coverImage}`} src={imgUrl} alt="This is alt for here" />
        </div>
    )
}

export default CoverImage;
import styles from "./Breadcrum.module.css"
const Breadcrum = ({ imgUrl }: { imgUrl: string }) => {
    return (
        <div className={`${styles.coverImageContainer}`}>
            <img className={`${styles.coverImage}`} src={imgUrl} alt="This is alt for here" />
        </div>
    )
}

export default Breadcrum;
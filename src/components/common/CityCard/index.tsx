import { Link } from "react-router-dom";
import styles from "./CityCard.module.css"
const CityCard = ({ cityCard }: any) => {

    return (
        <Link key={cityCard?.id} to={`/${cityCard.url}`} className={styles.card}>
            <div className={styles.imageWrapper}>
                <img src={cityCard.image} alt={cityCard.label} />
            </div>
            <button className={styles.label}>
                {cityCard.label}
            </button>
        </Link>
    )
}

export default CityCard;
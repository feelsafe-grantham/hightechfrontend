import { Link } from "react-router-dom";
import styles from "./CityCard.module.css"
const CityCard = ({ cityCard }: any) => {

    return (
        <div className={styles.card}>
            <img src={cityCard.image} alt="" />
            <Link to={`/${cityCard.url}`}> {cityCard.label}</Link>
        </div>
    )
}

export default CityCard;
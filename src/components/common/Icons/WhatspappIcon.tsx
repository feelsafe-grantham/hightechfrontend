import { Link } from "react-router-dom";
import styles from "./Icon.module.css"
import { ContactData } from "../../../utils/Data";
const WhatsappIcon = () => {
    return (
        <Link to={`https://wa.me/${ContactData.phone1}`} className={`${styles.iconContainer}`}>
            <img className={`${styles.icon}`} src="/images/whatsapp.png" />
        </Link>
    )
}

export default WhatsappIcon;
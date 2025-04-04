import styles from "./Topstrip.module.css"
import { ContactData } from "../../../utils/Data";
const Topstrip = () => {
    return (
        <div className={`${styles.stripContainer}`}>
            <div>

                <a className={`${styles.stripfont}`} href={`mailto:${ContactData.email}`}>{ContactData.email}</a>
            </div>
            |
            <div className="flex gap-1">
                <a className={`${styles.stripfont}`} href={`tel:${ContactData.phone1}`}>+91-{ContactData.phone1},</a>
                <a className={`${styles.stripfont} ${styles.phone2}`} href={`tel:${ContactData.phone2}`}>+91-{ContactData.phone2}</a>
            </div>
        </div>)
}

export default Topstrip;
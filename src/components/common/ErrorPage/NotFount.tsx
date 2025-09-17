import styles from "./ErrorPage.module.css"
import { Link } from "react-router-dom"
const NotFound = () => {
    return <div className={styles.wrapper}>
        <div className={styles.container}>
            <h1 className={styles.code}>404</h1>
            <h2 className={styles.title}>Oops! Page not found</h2>
            <p className={styles.message}>
                The page you are looking for might have been removed, had its name changed, or is
                temporarily unavailable.
            </p>
            <Link to="/" className={styles.button}>
                Go to Homepage
            </Link>
        </div>
    </div>
}
export default NotFound

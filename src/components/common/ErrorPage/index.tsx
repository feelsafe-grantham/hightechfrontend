import styles from "./ErrorPage.module.css"
import { Link } from "react-router-dom"
const ErrorPage = () => {
    return <div className={styles.wrapper}>
        <div className={styles.container}>
            <h1 className={styles.code}>500</h1>
            <h2 className={styles.title}>Something went wrong</h2>
            <p className={styles.message}>
                We're having trouble loading the data. This might be due to a server error or a network issue. Please try again later.
            </p>
            <Link to="/" className={styles.button}>
                Go to Homepage
            </Link>
        </div>
    </div>
}
export default ErrorPage
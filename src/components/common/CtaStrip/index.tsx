
import styles from './CtaStrip.module.css';

const CtaStrip = () => {
    return (
        <div className={styles.ctaContent}>
            <span className={styles.ctaText}>India`s No-1 Window blinds manufacturer</span>
            <div className={styles.ctaTextContainer}>
                <span> Since 2006 </span>
                |
                <span>✅2000+ Verified Dealers</span>
                |
                <span>🔥Lowest Price Promise & 🌎PAN India Delivery</span>

            </div>
        </div>
    );
};

export default CtaStrip;

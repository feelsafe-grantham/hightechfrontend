import { AboutPageData, AboutSection } from '../../../types/contentTypes';
import styles from './WindowsBlindsHome.module.css';

export default function LocationComponent({ data }: { data: AboutPageData }) {

    return (
        <div className={styles.page}>
            {/* --- Hero --- */}
            <section className={styles.heroWrapper}>
                <img
                    src={data.banner_img}
                    alt="Living room with blinds"
                    className={styles.heroImage}
                />

                <div className={styles.overlayContent}>
                    <h1 className={styles.mainHeading}>{data.banner_heading}</h1>
                    <h2 className={styles.subHeading}>{data.banner_text}</h2>

                    <div className={styles.contactStrip}>
                        <a href={`tel:+91${data.banner_contact_1}`}>+91-{data.banner_contact_1}</a>
                        <span>|</span>
                        <a href={`tel:+91${data.banner_contact_2}`}>+91-{data.banner_contact_2}</a>
                    </div>
                </div>
            </section>

            {/* --- Intro paragraphs ---*/}
            <section className={styles.intro}>
                <p className={styles.introPara}>{data.description_1}</p>
                <p className={styles.introPara}>{data.description_2}</p>
            </section>
            {data.about_sec && data.about_sec.map((data: AboutSection, idx: number) =>
            (<section key={idx} className={styles.about}>
                <div className={styles.aboutMedia}>
                    <img
                        src={data.about_image}
                        alt="Hightech Windows Blinds storefront"
                        className={styles.aboutImg}
                    />
                </div>

                <div className={styles.aboutText}>
                    <h2>About <span className={styles.brand}>Hightech</span>
                    </h2>
                    <h3 className={styles.smallHeading}>Windows Blinds Manufacturer</h3>
                    <p className={`${styles.aboutPara}`}>
                        {data.about_para_1}
                    </p>
                    <p className={`${styles.aboutPara}`}>
                        {data.about_para_2}
                    </p>
                </div>


            </section>))}

            {/* --- About section --- */}


            {/* --- Gallery --- */}
            <section className={`${styles.imageContainer}`}>
                {data.page_images.map((img) => (<img className={`${styles.image}`} src={img} alt="image" />))}
            </section>

        </div>
    );
}

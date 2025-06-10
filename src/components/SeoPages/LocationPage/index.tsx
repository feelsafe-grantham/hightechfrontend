import styles from './WindowsBlindsHome.module.css';

export default function WindowsBlindsHome() {
    return (
        <main className={styles.page}>
            {/* --- Hero --- */}
            <section className={styles.heroWrapper}>
                <img
                    src="/images/banner3.jpg"
                    alt="Living room with blinds"
                    className={styles.heroImage}
                />

                <div className={styles.overlayContent}>
                    <h1 className={styles.mainHeading}>Delhi NCR No. 1</h1>
                    <h2 className={styles.subHeading}>Windows Blinds Manufacturer</h2>

                    <div className={styles.contactStrip}>
                        <a href="tel:+919220377272">+91-9220377272</a>
                        <span>|</span>
                        <a href="tel:+919990587916">+91-9990587916</a>
                    </div>
                </div>
            </section>

            {/* --- Intro paragraphs ---------------------------------------------- */}
            <section className={styles.intro}>
                <p className={styles.introPara}>
                    Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has
                    been the industry's standard dummy text ever since the 1500s, when an unknown printer
                    took a galley of type and scrambled it to make a type specimen book. It has survived not
                    only five centuries …
                </p>
                <p className={styles.introPara}>
                    Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has
                    been the industry's standard dummy text ever since the 1500s …
                </p>
            </section>

            {/* --- About section -------------------------------------------------- */}
            {/* <section className={styles.about}>
                <div className={styles.aboutMedia}>
                    <img
                        src="/images/storefront.jpg"
                        alt="Hightech Windows Blinds storefront"
                        width={420}
                        height={320}
                        className={styles.aboutImg}
                    />
                </div>

                <div className={styles.aboutText}>
                    <h2>
                        About <span className={styles.brand}>Hightech</span>
                    </h2>
                    <h3 className={styles.smallHeading}>Windows Blinds Manufacturer</h3>
                    <p>
                        Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum
                        has been the industry's standard dummy text ever since the 1500s …
                    </p>
                    <p>
                        Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum
                        has been the industry's standard dummy text ever since the 1500s …
                    </p>
                </div>
            </section> */}

            {/* --- Product gallery ------------------------------------------------ */}
            {/* <section className={styles.gallery}>
                {[
                    { src: '/images/machine.jpg', alt: 'Manufacturing machine' },
                    { src: '/images/pattern.jpg', alt: 'Patterned blinds' },
                    { src: '/images/venetian.jpg', alt: 'Venetian blinds' },
                ].map(({ src, alt }) => (
                    <img
                        key={src}
                        src={src}
                        alt={alt}
                        width={400}
                        height={300}
                        className={styles.galleryImg}
                    />
                ))}
            </section> */}
        </main>
    );
}

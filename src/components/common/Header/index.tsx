import styles from "./Header.module.css"
import { NavLink } from "react-router-dom"
const Header = () => {
    const links = [
        { label: "Home", url: "/", },
        { label: "About", url: "/about", },
        { label: "Brochure", url: "/brochure", },
        { label: "Blogs", url: "/blog", },
        { label: "Contact", url: "/contact", },
    ]
    return (
        <div className={`${styles.headerContainer}`}>
            <div className={`${styles.logoContainer}`}>
                <NavLink to="/">
                    <img
                        src="/images/logo.png"
                        alt="High Tech Window Blinds by Vishal Interior"
                        className={`${styles.logo} ${styles.logoheight}`}
                    />
                </NavLink>
            </div>
            <div className={`${styles.headerLinksContainer}`}>
                {links.map((link) => (
                    <NavLink
                        key={link.label}
                        to={link.url}
                        className={({ isActive }) =>
                            isActive ? `${styles.headerLink} ${styles.linkActive}` : styles.headerLink}
                    >
                        {link.label}
                    </NavLink>
                ))}
            </div>
            <div className={`${styles.offerStripContainer}`}>
                <img
                    src="/images/offer.png"
                    alt="High Tech Window Blinds by Vishal Interior"
                    className={`${styles.offerStrip} ${styles.logoheight}`}
                />
            </div>
        </div>
    )
}

export default Header;
import { useState } from "react"
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
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => setIsOpen(!isOpen)
    const closeMenu = () => setIsOpen(false)
    return (
        <div className={`${styles.headerContainer}`}>
            <div className={`${styles.hamburgerContainer}`} onClick={toggleMenu}>
                {
                    isOpen ? (
                        <img
                            src="/images/close.png"
                            alt="High Tech Window Blinds by Vishal Interior"
                            className={`${styles.hamburger} ${styles.logoheight}`}
                            onClick={closeMenu}
                        />
                    ) : (
                        <img
                            src="/images/open.png"
                            alt="High Tech Window Blinds by Vishal Interior"
                            className={`${styles.hamburger} ${styles.logoheight}`}
                            onClick={toggleMenu}
                        />
                    )}
            </div>
            <div className={`${styles.logoContainer}`}>
                <NavLink to="/">
                    <img
                        src="/images/logo.png"
                        alt="High Tech Window Blinds by Vishal Interior"
                        className={`${styles.logo} ${styles.logoheight}`}
                    />
                </NavLink>
            </div>
            <div className={`${styles.headerLinksContainer} ${isOpen ? styles.open : ""}`}>
                {links.map((link) => (
                    <NavLink
                        key={link.label}
                        to={link.url}
                        onClick={closeMenu}
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
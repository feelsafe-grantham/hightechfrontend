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
        <header className={`${styles.headerContainer}`}>
            <div className={`${styles.hamburgerContainer}`} onClick={toggleMenu}>
                {
                    isOpen ? (
                        <img
                            src="/images/close.png"
                            alt="Close menu"
                            className={`${styles.hamburger} ${styles.logoheight}`}
                            onClick={closeMenu}
                        />
                    ) : (
                        <img
                            src="/images/open.png"
                            alt="Open menu"
                            className={`${styles.hamburger} ${styles.logoheight}`}
                            onClick={toggleMenu}
                        />
                    )}
            </div>
            <div className={`${styles.logoContainer}`}>
                <NavLink to="/" >
                    <img
                        src="/images/logo.png"
                        alt="High Tech Window Blinds logo by Vishal Interior"
                        className={`${styles.logo} ${styles.logoheight}`}
                    />
                </NavLink>
            </div>
            <ul className={`${styles.headerLinksContainer} ${isOpen ? styles.open : ""}`}>
                {links.map((link) => (
                    <li key={link.label} className={`${styles.headerLink}`}>
                        <NavLink
                            to={link.url}
                            onClick={closeMenu}
                            aria-label={`Navigate to ${link.label}`}
                            className={({ isActive }) =>
                                isActive ? ` ${styles.linkActive}` : ""}
                        >
                            {link.label}
                        </NavLink>
                    </li>
                ))}
            </ul>
            <div className={`${styles.offerStripContainer}`}>
                <img
                    src="/images/offer.png"
                    alt="High Tech Window Blinds by Vishal Interior"
                    title="Offer by High tech window blinds by Vishal Interior"
                    className={`${styles.offerStrip} ${styles.logoheight}`}
                />
            </div>
        </header>
    )
}

export default Header;
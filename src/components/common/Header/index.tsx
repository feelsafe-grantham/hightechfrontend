import { useState, useEffect, useRef } from "react"
import styles from "./Header.module.css"
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { CitiesType } from "../../../types/contentTypes";
import { BASE_URL } from "../../../utils/Constants";
const Header = () => {
    const [cities, setCities] = useState<CitiesType[]>([])
    const links = [
        { label: "Home", url: "/", },
        { label: "About", url: "/about", },
        { label: "Brochure", url: "/brochure", },
        { label: "Cities", url: "/cities", subLinks: cities },
        { label: "Blogs", url: "/blog", },
        { label: "Contact", url: "/contact", },
    ]
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => setIsOpen(!isOpen)
    const closeMenu = () => setIsOpen(false)
    useEffect(() => {
        const fetchCities = async () => {
            try {
                const response = await fetch(BASE_URL + "location");
                if (!response.ok) {
                    throw new Error(`Error fetching blog: ${response.statusText}`);
                }
                const data = await response.json();
                setCities(data.data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchCities();
    }, [])

    const [hoverLink, setHoverLink] = useState<string | null>(null);
    const hoverTimeout = useRef<any>(null);

    const handleMouseEnter = (label: string) => {
        if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
        setHoverLink(label);
    };

    const handleMouseLeave = () => {
        hoverTimeout.current = setTimeout(() => {
            setHoverLink(null);
        }, 200);
    };

    const closeSubLink = () => {
        hoverTimeout.current = setTimeout(() => {
            setHoverLink(null);
        }, 200);
        setIsOpen(false);
    };

    const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);

    const toggleSubMenu = (label: string) => {
        setActiveSubMenu((prev) => (prev === label ? null : label));
    };

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1100);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
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
                <Link target="_blank" to="https://api.whatsapp.com/send?phone=+919990587916&text=Hi, I am interested in your products. Can you please share some details ?">
                    <img
                        src="/images/offer2.gif"
                        alt="High Tech Window Blinds by Vishal Interior"
                        title="Offer by High tech window blinds by Vishal Interior"
                        className={`${styles.offerStrip} ${styles.logoheight}`}
                    />
                </Link>
            </div>
        </header>
    )
}

export default Header;
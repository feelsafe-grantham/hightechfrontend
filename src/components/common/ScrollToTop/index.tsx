// ScrollToTop.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const location = useLocation();

    const scrollToTop = () => {
        // Check if we're on a product detail page
        if (location.pathname.includes('/brochure/')) {
            // Find the product detail section
            const productDetail = document.querySelector('.productDetail');
            if (productDetail) {
                // Get the element's position relative to the viewport
                const elementPosition = productDetail.getBoundingClientRect().top;
                // Calculate the offset (header height + some padding)
                const offsetPosition = elementPosition + window.pageYOffset - 100;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            } else {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                });
            }
        } else {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
    };

    useEffect(() => {
        scrollToTop();
    }, [location]);

    return null;
};

export default ScrollToTop;

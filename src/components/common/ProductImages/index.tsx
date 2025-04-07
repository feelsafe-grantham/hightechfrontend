import { useEffect, useRef, useState } from "react";
import styles from "./ProductImages.module.css"

const ProductImages = ({ productsImages }: { productsImages: string[] }) => {
    const imageGridRef = useRef<HTMLDivElement | null>(null);
    const [scrollingForward, setScrollingForward] = useState(true);

    useEffect(() => {
        const scrollInterval = setInterval(() => {
            if (imageGridRef.current) {
                const scrollWidth = imageGridRef.current.scrollWidth;
                const clientWidth = imageGridRef.current.clientWidth;

                // Check if it's scrolling forward and adjust scroll position
                if (scrollingForward) {
                    if (imageGridRef.current.scrollLeft + clientWidth >= scrollWidth) {
                        setScrollingForward(false); // Switch direction to scroll back
                    } else {
                        imageGridRef.current.scrollLeft += 2; // Scroll forward by 2px
                    }
                } else {
                    if (imageGridRef.current.scrollLeft <= 0) {
                        setScrollingForward(true); // Switch direction to scroll forward
                    } else {
                        imageGridRef.current.scrollLeft -= 2; // Scroll backward by 2px
                    }
                }
            }
        }, 30); // Adjust interval for scrolling speed

        return () => clearInterval(scrollInterval); // Clean up interval on component unmount
    }, [scrollingForward]);
    if (!productsImages) return (<div></div>)
    if (typeof productsImages === "string") return (<div></div>)
    if (productsImages.length === 0) return (<div></div>)
    return (<div ref={imageGridRef} className={`${styles.imageGrid}`}>
        {productsImages.map((image, index) =>
            <img key={index} className={`${styles.productImage}`} src={image} />
        )}
    </div>)
}
export default ProductImages;
import { useEffect, useState } from "react";
import { ProductData } from "../../utils/Data";
import { ImageCtaType, ProductCardType } from "../../types/contentTypes";
import { BASE_URL } from "../../utils/Constants";
const useHomeView = () => {
    const chips = [
        "Zebra Blinds",
        "Bamboo Blinds",
        "Bamboo Chick",
        "Triple Shade",
        "Honeycomb",
        "Skylight",
        "Motorized",
    ]

    const [activeChip, setChip] = useState("Zebra Blinds");
    const handleChipClick = (chip: string) => {
        setChip(chip);
    }

    const [products, setProducts] = useState<ProductCardType[]>(ProductData);
    const [productsImages, setProductsImages] = useState<string[]>(["/images/homeProduct1.png", "/images/homeProduct2.png", "/images/homeProduct3.png"]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [ctaImage, setCtaImage] = useState<ImageCtaType>({
        imageUrl: "/images/home1.png",
        text: "Our Hot",
        subText: "Products",
        aspectRatio: "31",
    });

    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await fetch(BASE_URL + "/products");
            if (!response.ok) {
                setError(true);
                return;
            }
            const data = await response.json();
            setProducts(data.products);
            setCtaImage(data.ctaImage);
            setProductsImages(data.productsImages);
        } catch (error) {
            setError(true);
        }
        finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        fetchData();
    }, [])

    return { chips, activeChip, handleChipClick, products, productsImages, ctaImage, loading, error }
}
export default useHomeView;
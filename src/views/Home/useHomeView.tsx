import { useEffect, useState } from "react";
import { ProductData } from "../../utils/Data";
import { ImageCtaType, ProductCardType, HeroImagesType } from "../../types/contentTypes";
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
    const [heroImage, setHeroImage] = useState("");
    const [heroImages, setHeroImages] = useState<HeroImagesType[]>(
        [
            {
                image: "/images/homeProduct1.png",
                aspectRatio: "21"
            },
            {
                image: "/images/homeProduct2.png",
                aspectRatio: "21"
            },
            {
                image: "/images/homeProduct3.png",
                aspectRatio: "21"
            },
        ]
    );
    const [products, setProducts] = useState<ProductCardType[]>(ProductData);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [ctaImage, setCtaImage] = useState<ImageCtaType>({
        imageUrl: "//home1.png",
        text: "Our Hot",
        subText: "Products",
        aspectRatio: "31",
    });

    const fetchData = async () => {
        try {

            setLoading(true);
            const response = await fetch(BASE_URL + "home/");
            if (!response.ok) {
                setError(true);
                return;
            }
            const data = await response.json().then((data) => data.data);
            setHeroImage(data.heroImage.image);
            setHeroImages(data.heroImages);
            setProducts(data.products);
            setCtaImage(data.ctaImage[0]);
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

    return { heroImage, heroImages, chips, activeChip, handleChipClick, products, ctaImage, loading, error }
}
export default useHomeView;
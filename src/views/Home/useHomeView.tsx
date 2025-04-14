import { useEffect, useState } from "react";
import { ProductData } from "../../utils/Data";
import { ImageCtaType, ProductCardType, HeroImagesType } from "../../types/contentTypes";
import { BASE_URL } from "../../utils/Constants";
const useHomeView = () => {
    const productImages: any = {
        "Zebra Blinds": [{ image: "/images/zebrablinds1.jpg" }, { image: "/images/zebrablinds2.jpg" }, { image: "/images/zebrablinds3.jpg" }],
        "Bamboo Blinds": [{ image: "/images/bambooblind1.jpg" }, { image: "/images/bambooblind2.jpg" }, { image: "/images/bambooblind3.jpg" }],
        "Bamboo Chick": [{ image: "/images/bamboochickblind1.jpg" }, { image: "/images/bamboochickblind2.jpg" }, { image: "/images/bamboochickblind3.jpg" }],
        "Triple Shade": [{ image: "/images/tripleshade1.jpg" }, { image: "/images/tripleshade2.jpg" }, { image: "/images/tripleshade3.jpg" }],
        "Honeycomb": [{ image: "/images/honeycomb1.jpg" }, { image: "/images/honeycomb2.jpg" }, { image: "/images/honeycomb3.jpg" }],
        "Skylight": [{ image: "/images/skylight1.jpg" }, { image: "/images/skylight2.jpg" }, { image: "/images/skylight3.jpg" }],
        "Motorized": [{ image: "/images/motorized1.jpg" }, { image: "/images/motorized2.jpg" }, { image: "/images/motorized3.jpg" }],
    }

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
        setHeroImages(productImages[chip]);
    }

    const [videoUrl, setVideoUrl] = useState("");
    const [heroImages, setHeroImages] = useState<HeroImagesType[]>(
        productImages[activeChip]
    );
    const [products, setProducts] = useState<ProductCardType[]>(ProductData);
    const [loading, setLoading] = useState(true);
    const [vLoading, setVLoading] = useState(true);
    const [error, setError] = useState(false);
    const [ctaImage, setCtaImage] = useState<ImageCtaType>({
        imageUrl: "/home1.jpg",
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
            setProducts(data.products);
            setCtaImage(data.ctaImage[0]);
        } catch (error) {
            setError(true);
        }
        finally {
            setLoading(false);
        }
    }

    const fetchVideo = async () => {
        try {
            setVLoading(true);
            const response = await fetch(BASE_URL + "get-hero-video/home");
            if (!response.ok) {
                setError(true);
                return;
            }
            const data = await response.json().then((data) => data.data);
            setVideoUrl(data);
        } catch (error) {
            setError(true);
        }
        finally {
            setVLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
        fetchVideo();
    }, [])

    return { vLoading, videoUrl, heroImages, chips, activeChip, handleChipClick, products, ctaImage, loading, error }
}
export default useHomeView;
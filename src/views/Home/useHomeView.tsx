import { useState } from "react";
import { ProductData } from "../../utils/Data";
import { ProductCardType } from "../../types/contentTypes";
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
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    return { chips, activeChip, handleChipClick, products }
}
export default useHomeView;
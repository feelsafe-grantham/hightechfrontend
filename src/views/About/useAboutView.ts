import { useEffect, useState } from "react";
import { BASE_URL } from "../../utils/Constants";
import { ImageCtaType, TeamMemberType } from "../../types/contentTypes";
const useAboutView = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [team, setTeam] = useState<TeamMemberType[]>([]);

  const [productsImages, setProductsImages] = useState<string[]>([
    "/images/product1.png",
    "/images/product2.png",
    "/images/product3.png",
    "/images/product4.png",
    "/images/product1.png",
    "/images/product2.png",
    "/images/product3.png",
    "/images/product4.png",
    "/images/product1.png",
    "/images/product2.png",
    "/images/product3.png",
    "/images/product4.png",
  ]);

  const [ctaImages, setCtaImages] = useState<ImageCtaType[]>([
    {
      aspectRatio: "21",
      imageUrl: "/images/home1.png",
      text: "Our Hot",
      subText: "Products",
    },
    {
      aspectRatio: "21",
      imageUrl: "/images/homeProduct1.png",
      text: "Our Hot",
      subText: "Products",
    },
    {
      aspectRatio: "21",
      imageUrl: "/images/homeProduct2.png",
      text: "Our Hot",
      subText: "Products",
    },
    {
      aspectRatio: "21",
      imageUrl: "/images/homeProduct3.png",
      text: "Our Hot",
      subText: "Products",
    },
  ]);
  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(BASE_URL + "about/");
      if (!response.ok) {
        setError(true);
        return;
      }
      const data = await response.json().then((data) => data.data);

      setTeam(data.team);
      setCtaImages(data.ctaImage);
      setProductsImages(data.product_image);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    team,
    ctaImages,
    productsImages,
    loading,
    error,
  };
};
export default useAboutView;

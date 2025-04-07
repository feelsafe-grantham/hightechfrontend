import { useEffect, useState } from "react";
import { BASE_URL } from "../../utils/Constants";
import { ImageCtaType, TeamMemberType } from "../../types/contentTypes";
import { getLimitedImages } from "../../utils/helper";
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

  const [twoRatio, setTwoRatio] = useState<ImageCtaType[]>([]);
  const [threeRatio, setThreeRatio] = useState<ImageCtaType[]>([]);
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

      setTwoRatio(getLimitedImages(data.ctaImage, "21"));
      setThreeRatio(getLimitedImages(data.ctaImage, "31"));
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

    productsImages,
    twoRatio,
    threeRatio,
    loading,
    error,
  };
};
export default useAboutView;

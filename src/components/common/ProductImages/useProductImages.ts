import { useEffect, useState } from "react";
import { BASE_URL } from "../../../utils/Constants";
const useProductImages = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
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
  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(BASE_URL + "about/");
      if (!response.ok) {
        setError(true);
        return;
      }
      const data = await response.json().then((data) => data.data);
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
    productsImages,
    loading,
    error,
  };
};
export default useProductImages;

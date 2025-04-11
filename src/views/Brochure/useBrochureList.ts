import { useEffect, useState } from "react";
import { BASE_URL } from "../../utils/Constants";
import { ProductCardType } from "../../types/contentTypes";
const useBrochureView = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [products, setProducts] = useState<ProductCardType[]>([
    {
      id: 1,
      product_image: ["/images/product1.png"],
      product_name: "Roller Blinds",
      product_stars: 3,
      download_link: "",
      connect_link: "",
    },
    {
      id: 2,
      product_image: ["/images/product2.png"],
      product_name: "Roller Blinds",
      product_stars: 3,
      download_link: "",
      connect_link: "",
    },
    {
      id: 3,
      product_image: ["/images/product3.png"],
      product_name: "Roller Blinds",
      product_stars: 3,
      download_link: "",
      connect_link: "",
    },
    {
      id: 4,
      product_image: ["/images/product4.png"],
      product_name: "Roller Blinds",
      product_stars: 3,
      download_link: "",
      connect_link: "",
    },
    {
      id: 1,
      product_image: ["/images/product1.png"],
      product_name: "Roller Blinds",
      product_stars: 3,
      download_link: "",
      connect_link: "",
    },
    {
      id: 2,
      product_image: ["/images/product2.png"],
      product_name: "Roller Blinds",
      product_stars: 3,
      download_link: "",
      connect_link: "",
    },
    {
      id: 3,
      product_image: ["/images/product3.png"],
      product_name: "Roller Blinds",
      product_stars: 3,
      download_link: "",
      connect_link: "",
    },
    {
      id: 4,
      product_image: ["/images/product4.png"],
      product_name: "Roller Blinds",
      product_stars: 3,
      download_link: "",
      connect_link: "",
    },
  ]);
  const [videoUrl, setVideoUrl] = useState("");
  const [vLoading, setVLoading] = useState(true);
  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(BASE_URL + "get-products/");
      if (!response.ok) {
        setError(true);
        return;
      }
      const data = await response.json().then((data) => data.data);
      setProducts(data.products);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  const fetchVideo = async () => {
    try {
      setVLoading(true);
      const response = await fetch(BASE_URL + "get-hero-video/broucher");
      if (!response.ok) {
        setError(true);
        return;
      }
      const data = await response.json().then((data) => data.data);
      setVideoUrl(data);
    } catch (error) {
      setError(true);
    } finally {
      setVLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
    fetchVideo();
  }, []);

  return {
    videoUrl,
    vLoading,
    products,
    loading,
    error,
  };
};
export default useBrochureView;

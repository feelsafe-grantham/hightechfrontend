import { useEffect, useState } from "react";
import { BASE_URL } from "../../utils/Constants";
const useBrochureView = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [products, setProducts] = useState([
    {
      id: 1,
      product_image: "/images/product1.png",
      product_name: "Roller Blinds",
      product_stars: 3,
      download_link: "",
      connect_link: "",
    },
    {
      id: 2,
      product_image: "/images/product2.png",
      product_name: "Roller Blinds",
      product_stars: 3,
      download_link: "",
      connect_link: "",
    },
    {
      id: 3,
      product_image: "/images/product3.png",
      product_name: "Roller Blinds",
      product_stars: 3,
      download_link: "",
      connect_link: "",
    },
    {
      id: 4,
      product_image: "/images/product4.png",
      product_name: "Roller Blinds",
      product_stars: 3,
      download_link: "",
      connect_link: "",
    },
    {
      id: 1,
      product_image: "/images/product1.png",
      product_name: "Roller Blinds",
      product_stars: 3,
      download_link: "",
      connect_link: "",
    },
    {
      id: 2,
      product_image: "/images/product2.png",
      product_name: "Roller Blinds",
      product_stars: 3,
      download_link: "",
      connect_link: "",
    },
    {
      id: 3,
      product_image: "/images/product3.png",
      product_name: "Roller Blinds",
      product_stars: 3,
      download_link: "",
      connect_link: "",
    },
    {
      id: 4,
      product_image: "/images/product4.png",
      product_name: "Roller Blinds",
      product_stars: 3,
      download_link: "",
      connect_link: "",
    },
  ]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(BASE_URL + "about/" + "get-porducts/");
      if (!response.ok) {
        setError(true);
        return;
      }
      const data = await response.json();
      setProducts(data.products);
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
    products,
    loading,
    error,
  };
};
export default useBrochureView;

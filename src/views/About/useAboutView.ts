import { useEffect, useState } from "react";
import { BASE_URL } from "../../utils/Constants";
const useAboutView = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [team, setTeam] = useState([
    {
      name: "Mr Rahul",
      image: "/images/rahul.png",
      designation: "Accountant",
    },
    {
      name: "Ms Divya",
      image: "/images/divya.png",
      designation: "Operations Executive",
    },
    {
      name: "Ms Pinky",
      image: "/images/pinky.png",
      designation: "Sales Represntative",
    },
    {
      name: "Ms Anjali",
      image: "/images/anjali.png",
      designation: "Sales Represntative",
    },
    {
      name: "Ms Komal",
      image: "/images/komal.png",
      designation: "Sales Head",
    },
  ]);

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
      const response = await fetch(BASE_URL + "about/" + "get-porducts/");
      if (!response.ok) {
        setError(true);
        return;
      }
      const data = await response.json();
      setTeam(data.team);
      setProductsImages(data.productsImages);
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
    loading,
    error,
  };
};
export default useAboutView;

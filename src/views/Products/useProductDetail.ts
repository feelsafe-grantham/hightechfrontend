import { useState, useEffect } from "react";
import { ProductData, CtaImages } from "../../utils/Data";
import {
  ImageCtaType,
  ProductCardType,
  ProductDetailType,
} from "../../types/contentTypes";
import { BASE_URL } from "../../utils/Constants/index";
const useProductDetail = () => {
  const [product, setProduct] = useState<ProductDetailType>({
    id: 1,
    product_image: "/images/product1.png",
    product_name: "Roller Blinds",
    product_stars: 8,
    product_review: ["Dealer Verified", "Factory Product", "Quality Approved"],
    product_height: "102cm",
    product_width: "102cm",
    product_price: 1200,
    whatsapp_link: "",
    download_link: "",
    connect_link: "",
  });
  const [relatedProducts, setRelatedProducts] =
    useState<ProductCardType[]>(ProductData);
  const [ctaImages, setCtaImages] = useState<ImageCtaType[]>(CtaImages);
  const maxImagesPerRatio: Record<"21" | "31", number> = {
    "21": 2,
    "31": 1,
  };
  const getLimitedImages = (aspectRatio: "21" | "31") => {
    return ctaImages
      .filter((image) => image.aspectRatio === aspectRatio)
      .slice(0, maxImagesPerRatio[aspectRatio]);
  };
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<boolean | null>(null);

  const fetchData = async () => {
    try {
      const response = await fetch(BASE_URL + "/get-blogs/");
      if (!response.ok) {
        throw new Error(`Error fetching blog: ${response.statusText}`);
      }

      const data = await response.json();
      setProduct(data.product);
      setRelatedProducts(data.related_products);
      setCtaImages(data.cta_images);
    } catch (error) {
      console.error("this is error: ", error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (false) {
      fetchData();
    }
  }, []);

  return { product, relatedProducts, getLimitedImages, loading, error };
};

export default useProductDetail;

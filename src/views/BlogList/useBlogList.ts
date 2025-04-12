import { useState, useEffect } from "react";
import { BASE_URL } from "../../utils/Constants/index";
import { ImageCtaType } from "../../types/contentTypes";
import { getLimitedImages } from "../../utils/helper";

const blogTemp = [
  {
    id: 1,
    images: [
      "/images/product1.png",
      "/images/product2.png",
      "/images/product3.png",
      "/images/product4.png",
      "/images/product1.png",
      "/images/product2.png",
      "/images/product3.png",
      "/images/product4.png",
    ],
    title: "The Ultimate Guide to Choosing Office Window Blinds",
    author_name: "Nikhil Gussain",
    author_image: "17 min read",
    read_min: "17 min read",
    content: `
<article>
<section>
  <p>Welcome to this blog post! Here we will discuss various topics related to web development, including HTML, CSS, JavaScript, and much more.</p>
  <h2>Understanding HTML Structure</h2>
  <p>HTML (HyperText Markup Language) is the standard language for creating webpages. It provides the basic structure for web content. An HTML document consists of elements like headings, paragraphs, lists, images, and links.</p>
  <h3>Why HTML is Important</h3>
  <p>HTML serves as the foundation for web pages and is essential for creating accessible and well-structured content. Without HTML, websites wouldn't be able to display information properly.</p>
</section>
<footer>
  <p>Thank you for reading! Stay tuned for more content.</p>
</footer>
</article>
`,
  },
  {
    id: 2,
    images: [
      "/images/product2.png",
      "/images/product1.png",
      "/images/product3.png",
      "/images/product4.png",
      "/images/product1.png",
      "/images/product2.png",
      "/images/product3.png",
      "/images/product4.png",
    ],
    title: "Top window Blinds for Office",
    author_name: "Nikhil Gussain",
    author_image: "17 min read",
    read_min: "17 min read",
    content: `
<article>
<section>
  <p>Welcome to this blog post! Here we will discuss various topics related to web development, including HTML, CSS, JavaScript, and much more.</p>
  <h2>Understanding HTML Structure</h2>
  <p>HTML (HyperText Markup Language) is the standard language for creating webpages. It provides the basic structure for web content. An HTML document consists of elements like headings, paragraphs, lists, images, and links.</p>
  <h3>Why HTML is Important</h3>
  <p>HTML serves as the foundation for web pages and is essential for creating accessible and well-structured content. Without HTML, websites wouldn't be able to display information properly.</p>
</section>
<footer>
  <p>Thank you for reading! Stay tuned for more content.</p>
</footer>
</article>
`,
  },
];

const useBlogList = () => {
  const [blogs, setBlogs] = useState(blogTemp);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<boolean | null>(null);
  const [productImages, setProductImages] = useState<string[]>([]);
  const [twoRation, setTwoRation] = useState<ImageCtaType[]>([]);
  const [threeRation, setThreeRation] = useState<ImageCtaType[]>([]);
  const [oneHalfRatio, setOneHalfRatio] = useState<ImageCtaType[]>([]);
  const [oneRatio, setOneRatio] = useState<ImageCtaType[]>([]);
  const [videoUrl, setVideoUrl] = useState("");
  const [vLoading, setVLoading] = useState(true);
  const fetchData = async () => {
    try {
      const response = await fetch(BASE_URL + "get-blogs/");
      if (!response.ok) {
        throw new Error(`Error fetching blog: ${response.statusText}`);
      }
      const data = await response.json().then((data) => data.data);

      setBlogs(data.blog);
      setProductImages(data.product_image);
      setTwoRation(getLimitedImages(data.ctaImages, "21"));
      setThreeRation(getLimitedImages(data.ctaImages, "31"));
      setOneRatio(getLimitedImages(data.ctaImages, "11"));
      setOneHalfRatio(getLimitedImages(data.ctaImages, "15"));
    } catch (error) {
      console.error("this is error: ", error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  const fetchVideo = async () => {
    try {
      setVLoading(true);
      const response = await fetch(BASE_URL + "get-hero-video/blog");
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
    vLoading,
    videoUrl,
    blogs,
    twoRation,
    oneRatio,
    oneHalfRatio,
    threeRation,
    loading,
    error,
    productImages,
  };
};
export default useBlogList;

import BlogCard from "../../components/Blog/BlogCard";
import ContactCta from "../../components/common/ContactCta";
import ImageCta from "../../components/common/ImageCta";
import SectionHeading from "../../components/common/SectionHeading/SectionHeading";
import styles from "./BlogList.module.css"
import useBlogList from "./useBlogList";
const BlogList = () => {
  const { blogs, } = useBlogList();
  const products = [
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
  ]
  return (
    <div className={`${styles.blogListView}`}>
      <div className={`${styles.blogsContainer}`}>
        {blogs.map((blog) => <BlogCard key={blog.id} blog={blog} />)}
      </div>
      <ContactCta />
      <SectionHeading heading="See More from Us" description="Lorem ipsum dolor sit amet consecte consecte  sit amet " />
      <div className={`${styles.galleryContainer}`}>
        <div className={`${styles.col2Grid}`} >
          <ImageCta imageUrl="/images/homeProduct1.png" aspectRatio="21" />
          <ImageCta imageUrl="/images/homeProduct3.png" aspectRatio="21" />
        </div>
        <div className={`${styles.col3Grid}`}>
          <ImageCta imageUrl="/images/homeProduct1.png" aspectRatio="21" />
          <ImageCta imageUrl="/images/homeProduct2.png" aspectRatio="21" />
          <ImageCta imageUrl="/images/homeProduct3.png" aspectRatio="21" />
        </div>
        <div className={`${styles.col2GridRev}`} >
          <ImageCta imageUrl="/images/homeProduct2.png" aspectRatio="21" />
          <ImageCta imageUrl="/images/homeProduct1.png" aspectRatio="21" />
        </div>
        <ImageCta imageUrl="/images/homeProduct3.png" aspectRatio="31" />
      </div>
      <div className={`${styles.imageGrid}`}>
        {products.map((image, index) =>
          <img key={index} className={`${styles.productImage}`} src={image} />
        )}
      </div>
    </div>
  );
}

export default BlogList;
import BlogCard from "../../components/Blog/BlogCard";
import ContactCta from "../../components/common/ContactCta";
import styles from "./BlogList.module.css"
import useBlogList from "./useBlogList";
const BlogList = () => {
  const { blogs, loading, error } = useBlogList();
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
      <div>
        <ContactCta />
      </div>
      <div className={`${styles.galleryContainer}`}>
        <div className={`${styles.col2Grid}`} >
          <div className={`${styles.coverImageContainer}`}>
            <img className={`${styles.ctaImage} ${styles.gridImage} `} src="/images/rect1.png" alt="aman" />
            <p className={`${styles.hotCta}`}>Our Hot<br /> <span className={`${styles.hotCtaSpan}`}>Products</span>
            </p>
          </div>
          <div className={`${styles.coverImageContainer}`}>
            <img className={`${styles.ctaImage} ${styles.gridImage} `} src="/images/rect2.5.png" alt="aman" />
            <p className={`${styles.hotCta}`}>Our Hot<br /> <span className={`${styles.hotCtaSpan}`}>Products</span>
            </p>
          </div>
        </div>
        <div className={`${styles.col3Grid}`}>
          <div className={`${styles.coverImageContainer}`}>
            <img className={`${styles.ctaImage} ${styles.gridImage} `} src="/images/rect1.png" alt="aman" />
          </div>
          <div className={`${styles.coverImageContainer}`}>
            <img className={`${styles.ctaImage} ${styles.gridImage} `} src="/images/rect2.5.png" alt="aman" />
          </div>
          <div className={`${styles.coverImageContainer}`}>
            <img className={`${styles.ctaImage} ${styles.gridImage} `} src="/images/rect2.5.png" alt="aman" />
          </div>
        </div>
        <div className={`${styles.col2GridRev}`} >
          <div className={`${styles.coverImageContainer}`}>
            <img className={`${styles.ctaImage} ${styles.gridImage} `} src="/images/rect1.png" alt="aman" />
          </div>
          <div className={`${styles.coverImageContainer}`}>
            <img className={`${styles.ctaImage} ${styles.gridImage} `} src="/images/rect2.5.png" alt="aman" />
          </div>
        </div>
        <div className={`${styles.coverImageContainer}`}>
          <img className={`${styles.ctaImage} ${styles.coverImage}`} src="/images/home3.png" alt="" />
          <p className={`${styles.hotCta}`}>Our Hot<br /> <span className={`${styles.hotCtaSpan}`}>Products</span>
          </p>
        </div>
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
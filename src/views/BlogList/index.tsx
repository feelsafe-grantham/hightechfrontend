import BlogCard from "../../components/Blog/BlogCard";
import Breadcrum from "../../components/common/Breadcrum";
import ContactCta from "../../components/common/ContactCta";
import ImageCta from "../../components/common/ImageCta";
import MainHeading from "../../components/common/MainHeading";
import SectionHeading from "../../components/common/SectionHeading/SectionHeading";
import ProductContainer from "../../components/common/Shimmer/ProductContainer";
import useAutoScroll from "../../utils/helper/useAutoScroll";
import styles from "./BlogList.module.css"
import useBlogList from "./useBlogList";
const BlogList = () => {
  const { productImages, loading, threeRation, twoRation, blogs, } = useBlogList();
  const imageGridRef = useAutoScroll();

  return (
    <div className={`${styles.blogListView}`}>
      <Breadcrum imgUrl="/images/breadcrum3.png" />
      <MainHeading />
      {loading ? <ProductContainer /> :
        <div className={`${styles.blogsContainer}`}>
          {blogs.map((blog) => <BlogCard key={blog.id} blog={blog} />)}
        </div>}
      <ContactCta />
      <SectionHeading heading="See More from Us" description="Lorem ipsum dolor sit amet consecte consecte  sit amet " />
      {loading ? <ProductContainer /> : <div className={`${styles.galleryContainer}`}>
        <div className={`${styles.col2Grid}`} >
          <ImageCta imageUrl={threeRation[0].imageUrl} aspectRatio={threeRation[0].aspectRatio} />
          <ImageCta imageUrl={twoRation[0].imageUrl} aspectRatio={twoRation[0].aspectRatio} />
        </div>
        <div className={`${styles.col3Grid}`}>
          <ImageCta imageUrl={twoRation[1].imageUrl} aspectRatio={twoRation[1].aspectRatio} />
          <ImageCta imageUrl={twoRation[2].imageUrl} aspectRatio={twoRation[2].aspectRatio} />
          <ImageCta imageUrl={twoRation[3].imageUrl} aspectRatio={twoRation[3].aspectRatio} />
        </div>
        <div className={`${styles.col2GridRev}`} >
          <ImageCta imageUrl={twoRation[4].imageUrl} aspectRatio={twoRation[4].aspectRatio} />
          <ImageCta imageUrl={threeRation[1].imageUrl} aspectRatio={threeRation[1].aspectRatio} />

        </div>
        <ImageCta imageUrl={threeRation[2].imageUrl} aspectRatio={threeRation[2].aspectRatio} />
      </div>}
      {loading ? <ProductContainer /> : <div ref={imageGridRef} className={`${styles.imageGrid}`}>
        {productImages.map((image, index) =>
          <img key={index} className={`${styles.productImage}`} src={image} />
        )}
      </div>}
    </div>
  );
}

export default BlogList;

import BlogCard from "../../components/Blog/BlogCard";
import Breadcrum from "../../components/common/Breadcrum";
import ContactCta from "../../components/common/ContactCta";
import ImageCta from "../../components/common/ImageCta";
import MainHeading from "../../components/common/MainHeading";
import PageSeo from "../../components/common/PageSeo";
import SectionHeading from "../../components/common/SectionHeading/SectionHeading";
import CoverImageShimmer from "../../components/common/Shimmer/CoverImageShimmer";
import ProductContainer from "../../components/common/Shimmer/ProductContainer";
import useAutoScroll from "../../utils/helper/useAutoScroll";
import styles from "./BlogList.module.css"
import useBlogList from "./useBlogList";
const BlogList = () => {
  const { vLoading, videoUrl, productImages, loading, threeRation, oneHalfRatio, oneRatio, blogs, } = useBlogList();
  const imageGridRef = useAutoScroll();

  return (
    <>

      <PageSeo
        title="Window Blinds Blog - Tips & Ideas by High Tech Window Blinds"
        description="Stay updated with window blinds tips and trends from High Tech Window Blinds by Vishal Interior. Expert advice and ideas for every window."
        url="https://hightechwindowblinds.in/blog"
        canonicalUrl="https://hightechwindowblinds.in/blog"
        keywords=""
      />
      <div className={`${styles.blogListView}`}>
        {vLoading ? <CoverImageShimmer /> : <Breadcrum videoUrl={videoUrl} fallback="/images/blogFallback.jpg" />}
        <MainHeading />
        {loading ? <ProductContainer /> :
          <div className={`${styles.blogsContainer}`}>
            {blogs.map((blog) => <BlogCard key={blog.id} blog={blog} />)}
          </div>}
        <ContactCta />
        <SectionHeading heading="See More from Us" description="Know more about us and what we do!" />
        {loading ? <ProductContainer /> :
          <div className={`${styles.galleryContainer}`}>
            <div className={`${styles.col2Grid}`} >
              <ImageCta imageUrl={oneHalfRatio[0]?.imageUrl} aspectRatio={oneHalfRatio[0]?.aspectRatio} />
              <ImageCta imageUrl={oneRatio[0]?.imageUrl} aspectRatio={oneRatio[0]?.aspectRatio} />
            </div>
            <ImageCta imageUrl={threeRation[0]?.imageUrl} aspectRatio={threeRation[0]?.aspectRatio} />
            <div className={`${styles.col2GridRev}`} >
              <ImageCta imageUrl={oneRatio[1]?.imageUrl} aspectRatio={oneRatio[1]?.aspectRatio} />
              <ImageCta imageUrl={oneHalfRatio[1]?.imageUrl} aspectRatio={oneHalfRatio[1]?.aspectRatio} />
            </div>

          </div>}
        {loading ? <ProductContainer /> : <div ref={imageGridRef} className={`${styles.imageGrid}`}>
          {productImages.map((image, index) =>
            <img key={index} className={`${styles.productImage}`} src={image} />
          )}
        </div>}
      </div>
    </>
  );
}

export default BlogList;

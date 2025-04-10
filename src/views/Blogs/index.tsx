import styles from "./BlogView.module.css";
import { useParams } from "react-router-dom";
import parse from 'html-react-parser';
import useBlogView from "./useBlogView";
import ProductContainer from "../../components/common/Shimmer/ProductContainer";
import useAutoScroll from "../../utils/helper/useAutoScroll";
import PageSeo from "../../components/common/PageSeo";
const BlogView = () => {
    const { slug } = useParams<{ slug: string }>();
    const { blog, error, loading } = useBlogView(slug as string);
    const imageGridRef = useAutoScroll();
    if (loading) {
        return <ProductContainer />;
    }
    if (error) {
        return <div className={`${styles.error}`}>Error loading blog</div>;
    }
    if (!blog) {
        return <div className={`${styles.error}`}>Blog not found</div>;
    }
    return (
        <>
            <PageSeo
                title={`${blog.title} - High Tech`}
                description={`Read our latest blog on ${blog.title} to learn expert tips on choosing the best window blinds from High Tech Window Blinds by Vishal Interior.`}
                url={`https://hightechwindowblinds.in/${slug}`}
                canonicalUrl={`https://hightechwindowblinds.in/${slug}`}
                keywords=""
            />
            <div className={`${styles.blogView}`}>
                {
                    loading ? <ProductContainer /> : <div className={`${styles.blogCardContainer}`}>
                        <div className={`${styles.blogCard}`}>
                            <div ref={imageGridRef} className={`${styles.blogImageContainer}`}>
                                {blog.images.map((image, index) =>
                                    <img
                                        key={index}
                                        src={image}
                                        alt={image}
                                        className={`${styles.blogImage}`}
                                    />
                                )}
                            </div>
                            <div className={`${styles.blogInfo}`}>
                                <h2 className={`${styles.blogTitle}`}>{blog.title}</h2>
                                {/* <div className={`${styles.authorInfoContainer}`}>
                            <img className={`${styles.authorImage}`} src={blog.author_image} alt={blog.author_name} />
                            <div className={`${styles.authorInfo}`}>
                                <span className={`${styles.authorName}`}>
                                    {blog.author_name}
                                </span>
                                <span>
                                    {blog.read_min}
                                </span>
                            </div>
                        </div> */}
                                <div className={`${styles.blogContent}`}>
                                    {parse(blog.content)}
                                </div>
                            </div>
                        </div>

                    </div>
                }
            </div>
        </>
    )
}

export default BlogView
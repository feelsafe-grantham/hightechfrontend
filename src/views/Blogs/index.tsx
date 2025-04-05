import styles from "./BlogView.module.css";
import { useParams } from "react-router-dom";
import parse from 'html-react-parser';
import useBlogView from "./useBlogView";
const BlogView = () => {
    const { slug } = useParams<{ slug: string }>();
    const { blog, loading, error } = useBlogView(slug as string);

    // if (loading) {
    //     return <div className={`${styles.loading}`}>Loading...</div>;
    // }
    if (error) {
        return <div className={`${styles.error}`}>Error loading blog</div>;
    }
    if (!blog) {
        return <div className={`${styles.error}`}>Blog not found</div>;
    }
    return (
        <div className={`${styles.blogView}`}>
            <div className={`${styles.blogCardContainer}`}>
                <div className={`${styles.blogCard}`}>
                    <div className={`${styles.blogImageContainer}`}>
                        {blog.blog_images.map((image, index) =>
                            <img
                                key={index}
                                src={image}
                                alt={image}
                                className={`${styles.blogImage}`}
                            />)
                        }
                    </div>
                    <div className={`${styles.blogInfo}`}>
                        <h2 className={`${styles.blogTitle}`}>{blog.blog_title}</h2>
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
                            {parse(blog.blog_content)}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default BlogView
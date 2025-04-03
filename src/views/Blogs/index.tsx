import styles from "./BlogView.module.css"
const BlogView = () => {
    const blog = {
        blog_images: [
            "/images/product1.png",
            "/images/product2.png",
            "/images/product3.png",
            "/images/product4.png",
            "/images/product1.png",
            "/images/product2.png",
            "/images/product3.png",
            "/images/product4.png"
        ],
        blog_title: "Top window Blinds for Office",
        author_name: "Aman Pandey",
        author_image: "17 min read",
        read_min: "17 min read",
        blog_content: "",
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
                        <div className={`${styles.authorInfoContainer}`}>
                            <img className={`${styles.authorImage}`} src="/images/user.jpg" alt="" />
                            <div className={`${styles.authorInfo}`}>
                                <span className={`${styles.authorName}`}>
                                    {blog.author_name}
                                </span>
                                <span>
                                    {blog.read_min}
                                </span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default BlogView
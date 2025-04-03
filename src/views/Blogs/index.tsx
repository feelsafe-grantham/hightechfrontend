import styles from "./BlogView.module.css";
import parse from 'html-react-parser';
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
        author_name: "Nikhil Gussain",
        author_image: "17 min read",
        read_min: "17 min read",
        blog_content: `
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
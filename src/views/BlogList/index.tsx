import BlogCard from "../../components/Blog/BlogCard";
import ContactCta from "../../components/common/ContactCta";
import styles from "./BlogList.module.css"
import useBlogList from "./useBlogList";
const BlogList = () => {
  const { blogs, loading, error } = useBlogList();
  return (
    <div className={`${styles.blogListView}`}>
      <div className={`${styles.blogsContainer}`}>
        {blogs.map((blog) => <BlogCard key={blog.id} blog={blog} />)}
      </div>
      <div>
        <ContactCta />
      </div>
    </div>
  );
}

export default BlogList;
import styles from "./BlogList.module.css"
const BlogList = () => {
    return (<div className={`${styles.blogListView}`}>
        <div className={`${styles.blogsContainer}`}>
            <div className={`${styles.blogCardContainer}`}>
                <img className={`${styles.blogImage}`} src="/images/product1.png" alt="blogImage" />
                <div className={`${styles.titleContainer}`}>
                    <h2 className={`${styles.blogTitle} line-clamp-2`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum nam consectetur perferendis distinctio magnam earum molestiae reiciendis laboriosam animi quidem?</h2>
                </div>
            </div>
        </div>
    </div>);
}

export default BlogList;
import { Link } from "react-router-dom";
import styles from "./BlogCard.module.css"
import { createSlug } from "../../../utils/helper";
const BlogCard = ({ blog }: { blog: any }) => {
    const slug = createSlug(blog.blog_title, blog.id);
    return (
        <Link to={`/blog/${slug}`} className={styles.card__article}>
            <img className={styles.card__img} src={blog.blog_images[0]} alt="image" />
            <div className={styles.card__data}>
                <span className={styles.card__description}>{blog.read_min}</span>
                <h2 className={`${styles.card__title} line-clamp-2`}>{blog.blog_title}</h2>
                <p className={styles.card__button}>Read More</p>
            </div>
        </Link>
    );
}
export default BlogCard;








// <div className={styles.card__container}>
//     <article className={styles.card__article}>
//         <img src="/images/product1.png" alt="image" className={styles.card__img} />
//         <div className={styles.card__data}>
//             <span className={styles.card__description}>{blog.read_min}</span>
//             <h2 className={`${styles.card__title} line-clamp-2`}>{blog.blog_title}</h2>
//             <Link to="#" className={styles.card__button}>Read More</Link>
//         </div>
//     </article>

//     <article className={styles.card__article}>
//         <img src="/images/product1.png" alt="image" className={styles.card__img} />
//         <div className={styles.card__data}>
//             <span className={styles.card__description}>{blog.read_min}</span>
//             <h2 className={`${styles.card__title} line-clamp-2`}>{blog.blog_title}</h2>
//             <Link to="#" className={styles.card__button}>Read More</Link>
//         </div>
//     </article>
// </div>
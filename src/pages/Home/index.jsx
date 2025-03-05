import blogsData from "../../blogs.json";
import styles from "./blogs.module.css";
const Blogs = () => {
  return (
    <div className={styles.blogsWrapper}>
      {blogsData.blogs.map((blog) => (
        <div className={styles.blogList} key={blog.id}>
          <h2 className={styles.blogTitle}>{blog.title}</h2>
          <p>{blog.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Blogs;

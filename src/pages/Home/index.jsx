import { useSelector } from "react-redux";
import styles from "./blogs.module.css";

const Blogs = () => {
  const blogs = useSelector((state) => state.blog.blogs);

  return (
    <div className={styles.blogsWrapper}>
      {blogs.map((blog) => (
        <div className={styles.blogList} key={blog.id}>
          <h2 className={styles.blogTitle}>{blog.title}</h2>
          <p>{blog.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Blogs;

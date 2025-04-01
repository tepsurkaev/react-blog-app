import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllBlogs, deleteBlogById } from "../../features/blogs/blogSlice";
import { Link } from "react-router";

const Blogs = () => {
  const dispatch = useDispatch();

  const { blogs, loading } = useSelector((state) => state.blog);

  const handleDelete = (blogId) => {
    dispatch(deleteBlogById(blogId));
  };
  
  useEffect(() => {
    dispatch(fetchAllBlogs());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-[10px]">
      {blogs.map((blog) => (
        <div className="mb-[30px]" key={blog.id}>
          <h2 className="mb-[8px] text-[18px] font-bold">{blog.title}</h2>
          <p>{blog.content}</p>
          <Link to={`/blog/${blog.id}`}>
            <button className="p-[10px] mt-[10px] w-[100%] border rounded-[10px]">Посмотреть</button>
          </Link>
          <button
            onClick={() => handleDelete(blog.id)}
            className="p-[10px] mt-[10px] w-[100%] border rounded-[10px]"
          >
            Удалить
          </button>
        </div>
      ))}
    </div>
  );
};

export default Blogs;

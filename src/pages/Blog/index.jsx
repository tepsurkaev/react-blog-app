import { Link, useParams } from "react-router";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchBlogById } from "../../features/blogs/blogSlice";

export default function Blog() {
  const dispatch = useDispatch();
  const params = useParams();

  const loading = useSelector((state) => state.blog.loading);
  const blog = useSelector((state) => state.blog.blog);

  useEffect(() => {
    dispatch(fetchBlogById(params.blogId));
  }, [dispatch, params.blogId]);

  if (loading === true) {
    return <div>loading</div>;
  }

  return (
    <div>
      <h1>{blog?.title}</h1>
      <p>{blog?.content}</p>
      <Link to="/">Назад</Link>
    </div>
  );
}

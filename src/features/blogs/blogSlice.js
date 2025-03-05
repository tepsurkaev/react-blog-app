import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  blogs: [],
  blog: null,
  error: null,
};

export const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    getAllBlogs: () => {},
    getBlogById: () => {},
    addBlog: () => {},
    deleteBlogById: () => {},
  },
});

export const { getAllBlogs, getBlogById, addBlog, deleteBlogById } =
  blogSlice.actions;

export default blogSlice.reducer;

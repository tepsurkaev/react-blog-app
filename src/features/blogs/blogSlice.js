import { createSlice } from "@reduxjs/toolkit";
import blogs from "../../blogs.json";

const initialState = {
  loading: false,
  blogs: blogs.blogs,
  blog: null,
  error: null,
};

export const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    // По клику на блог нужно запускать эту функцию, он должна принемать id блога
    // найти этот блог и добаваить найденный блог в state.blog
    getBlogById: () => {},
    addBlog: () => {},
    deleteBlogById: () => {},
  },
});

export const { getBlogById, addBlog, deleteBlogById } = blogSlice.actions;

export default blogSlice.reducer;

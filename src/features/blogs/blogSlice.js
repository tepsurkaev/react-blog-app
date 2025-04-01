import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const url = "http://localhost:8080/blogs";

export const deleteBlogById = createAsyncThunk(
  "blogs/deleteById",
  async (blogId) => {
    await fetch(`${url}/${blogId}`, { method: "DELETE" });
    return blogId;
  }
);

export const fetchAllBlogs = createAsyncThunk("blogs/fetchAll",  async() => {
  const response = await fetch(url);
  return response.json();
});

export const fetchBlogById = createAsyncThunk(
  "blogs/fetchById",
  async (blogId) => {
    const response = await fetch(`${url}/${blogId}`);
    return response.json();
  }
);

const initialState = {
  loading: false,
  blogs: [],
  blog: null,
};

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllBlogs.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAllBlogs.fulfilled, (state, action) => {
        state.loading = false;
        state.blogs = action.payload.blogs;
      });

    builder
      .addCase(fetchBlogById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBlogById.fulfilled, (state, action) => {
        state.loading = false;
        state.blog = action.payload;
      });

    builder
      .addCase(deleteBlogById.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteBlogById.fulfilled, (state, action) => {
        // [{id:2}, {id:3}].fukter((item) => blog.id)
        state.loading = false;
        state.blogs = state.blogs.filter((blog) => blog.id !== action.payload);
      });
  },
});

export default blogSlice.reducer;

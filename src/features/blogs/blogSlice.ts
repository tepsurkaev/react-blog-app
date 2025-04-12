import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IState, Blog } from "../../utils/interfaces";

const url = "http://localhost:8080/blogs";

export const deleteBlogById = createAsyncThunk(
  "blogs/deleteById",
  async (blogId: string) => {
    await fetch(`${url}/${blogId}`, { method: "DELETE" });
    return blogId;
  }
);

export const fetchAllBlogs = createAsyncThunk("blogs/fetchAll", async () => {
  const response = await fetch(url);
  return response.json();
});

export const fetchBlogById = createAsyncThunk(
  "blogs/fetchById",
  async (blogId: string) => {
    const response = await fetch(`${url}/${blogId}`);
    return response.json();
  }
);

export const createBlog = createAsyncThunk(
  "blogs/create",
  async (blog: { title: string; content: string }) => {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    });
    return response.json();
  }
);

const initialState: IState = {
  loading: false,
  createLoading: false,
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
        state.loading = false;
        state.blogs = state.blogs.filter((blog) => blog.id !== action.payload);
      });

    builder
      .addCase(createBlog.pending, (state) => {
        state.createLoading = true;
      })
      .addCase(createBlog.fulfilled, (state, action: PayloadAction<Blog>) => {
        state.createLoading = false;
        state.blogs.unshift(action.payload);
      });
  },
});

export default blogSlice.reducer;

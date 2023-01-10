import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import postsService from "./postsService";

const initialState = {
  posts: [],
  isLoading: false,
  post: {},
};

export const getAllpost = createAsyncThunk("posts/getAllpost", async () => {
  try {
    return await postsService.getAllpost();
  } catch (error) {
    console.error(error);
  }
});

export const getById = createAsyncThunk("posts/getById", async (_id) => {
  try {
    return await postsService.getById(_id);
  } catch (error) {
    console.error(error);
  }
});

export const getPostByName = createAsyncThunk(
  "posts/getPostByName",
  async (title) => {
    try {
      return await postsService.getPostByName(title);
    } catch (error) {
      console.error(error);
    }
  }
);

export const deletePost = createAsyncThunk("posts/deletePost", async (_id) => {
  try {
    return await postsService.deletePost(_id);
  } catch (error) {
    console.error(error);
  }
});

export const createPost = createAsyncThunk("posts/createPost", async (post) => {
  try {
    return await postsService.createPost(post);
  } catch (error) {
    console.error(error);
  }
});

export const insertComment = createAsyncThunk("posts/comments", async (comment) => {
  try {
    return await postsService.insertComment(comment);
  } catch (error) {
    console.error(error);
  }
});

export const iLike = createAsyncThunk("posts/likes", async (_id) => {
  try {
    return await postsService.iLike(_id);
  } catch (error) {
    console.error(error);
  }
});

export const dislike = createAsyncThunk("products/dislike", async (_id) => {
  try {
    return await postsService.dislike(_id);
  } catch (error) {
    console.error(error);
  }
});

export const postsSlice = createSlice({
  name: "posts",

  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.msg = "";
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getAllpost.fulfilled, (state, action) => {
        state.posts = action.payload.post;
        state.isLoading = false;
      })
      .addCase(getAllpost.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getById.fulfilled, (state, action) => {
        state.post = action.payload;
      })
      .addCase(getPostByName.fulfilled, (state, action) => {
        state.posts = action.payload;
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.posts = state.posts.filter(
          (post) => post._id !== action.payload.post._id
        );
        state.isSuccess = true;
        state.isError = false;
        state.message = action.payload.msg;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.posts = [action.payload.post, ...state.posts];
        state.isSuccess = true;
        state.msg = action.payload.msg;
      })
      .addCase(insertComment.fulfilled, (state, action) => {
        const posts = state.posts.map((post) => {
            if (post._id === action.payload._id) {
                post = action.payload;
            }
            return post;
        });
        state.posts = posts
        state.isSuccess = true
        state.isError = false;
        state.message = action.payload.msg
        state.posts = posts
    })
    .addCase(iLike.fulfilled, (state, action) => {
      state.posts = state.posts.map((post) => {
        if (post._id === action.payload._id) {
          post = action.payload;
        }
        return post;
      });
    })
    .addCase(dislike.fulfilled, (state, action) => {
      const posts = state.posts.map((post) => {
        console.log(typeof action.payload._id);
        if (post._id === action.payload.post._id) {
          post = action.payload.post;
        }
        return post;
      });
      state.posts = posts;
    })

  },
});

export const { reset } = postsSlice.actions;
export default postsSlice.reducer;

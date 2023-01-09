import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import postsService from "./postsService";

const initialState = {
  posts: [],
  isLoading: false,
  post:{}
};

export const getAllpost = createAsyncThunk("posts/getAllpost", async () => {
  try {
    return await postsService.getAllpost();
  } catch (error) {
    console.error(error);
  }
});

export const getById = createAsyncThunk("posts/getById", async (_id)=>{
  try {
      return await postsService.getById(_id)
  } catch (error) {
      console.error(error)
  }
})

export const getPostByName = createAsyncThunk("posts/getPostByName", async(title)=>{
  try {
    return await postsService.getPostByName(title)
  } catch (error) {
    console.error(error)
  }
})

export const postsSlice = createSlice({
  name: "posts",

  initialState,
reducers: {
    reset: (state) => {
        state.isLoading = false;
      },
  },

  extraReducers: (builder) => {
    builder.addCase(getAllpost.fulfilled, (state, action) => {
      state.posts = action.payload.post;
      state.isLoading = false;
    })
    .addCase(getAllpost.pending, (state, action) => {
      state.isLoading = true;
    })
    .addCase(getById.fulfilled,(state,action)=>{
      state.post = action.payload
  })
  .addCase(getPostByName.fulfilled,(state,action)=>{
    state.posts = action.payload
  })
  },
});

export default postsSlice.reducer;

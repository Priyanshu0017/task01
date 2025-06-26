// filepath: d:\Eskills web dev\New folder\posts-list\src\features\store.js
import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./posts/postsSlice";

const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
});

export default store;
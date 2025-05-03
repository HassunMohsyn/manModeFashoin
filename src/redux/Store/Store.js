import { configureStore } from "@reduxjs/toolkit";
import imageReducer from "../imageSlice/imageSlice"; // Import the slice

const store = configureStore({
  reducer: {
    images: imageReducer, // Add reducer to store
  },
});

export default store;

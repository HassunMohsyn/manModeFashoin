import { createSlice } from "@reduxjs/toolkit";

// Initial State
const initialState = {
  images: [
    "assets/images/picture/home/image.png",
    "/assets/images/picture/home/image.png",
    "./assets/images/picture/home/image.png",
    "../../assets/images/picture/home/image.png",
    "../../assets/images/picture/home/image.png",
    '../../assets/images/picture/home/image copy.png'
  ],
};

// Create Slice
const imageSlice = createSlice({
  name: "images",
  initialState,
  reducers: {
    setImages: (state, action) => {
      state.images = action.payload;
    },
  },
});

// Export actions
export const { setImages } = imageSlice.actions;

// Export reducer
export default imageSlice.reducer;

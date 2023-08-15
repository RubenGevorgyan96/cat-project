import { createSlice } from "@reduxjs/toolkit";
import { fetchCategories, fetchImages } from "./actions";
import { Images } from "../interfaces/images.interface";

export interface ImagesState {
  images: Images[] | null;
  status: "idle" | "loading";
}

const initialState: ImagesState = {
  images: null,
  status: "idle"
};

export const categorySlice = createSlice({
  name: "image",
  initialState,
  reducers: {
    RemovePrevState: (state) => {
      state.images = null;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchImages.fulfilled, (state, { payload }) => {
      console.log(payload, "pay");
      state.images = state.images ? state.images.concat(payload) : payload;
      state.status = "idle";
    });
    builder.addCase(fetchImages.pending, (state, action) => {
      state.status = "loading";
    });
  }
});

export const { RemovePrevState } = categorySlice.actions;

export default categorySlice.reducer;

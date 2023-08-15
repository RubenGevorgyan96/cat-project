import { createSlice } from "@reduxjs/toolkit";
import { Categories } from "../interfaces/categories.interface";
import { fetchCategories } from "./actions";

export interface CategoryState {
  category: Categories[] | null;
  status: "idle" | "loading";
}

const initialState: CategoryState = {
  category: null,
  status: "idle"
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
   
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.category = action.payload;
      state.status = "idle";
    });
    builder.addCase(fetchCategories.pending, (state, action) => {
      state.status = "loading";
    });
  }
});

export const {} = categorySlice.actions;

export default categorySlice.reducer;

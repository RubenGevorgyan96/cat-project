import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import categorySlice from "./categorySlice";
import imagesSlice from "./imagesSlice";

export const store = configureStore({
  reducer: {
    categories: categorySlice,
    images: imagesSlice
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

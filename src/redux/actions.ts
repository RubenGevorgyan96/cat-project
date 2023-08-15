import { createAsyncThunk } from "@reduxjs/toolkit";
import { Api } from "../Api";

export const fetchCategories = createAsyncThunk("categories", async () => {
  const { data } = await Api.get("categories");
  return data;
});

export const fetchImages = createAsyncThunk(
  "https://api.thecatapi.com/v1/images/search?limit=10&page=1",
  async ({ pages, category_id }: { pages: number; category_id: number }) => {
    const { data } = await Api.get(
      `https://api.thecatapi.com/v1/images/search?limit=10&page=${
        pages ?? 1
      }&category_ids=${category_id ? category_id : 1}`
    );
    return data;
  }
);

import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../api/api";

export const fetchCampers = createAsyncThunk(
  "campers/fetchCampers",
  async (page, thunkApi) => {
    try {
      const options = {
        params: {
          page: page,
          limit: 4,
        },
      };
      const { data } = await api.get("/campers", options);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

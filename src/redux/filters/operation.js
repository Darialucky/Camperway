import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../api/api";
import { AxiosError } from "axios";

export const filtersDataThunk = createAsyncThunk(
  "filters/fetchData",
  async (_, thunkApi) => {
    try {
      const { data } = await api.get("/campers");
      return data;
    } catch (error) {
      if (error instanceof AxiosError) {
        return thunkApi.rejectWithValue(error.message);
      } else {
        console.log("Unexpected error");
        return thunkApi.rejectWithValue("Unexpected error");
      }
    }
  }
);

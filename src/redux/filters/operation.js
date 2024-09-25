// import { createAsyncThunk } from "@reduxjs/toolkit";
// import { api } from "../../api/api";

// export const fetchFilteredCampers = createAsyncThunk(
//   "campers/fetchFilteredCampers",
//   async (filters, thunkAPI) => {
//     try {
//       const { data } = await api.get("/campers", { params: filters });
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

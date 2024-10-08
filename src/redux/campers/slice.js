import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers } from "./operations";

const initialState = {
  campers: [],
  favorite: [],
  page: 1,
  isLoadBtn: true,
  isLoading: false,
  isError: false,
};

const slice = createSlice({
  name: "campers",
  initialState,
  reducers: {
    changePage(state) {
      state.page += 1;
    },
    addToFavorite(state, action) {
      const camper = action.payload;
      if (!state.favorite.some((item) => item._id === camper._id)) {
        state.favorite.push(camper);
      }
    },
    removeFromFavorite(state, action) {
      state.favorite = state.favorite.filter(
        (item) => item._id !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.fulfilled, (state, action) => {
        const newCampers = action.payload.filter(
          (newCamper) =>
            !state.campers.some(
              (existingCamper) => existingCamper._id === newCamper._id
            )
        );
        state.campers = [...state.campers, ...newCampers];
        if (action.payload.length === 0 || action.payload.length < 4) {
          state.isLoadBtn = false;
        }
        state.isLoading = false;
      })
      .addCase(fetchCampers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCampers.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { changePage, addToFavorite, removeFromFavorite } = slice.actions;

export default slice.reducer;

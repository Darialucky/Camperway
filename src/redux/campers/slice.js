import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers } from "./operations";

const initialState = {
  campers: [],
  favorite: [],
  page: 1,
  selectedCamper: null,
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
      state.favorite = [...state.favorite, action.payload];
    },
    removeFromFavorite(state, action) {
      const index = state.favorite.findIndex(
        (item) => item._id === action.payload
      );
      if (index !== -1) {
        state.favorite.splice(index, 1);
      }
    },
    addSelectedCamper(state, action) {
      state.selectedCamper = action.payload;
    },
    removeSelectedCamper(state) {
      state.selectedCamper = null;
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

export const {
  changePage,
  addToFavorite,
  removeFromFavorite,
  addSelectedCamper,
  removeSelectedCamper,
} = slice.actions;

export const campersReducer = slice.reducer;

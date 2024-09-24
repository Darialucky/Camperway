import { createSlice } from "@reduxjs/toolkit";
import { fetchFilteredCampers } from "./operation";

const initialState = {
  location: "",
  selectedEquipment: [],
  selectedType: [],
  filteredCampers: [],
  isLoading: false,
  isError: false,
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setLocation(state, action) {
      state.location = action.payload;
    },
    setSelectedEquipment(state, action) {
      state.selectedEquipment = action.payload;
    },
    setVehicleType(state, action) {
      state.selectedType = action.payload;
    },
    clearFilters(state) {
      state.location = "";
      state.selectedEquipment = [];
      state.selectedType = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilteredCampers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchFilteredCampers.fulfilled, (state, action) => {
        state.filteredCampers = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchFilteredCampers.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const {
  setLocation,
  setSelectedEquipment,
  setVehicleType,
  clearFilters,
} = filtersSlice.actions;

export default filtersSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";
// import { filtersDataThunk } from "./operation";

// const initialState = {
//   filters: {
//     location: "",
//     selectedEquipment: [],
//     selectedType: [],
//   },
//   allCampers: [],
// };

// const slice = createSlice({
//   name: "filters",
//   initialState,
//   reducers: {
//     setLocation(state, action) {
//       state.filters.location = action.payload;
//     },
//     setSelectedEquipment(state, action) {
//       state.filters.selectedEquipment = action.payload;
//     },
//     setVehicleType(state, action) {
//       state.filters.selectedType = action.payload;
//     },
//   },
//   extraReducers: (builder) => {
//     builder.addCase(filtersDataThunk.fulfilled, (state, action) => {
//       state.allCampers = action.payload;
//     });
//   },
// });

// export const { setLocation, setSelectedEquipment, setVehicleType } =
//   slice.actions;

// export const filtersSlice = slice.reducer;

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

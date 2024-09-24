// import { createSelector } from "@reduxjs/toolkit";

export const selectFilteredCampers = (state) => state.filters.filteredCampers;
export const selectLoading = (state) => state.filters.isLoading;
export const selectError = (state) => state.filters.isError;

// export const selectLocation = (state) => state.filters.filters.location;
// export const selectSelectedEquipment = (state) =>
//   state.filters.filters.selectedEquipment;
// export const selectVehicleType = (state) => state.filters.filters.selectedType;
// export const selectAllCampers = (state) => state.filters.allCampers;

// export const selectFilteredCampers = createSelector(
//   [
//     selectAllCampers,
//     selectLocation,
//     selectSelectedEquipment,
//     selectVehicleType,
//   ],
//   (campers, location, selectedEquipment, selectedType) => {
//     return campers?.filter((camper) => {
//       const locationFilter =
//         !location ||
//         camper.location.toLowerCase().includes(location.toLowerCase());

//       const equipmentFilter =
//         !selectedEquipment.length ||
//         selectedEquipment.every((eq) => {
//           const detailValue = camper.details[eq];
//           return (
//             detailValue !== undefined &&
//             (detailValue === 1 ||
//               detailValue === true ||
//               detailValue.toString().toLowerCase() === eq.toLowerCase())
//           );
//         });

//       const typeFilter =
//         !selectedType.length || selectedType.includes(camper.form);

//       return locationFilter && equipmentFilter && typeFilter;
//     });
//   }
// );

// export default selectFilteredCampers;

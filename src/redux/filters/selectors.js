import { createSelector } from "@reduxjs/toolkit";

// Вибірки з Redux стану
export const selectLocation = (state) => state.filters.filters.location;
export const selectSelectedEquipment = (state) =>
  state.filters.filters.selectedEquipment;
export const selectVehicleType = (state) => state.filters.filters.selectedType;

export const selectAllCampers = (state) => state.filters.allCampers;

// Фільтрація кемперів
export const selectFilteredCampers = createSelector(
  [
    selectAllCampers,
    selectLocation,
    selectSelectedEquipment,
    selectVehicleType,
  ],
  (campers, location, selectedEquipment, selectedType) => {
    return campers?.filter((camper) => {
      const locationFilter =
        !location ||
        camper.location.toLowerCase().includes(location.toLowerCase());

      const equipmentFilter =
        !selectedEquipment.length ||
        selectedEquipment.every((eq) => {
          // Перевірка наявності обладнання в деталях
          const detailValue = camper.details[eq];
          return (
            detailValue !== undefined &&
            (detailValue === 1 ||
              detailValue === true ||
              detailValue.toString().toLowerCase() === eq.toLowerCase())
          );
        });

      const typeFilter =
        !selectedType.length || selectedType.includes(camper.form);

      return locationFilter && equipmentFilter && typeFilter;
    });
  }
);

export default selectFilteredCampers;

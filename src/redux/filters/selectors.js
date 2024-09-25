import { createSelector } from "@reduxjs/toolkit";
import { selectCampers } from "../campers/selectors";

export const selectFilteredCars = createSelector(
  [selectCampers, (state) => state.filters],
  (campers, filters) => {
    return campers.filter((camper) => {
      const matchesLocation = campers.location
        .toLowerCase()
        .includes(filters.location.toLowerCase());

      const matchesEquipment = filters.equipment.every(
        (equipment) => camper.details[equipment.toLowerCase()]
      );
      const matchesVehicleType =
        filters.vehicleType === "" ||
        camper.form.toLowerCase() === filters.vehicleType.toLowerCase();

      return matchesLocation && matchesEquipment && matchesVehicleType;
    });
  }
);

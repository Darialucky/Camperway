export const selectCampers = (state) => state.campers.campers;

export const selectFavoriteCampers = (state) => state.campers.favorite;

export const selectPage = (state) => state.campers.page;

export const selectLoadBtn = (state) => state.campers.isLoadBtn;

export const selectedCamperForModal = (state) => state.campers.selectedCamper;

export const selectLoading = (state) => state.campers.isLoading;

export const selectError = (state) => state.campers.isError;

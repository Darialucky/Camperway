export const selectCampers = (state) => state.rootReducer.campers.campers;

export const selectFavoriteCampers = (state) =>
  state.rootReducer.campers.favorite;

export const selectPage = (state) => state.rootReducer.campers.page;

export const selectLoadBtn = (state) => state.rootReducer.campers.isLoadBtn;

export const selectedCamperForModal = (state) =>
  state.rootReducer.campers.selectedCamper;

export const selectLoading = (state) => state.rootReducer.campers.isLoading;

export const selectError = (state) => state.rootReducer.campers.isError;

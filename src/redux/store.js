// import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import { campersReducer } from "./campers/slice";
// // Закоментовано імпорт фільтрів
// // import { filtersSlice } from "./filters/slice";
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";
// import storage from "redux-persist/lib/storage";

// const campersConfig = {
//   key: "campers",
//   version: 1,
//   storage,
//   whitelist: ["favorite"],
// };

// // Закоментовано фільтри у кореневому редукторі
// const rootReducer = combineReducers({
//   campers: persistReducer(campersConfig, campersReducer),
//   // filters: filtersSlice,
// });

// export const store = configureStore({
//   reducer: rootReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// export const persistor = persistStore(store);

// export default store;

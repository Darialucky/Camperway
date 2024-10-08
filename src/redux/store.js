import { combineReducers, configureStore } from "@reduxjs/toolkit";
import campersReducer from "./campers/slice";
import { filterReducer } from "./filters/slice";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const campersConfig = {
  key: "campers",
  version: 1,
  storage,
  whitelist: ["favorite"],
};

const rootReducer = combineReducers({
  campers: persistReducer(campersConfig, campersReducer),
  filters: filterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

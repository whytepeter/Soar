import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import configReducer from "./slices/configSlice";
import userReducer from "./slices/userSlice";

import { combineReducers } from "redux";

const persistConfig = {
  key: "root",
  storage, // Use localStorage
  whitelist: ["user", "config"], // Persist these reducers
};

const rootReducer = combineReducers({
  config: configReducer,
  user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializable check for redux-persist
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

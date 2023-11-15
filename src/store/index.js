import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { HomeApi } from "./HomeApi";
import { AboutApi } from "./AboutApi";
import { ContactApi } from "./ContactApi";
import { SingleProjectApi } from "./SingleProjectApi";
import { SettingsApi } from "./SettingsApi";
import { ServicesApi } from "./ServicesApi";

const store = configureStore({
  reducer: {
    [HomeApi.reducerPath]: HomeApi.reducer,
    [AboutApi.reducerPath]: AboutApi.reducer,
    [ContactApi.reducerPath]: ContactApi.reducer,
    [SettingsApi.reducerPath]: SettingsApi.reducer,
    [SingleProjectApi.reducerPath]: SingleProjectApi.reducer,
    [ServicesApi.reducerPath]: ServicesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(HomeApi.middleware)
      .concat(AboutApi.middleware)
      .concat(ContactApi.middleware)
      .concat(SettingsApi.middleware)
      .concat(SingleProjectApi.middleware)
      .concat(ServicesApi.middleware),
});
setupListeners(store.dispatch);

export default store;

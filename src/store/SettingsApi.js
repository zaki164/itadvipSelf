import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL, BASE_HEADERS } from "../config/dataService";

export const SettingsApi = createApi({
  reducerPath: "SettingsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: BASE_HEADERS,
  }),
  tagTypes: ["settings"],
  endpoints: ({ query }) => ({
    getSettingsData: query({
      query: () => `/settings`,
      providesTags: ["settings"],
    }),
  }),
});

export const { useGetSettingsDataQuery } = SettingsApi;

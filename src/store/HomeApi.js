import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL, BASE_HEADERS } from "../config/dataService";

export const HomeApi = createApi({
  reducerPath: "HomeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: BASE_HEADERS,
  }),
  tagTypes: ["Home"],
  endpoints: ({ query }) => ({
    getHomeData: query({
      query: () => `/home`,
      providesTags: ["Home"],
    }),
  }),
});

export const { useGetHomeDataQuery } = HomeApi;

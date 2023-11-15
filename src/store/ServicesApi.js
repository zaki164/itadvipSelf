import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL, BASE_HEADERS } from "../config/dataService";

export const ServicesApi = createApi({
  reducerPath: "ServicesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: BASE_HEADERS,
  }),
  tagTypes: ["services"],
  endpoints: ({ query }) => ({
    getServicesData: query({
      query: () => `/services`,
      providesTags: ["services"],
    }),
  }),
});

export const { useGetServicesDataQuery } = ServicesApi;

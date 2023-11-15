import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL, BASE_HEADERS } from "../config/dataService";

export const AboutApi = createApi({
  reducerPath: "AboutApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: BASE_HEADERS,
  }),
  tagTypes: ["About"],
  endpoints: ({ query }) => ({
    getAboutData: query({
      query: () => `/about-us`,
      providesTags: ["About"],
    }),
  }),
});

export const { useGetAboutDataQuery } = AboutApi;

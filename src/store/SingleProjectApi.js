import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL, BASE_HEADERS } from "../config/dataService";

export const SingleProjectApi = createApi({
  reducerPath: "SingleProject",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}/home/portfolio`,
    prepareHeaders: BASE_HEADERS,
  }),
  tagTypes: ["singleProject"],
  endpoints: ({ query }) => ({
    getSingleProjectData: query({
      query: (slug) => `/${slug}`,
      providesTags: ["singleProject"],
    }),
  }),
});

export const { useGetSingleProjectDataQuery } = SingleProjectApi;

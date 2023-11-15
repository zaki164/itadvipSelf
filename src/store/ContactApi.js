import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL, BASE_HEADERS } from "../config/dataService";

export const ContactApi = createApi({
  reducerPath: "ContactApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}/help`,
    prepareHeaders: BASE_HEADERS,
  }),
  tagTypes: ["Contact", "needService"],
  endpoints: ({ mutation }) => ({
    contact: mutation({
      query: (data) => ({
        url: "/contact-us",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Contact"],
    }),
    needServices: mutation({
      query: (data) => ({
        url: "/need-service",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["needService"],
    }),
  }),
});

export const { useContactMutation, useNeedServicesMutation } = ContactApi;

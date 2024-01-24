import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Note: Root api slice & config for rtk-query defined here
export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({
    cache: "default",
    baseUrl: "http://localhost:3001/",
    responseHandler: async (response) => {
      if (response.status === 401) {
        window.location.replace("/login");
      }
      if (response.status === 403) {
        window.location.replace("/403-forbidden");
      }
      return response.json();
    },
  }),
  tagTypes: ["users"],
  endpoints: () => ({}),
});

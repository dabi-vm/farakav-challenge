// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({
    cache: "default",
    baseUrl: process.env.DB_HOST,
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

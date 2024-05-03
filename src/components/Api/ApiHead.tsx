import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ENV } from "@/config/config";

const { baseUrl } = ENV;

export const createBaseQuery = () => {
  return fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("accessToken");
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  });
};
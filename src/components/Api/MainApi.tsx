import { createApi } from "@reduxjs/toolkit/query/react";
import { createBaseQuery } from "./ApiHead";

const baseQuery = createBaseQuery();

export const api = createApi({
  reducerPath: "PostsApp",
  baseQuery: baseQuery,
  tagTypes: ["Post", "Commnet"],
  endpoints: () => ({}),
});

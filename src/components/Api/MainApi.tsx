import { createApi } from "@reduxjs/toolkit/query/react";
import { createBaseQuery } from "./ApiHead";

const baseQuery = createBaseQuery();

export const api = createApi({
  reducerPath: "NotesApp",
  baseQuery: baseQuery,
  tagTypes: ["Post"],
  endpoints: () => ({}),
});

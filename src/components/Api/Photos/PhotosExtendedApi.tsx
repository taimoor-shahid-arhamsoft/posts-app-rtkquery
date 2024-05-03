import { api } from "../MainApi";
import { PhotosResponse } from "../Interfaces";
import PhotosEnhancedApi from "./PhotosEnhancedApi";

const PhotosExtendedApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getPhotos: builder.query<PhotosResponse[], null>({
      query: () => ({
        url: "photos",
        method: "GET",
      }),
    }),
  }),
  overrideExisting: true,
});

PhotosEnhancedApi();

export const { useGetPhotosQuery } = PhotosExtendedApi;

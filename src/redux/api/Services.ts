import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

import { MangaObject } from './types/manga';
import { CoverObject } from './types/cover';

export const mangaApi = createApi({
  reducerPath: 'mangaApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.mangadex.org/' }),
  endpoints: (builder) => ({
    getManga: builder.query<MangaObject, string>({
      query: (name) => name,
    }),
    getCover: builder.query<CoverObject, string>({
      query: (id) => `cover/${id}`,
    }),
  }),
});
export const { useGetMangaQuery, useGetCoverQuery } = mangaApi;

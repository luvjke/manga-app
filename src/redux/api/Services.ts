import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

import { MangaObject } from './types/manga';
import { CoverObject } from './types/cover';
import { ChapterData } from './types/chapter';

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
    getChapters: builder.query<ChapterData[], string>({
      query: (id) => `manga/${id}/feed?translatedLanguage[]=en&limit=100`,
    }),
  }),
});
export const { useGetMangaQuery, useGetCoverQuery, useGetChaptersQuery } = mangaApi;

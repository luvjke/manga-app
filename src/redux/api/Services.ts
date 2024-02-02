import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

import { MangaObject } from './types/manga';
import { CoverObject } from './types/cover';
import { ChapterObject, SoloChapterObject } from './types/chapter';

export const mangaApi = createApi({
  reducerPath: 'mangaApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.mangadex.org/' }),
  endpoints: (builder) => ({
    getManga: builder.query<MangaObject, string>({
      query: (listOrder: string | undefined) =>
        `manga?order[${listOrder}]=desc&limit=20&includes[]=cover_art&excludedTags%5B%5D=5920b825-4181-4a17-beeb-9918b0ff7a30&excludedTagsMode=AND&contentRating%5B%5D=safe&contentRating[]=safe`,
    }),
    getCover: builder.query<CoverObject, string>({
      query: (id) => `cover/${id}`,
    }),
    getChapters: builder.query<ChapterObject, string>({
      query: (id) => `manga/${id}/feed?translatedLanguage[]=en&order[chapter]=desc&limit=500`,
    }),
    getChapter: builder.query<SoloChapterObject, string>({
      query: (id) => `/at-home/server/${id}`,
    }),
    getSeachValue: builder.query<MangaObject, string>({
      query: (searchValue) =>
        `https://api.mangadex.org/manga?title=${searchValue}&limit=40&excludedTags%5B%5D=5920b825-4181-4a17-beeb-9918b0ff7a30&excludedTagsMode=AND&contentRating%5B%5D=safe&contentRating[]=safe`,
    }),
  }),
});
export const {
  useGetMangaQuery,
  useGetCoverQuery,
  useGetChaptersQuery,
  useGetChapterQuery,
  useGetSeachValueQuery,
} = mangaApi;

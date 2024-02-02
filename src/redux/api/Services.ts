import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

import { MangaObject } from './types/manga';
import { CoverObject } from './types/cover';
import { ChapterObject, SoloChapterObject } from './types/chapter';
import { ApiTags } from '../../common/constans';

export const mangaApi = createApi({
  reducerPath: 'mangaApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.mangadex.org/' }),
  endpoints: (builder) => ({
    getManga: builder.query<MangaObject, string>({
      query: (listOrder: string | undefined) =>
        `manga?order[${listOrder}]=desc&limit=20&includes[]=cover_art${ApiTags.EXCLUDEDTAGS}${ApiTags.CONTENTTAGS}`,
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
        `https://api.mangadex.org/manga?title=${searchValue}&limit=40${ApiTags.EXCLUDEDTAGS}${ApiTags.CONTENTTAGS}`,
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

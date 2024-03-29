import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

import { MangaObject } from './types/manga';
import { CoverObject } from './types/cover';
import { ChapterObject, SoloChapterObject } from './types/chapter';
import { ApiTags } from '../../common/constans';
import { StatisticObject } from './types/statistic';

export const mangaApi = createApi({
  reducerPath: 'mangaApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.mangadex.org/' }),
  endpoints: (builder) => ({
    getManga: builder.query<MangaObject, { listOrder: string | undefined; offset: number }>({
      query: ({ listOrder, offset }) =>
        `manga?order[${listOrder}]=desc&limit=15&includes[]=cover_art${ApiTags.EXCLUDEDTAGS}${ApiTags.CONTENTTAGS}&offset=${offset}`,
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
    getSeachValue: builder.query<MangaObject, { searchValue: string; tags?: string }>({
      query: ({ searchValue, tags }) =>
        `manga?title=${searchValue}&limit=15${tags ? tags : ''}${ApiTags.EXCLUDEDTAGS}${ApiTags.CONTENTTAGS}`,
    }),
    getStatistics: builder.query<StatisticObject, string>({
      query: (id) => `/statistics/manga/${id}`,
    }),
  }),
});
export const {
  useGetMangaQuery,
  useGetCoverQuery,
  useGetChaptersQuery,
  useGetChapterQuery,
  useGetSeachValueQuery,
  useGetStatisticsQuery,
} = mangaApi;

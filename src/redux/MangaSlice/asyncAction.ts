import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { ApiRoutes } from '../../common/constans';
import { MangaData } from '../../assets/types/manga';
import { CoverData } from '../../assets/types/cover';

export const fetchManga = createAsyncThunk<MangaData[]>('manga/fetchManga', async () => {
  const { data } = await axios.get<MangaData[]>(`${ApiRoutes.POSTS}`);

  return data.data;
});

export const fetchMangaImages = createAsyncThunk<CoverData[], string>(
  'manga/fetchMangaImages',
  async (coverId: string) => {
    const { data } = await axios.get<CoverData[]>(`${ApiRoutes.POSTS_IMAGES}/${coverId}`);
    return data.data;
  }
);

import { createSlice } from '@reduxjs/toolkit';

import { fetchManga, fetchMangaImages } from './asyncAction';
import { MangaSliceState, Status } from './types';

const initialState: MangaSliceState = {
  mangasList: [],
  coverList: [],
  status: Status.LOADING,
  searchValue: '',
};

const MangaSlice = createSlice({
  name: 'manga',
  initialState,
  reducers: {
    SetMangaItems(state, action) {
      state.mangasList = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchManga.pending, (state) => {
      state.status = Status.LOADING;
      state.mangasList = [];
    });
    builder.addCase(fetchManga.fulfilled, (state, action) => {
      state.mangasList = action.payload;
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchManga.rejected, (state) => {
      state.status = Status.ERROR;
      state.mangasList = [];
    });
    builder.addCase(fetchMangaImages.pending, (state) => {
      state.status = Status.LOADING;
      state.coverList = [];
    });
    builder.addCase(fetchMangaImages.fulfilled, (state, action) => {
      state.coverList = action.payload;
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchMangaImages.rejected, (state) => {
      state.status = Status.ERROR;
      state.coverList = [];
    });
  },
});

export const { SetMangaItems } = MangaSlice.actions;

export default MangaSlice.reducer;

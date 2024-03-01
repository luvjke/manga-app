import { createSlice } from '@reduxjs/toolkit';

import { MangaData } from '../api/types/manga';

interface FavoriteManga {
  favouriteMangas: MangaData[];
}

const initialState: FavoriteManga = {
  favouriteMangas: [],
};
const favoriteSlice = createSlice({
  name: 'manga',
  initialState,
  reducers: {
    addFavouriteManga: (state, action) => {
      const mangaData = action.payload;
      if (!state.favouriteMangas.some((manga) => manga.id === mangaData.id)) {
        state.favouriteMangas.push(mangaData);
      }
    },
    removeFavouriteManga: (state, action) => {
      const mangaData = action.payload;
      state.favouriteMangas = state.favouriteMangas.filter((manga) => manga.id !== mangaData.id);
    },
  },
});

export const { addFavouriteManga, removeFavouriteManga } = favoriteSlice.actions;

export default favoriteSlice.reducer;

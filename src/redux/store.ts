import { configureStore } from '@reduxjs/toolkit';

import MangaSlice from './MangaSlice/MangaSlice';

export const store = configureStore({
  reducer: {
    mangas: MangaSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

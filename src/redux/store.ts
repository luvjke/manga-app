import { configureStore } from '@reduxjs/toolkit';

import { mangaApi } from './api/Services';
import favoriteSlice from './favoriteSlice/favoriteSlice';

export const store = configureStore({
  reducer: {
    [mangaApi.reducerPath]: mangaApi.reducer,
    favorites: favoriteSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(mangaApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

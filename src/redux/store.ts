import { configureStore } from '@reduxjs/toolkit';

import { mangaApi } from './api/Services';

export const store = configureStore({
  reducer: {
    [mangaApi.reducerPath]: mangaApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(mangaApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

import { RootState } from '../store';

export const favouriteMangaSelector = (state: RootState) => state.favorites.favouriteMangas;

import { RootState } from '../store';

export const mangasData = (state: RootState) => state.mangas.mangasList;
export const status = (state: RootState) => state.mangas.status;
export const searchValue = (state: RootState) => state.mangas.searchValue;
export const coverData = (state: RootState) => state.mangas.coverList;

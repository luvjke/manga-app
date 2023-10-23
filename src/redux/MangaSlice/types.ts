import { CoverData } from '../../assets/types/cover';
import { MangaData } from '../../assets/types/manga';

export interface MangaSliceState {
  mangasList: MangaData[];
  coverList: CoverData[];
  status: Status;
  searchValue: string;
}

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

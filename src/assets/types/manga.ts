import { CoverData } from './cover';

export interface MangaObject {
  result: string;
  response: string;
  data: MangaData[];
  limit: number;
  offset: number;
  total: number;
}
export interface MangaData {
  id: string;
  type: string;
  attributes: {
    title: {
      en: string;
    };
    description: {
      en: string;
    };
  };
  relationships: Relationship[];
}
interface Relationship {
  id: string;
  type: string;
}
export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}
export interface MangaSliceState {
  mangasList: MangaData[];
  mangasImageList: CoverData[];
  status: Status;
  searchValue: string;
}

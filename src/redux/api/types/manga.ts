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
    contentRating: string;
    year: number;
    tags: Tag[];
    status: string;
    altTitles: AltTitle[];
  };
  relationships: Relationship[];
}
interface Relationship {
  attributes: any;
  id: string;
  type: string;
}
interface Tag {
  id: string;
  type: string;
  attributes: {
    group: string;
    name: {
      en: string;
    };
  };
  relationships: any[];
}

interface AltTitle {
  en?: string;
  'zh-ro'?: string;
  ru?: string;
  zh?: string;
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

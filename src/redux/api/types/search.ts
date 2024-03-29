import { CoverData } from './cover';

export interface SeacrchObject {
  result: string;
  response: string;
  data: SearchData[];
  limit: number;
  offset: number;
  total: number;
}
export interface SearchData {
  id: string;
  type: string;
  attributes: {
    title: {
      en: string;
      'ja-ro'?: string;
      ja?: string;
      ru?: string;
      ko?: string;
    };
    description: {
      en: string;
    };
    contentRating: string;
    year: number;
    tags: Tag[];
    status: string;
    altTitles: AltTitle[];
    publicationDemographic: string;
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
  searchList: SearchData[];
  searchImageList: CoverData[];
  status: Status;
  searchValue: string;
}

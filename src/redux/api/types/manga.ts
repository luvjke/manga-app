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
    status: 'completed' | 'ongoing' | 'cancelled' | 'hiatus';
    altTitles: AltTitle[];
    publicationDemographic: 'shounen' | 'shoujo' | 'josei' | 'seinen';
  };
  relationships: Relationship[];
}
interface Relationship {
  attributes?: any;
  id: string;
  type: string;
  related?:
    | 'monochrome'
    | 'main_story'
    | 'adapted_from'
    | 'based_on'
    | 'prequel'
    | 'side_story'
    | 'doujinshi'
    | 'same_franchise'
    | 'shared_universe'
    | 'sequel'
    | 'spin_off'
    | 'alternate_story'
    | 'alternate_version'
    | 'preserialization'
    | 'colored'
    | 'serialization';
}
interface Tag {
  id: string;
  type: string;
  attributes: {
    group: 'content' | 'format' | 'genre' | 'theme';
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

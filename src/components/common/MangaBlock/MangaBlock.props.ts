import { MangaData } from '../../../assets/types/manga';

export interface MangaCardProps {
  mangaId: string;
  title: string;
  coverId: string;
  mangaData?: MangaData;
}

export interface MangaInfoProps {
  mangaData: MangaData;
  coverFile: string;
}

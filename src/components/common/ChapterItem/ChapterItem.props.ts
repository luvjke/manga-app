import { ChapterData } from '../../../redux/api/types/chapter';

export interface ChapterItemProps {
  chapterId: string;
  otherChapters: ChapterData[];
}
export enum DisplayMangaType {
  pages,
  tape,
}

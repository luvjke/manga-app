export interface ChapterObject {
  result: string;
  response: string;
  data: ChapterData[];
  limit: number;
  offset: number;
  total: number;
}

export interface ChapterData {
  id: string;
  type: string;
  attributes: Attributes;
  relationships: Relationship[];
}

interface Relationship {
  id: string;
  type: string;
}

interface Attributes {
  volume?: any;
  chapter: string;
  title?: string;
  translatedLanguage: string;
  externalUrl?: any;
  publishAt: string;
  readableAt: string;
  createdAt: string;
  updatedAt: string;
  pages: number;
  version: number;
}

export interface SoloChapterObject {
  result: string;
  chapter: SoloChapterData;
  hash: string;
}

export interface SoloChapterData {
  data: [];
  dataSaver: [];
  hash: string;
}

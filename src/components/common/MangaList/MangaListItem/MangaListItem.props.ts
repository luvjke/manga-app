export interface ItemList {
  id: string;
  attributes: {
    title: {
      ko?: string;
      ru?: string;
      ja?: string;
      en: string;
      'ja-ro'?: string;
    };
    description: {
      en: string;
    };
  };
  coverId: string;
  contentRating: string;
  mangaData: Object;
  index?: number;
}

export interface ItemBlock {
  id: string;

  attributes: {
    title: {
      en: string;
    };
    description: {
      en: string;
    };
  };

  coverId: string;
  contentRating: string;
}

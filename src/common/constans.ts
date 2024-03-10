export const RoutesMap = {
  MAIN: '/',
  MANGA: '/manga/:id',
  CHAPTER: '/manga/:id/:id',
  SEARCH: '/search/:searchValue',
  FAVORITE: '/favorite',
  ADVANCED: '/search',
};

export const ApiRoutes = {
  POSTS: 'https://api.mangadex.org/manga?limit=5',
  POSTS_IMAGES: 'https://api.mangadex.org/cover',
  MangaDetails: '/manga-details',
};
export const ApiTags = {
  EXCLUDEDTAGS:
    '&excludedTags%5B%5D=5920b825-4181-4a17-beeb-9918b0ff7a30&excludedTags%5B%5D=2bd2e8d0-f146-434a-9b51-fc9ff2c5fe6a&excludedTagsMode=OR&',
  CONTENTTAGS:
    'contentRating%5B%5D=safe&contentRating[]=safe&contentRating%5B%5D=suggestive&contentRating[]=suggestive',
};

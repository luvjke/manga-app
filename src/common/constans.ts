export const RoutesMap = {
  MAIN: '/',
  MANGA: '/manga/:id',
  CHAPTER: '/manga/:id/:id',
  SEARCH: '/search/:searchValue',
};

export const ApiRoutes = {
  POSTS: 'https://api.mangadex.org/manga?limit=5',
  POSTS_IMAGES: 'https://api.mangadex.org/cover',
  MangaDetails: '/manga-details',
};

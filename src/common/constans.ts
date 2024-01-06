export const RoutesMap = {
  MAIN: '/',
  MANGA: '/manga/:id',
  CHAPTER: '/manga/:id/:id',
};

export const ApiRoutes = {
  POSTS: 'https://api.mangadex.org/manga?limit=5',
  POSTS_IMAGES: 'https://api.mangadex.org/cover',
  MangaDetails: '/manga-details',
};

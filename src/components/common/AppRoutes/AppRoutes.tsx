import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { RoutesMap } from '../../../common/constans';
import { Home } from '../../../pages/Home';
import { MangaPage } from '../../../pages/MangaPage';
import { ErrorComponent } from '../ErrorComponent';
import { ChapterPage } from '../../../pages/ChapterPage';
import { SearchPage } from '../../../pages/SearchPage';
import { Header } from '../Header';
import { FavoritesPages } from '../../../pages/FavoritesPages';
// import { Footer } from '../Footer';

export const AppRouter = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path={RoutesMap.MAIN} element={<Home />} />
        <Route path="*" element={<ErrorComponent />} />
        <Route path={RoutesMap.MANGA} element={<MangaPage />} />
        <Route path={RoutesMap.CHAPTER} element={<ChapterPage />} />
        <Route path={RoutesMap.SEARCH} element={<SearchPage />} />
        <Route path={RoutesMap.FAVORITE} element={<FavoritesPages />} />
        <Route path={RoutesMap.ADVANCED} element={<SearchPage />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
};

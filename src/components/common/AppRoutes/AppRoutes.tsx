import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { RoutesMap } from '../../../common/constans';
import { Home } from '../../../pages/Home';
import { MangaPage } from '../../../pages/MangaPage';
import { ErrorComponent } from '../ErrorComponent';
import { ChapterPage } from '../../../pages/ChapterPage';

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path={RoutesMap.MAIN} element={<Home />} />
        <Route path="*" element={<ErrorComponent />} />
        <Route path={RoutesMap.MANGA} element={<MangaPage />} />
        <Route path={RoutesMap.CHAPTER} element={<ChapterPage />} />
      </Routes>
    </>
  );
};

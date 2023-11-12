import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { RoutesMap } from '../../../common/constans';
import { NotFoundPage } from '../../../pages/NotFoundPage';
import { Home } from '../../../pages/Home';
import { MangaPage } from '../../../pages/MangaPage/MangaPage';

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path={RoutesMap.MAIN} element={<Home />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path={RoutesMap.MANGA} element={<MangaPage />} />
      </Routes>
    </>
  );
};

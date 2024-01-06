import React from 'react';
import { useLocation } from 'react-router-dom';

import { ChapterItem } from '../../components/common/ChapterItem';
import { ErrorComponent } from '../../components/common/ErrorComponent';
import { Header } from '../../components/common/Header';

export const ChapterPage = () => {
  const location = useLocation();
  const chapterId: string = location.state[0];
  console.log(chapterId);
  return (
    <div>
      <Header />
      {chapterId ? <ChapterItem chapterId={chapterId} /> : <ErrorComponent />}
    </div>
  );
};

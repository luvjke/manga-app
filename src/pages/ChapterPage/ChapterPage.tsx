import React from 'react';
import { useLocation } from 'react-router-dom';

import { ChapterItem } from '../../components/common/ChapterItem';
import { ErrorComponent } from '../../components/common/ErrorComponent';

export const ChapterPage = () => {
  const location = useLocation();
  const chapterId: string = location.state[0];
  console.log(chapterId);
  return <div>{chapterId ? <ChapterItem chapterId={chapterId} /> : <ErrorComponent />}</div>;
};

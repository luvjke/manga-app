import React from 'react';
import { useLocation } from 'react-router-dom';

import styles from './MangaPage.module.scss';
import { MangaData } from '../../redux/api/types/manga';
import { ErrorComponent } from '../../components/common/ErrorComponent';
import { MangaInfo } from '../../components/common/MangaInfo';
import { ChapterList } from '../../components/common/ChapterList';
import { Header } from '../../components/common/Header';

export const MangaPage = () => {
  const location = useLocation();
  const mangaData: MangaData = location.state[0];
  const coverFile: string = location.state[1];

  return (
    <div className={styles.wrapper}>
      {mangaData && coverFile ? (
        <div className={styles.container}>
          <Header />
          <MangaInfo mangaData={mangaData} coverFile={coverFile} />
          <ChapterList id={mangaData.id} />
        </div>
      ) : (
        <ErrorComponent />
      )}
    </div>
  );
};

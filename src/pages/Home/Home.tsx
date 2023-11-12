import React from 'react';

import styles from './Home.module.scss';
import { Header } from '../../components/common/Header';
import { MangaBlock } from '../../components/common/MangaBlock';
import { useGetMangaQuery } from '../../redux/api/Services';
import { ErrorComponent } from '../../components/common/ErrorComponent';

export const Home = () => {
  const {
    data: MangaArray,
    isLoading: mangaLoading,
    isError: mangaError,
  } = useGetMangaQuery(
    'manga?limit=21&excludedTags%5B%5D=5920b825-4181-4a17-beeb-9918b0ff7a30&excludedTagsMode=AND&contentRating%5B%5D=safe&order%5BlatestUploadedChapter%5D=desc'
  );
  const LastUpdates = [
    {
      items: MangaArray?.data,
    },
  ];
  if (mangaLoading) {
    return <div>Загрузка...</div>;
  }
  if (mangaError) {
    return <ErrorComponent />;
  }
  return (
    <main>
      <Header />
      <div className={styles.layout}>
        {LastUpdates?.map((props, index) => <MangaBlock {...props} key={index} />)}
      </div>
    </main>
  );
};

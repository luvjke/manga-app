import React from 'react';

import { Header } from '../../components/common/Header';
import { MangaBlock } from '../../components/common/MangaBlock';
import { useGetMangaQuery } from '../../redux/api/Services';

export const Home = () => {
  const { data: MangaArray, isLoading: mangaLoading } = useGetMangaQuery(
    'manga?limit=25&contentRating[]=safe'
  );
  const LastUpdates = [
    {
      items: MangaArray?.data,
    },
  ];
  if (mangaLoading) {
    return <div>Загрузка...</div>;
  }
  return (
    <main>
      <Header />
      <div>{LastUpdates?.map((props, index) => <MangaBlock {...props} key={index} />)}</div>
    </main>
  );
};

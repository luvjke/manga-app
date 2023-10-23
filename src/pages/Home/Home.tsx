import React, { useEffect } from 'react';

import { Header } from '../../components/common/Header';
import { MangaBlock } from '../../components/common/MangaBlock';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchManga } from '../../redux/MangaSlice/asyncAction';
import { mangasData } from '../../redux/MangaSlice/selectors';

export const Home = () => {
  const dispatch = useAppDispatch();
  const mangalist = useAppSelector(mangasData);

  useEffect(() => {
    dispatch(fetchManga());
  }, [dispatch]);
  console.log(mangalist);
  return (
    <main>
      <Header />
      <div>
        {mangalist?.map((mangaData) => (
          <MangaBlock
            key={mangaData.id}
            title={mangaData.attributes.title.en}
            mangaId={mangaData.id}
            coverId={mangaData.relationships.find(({ type }) => type === 'cover_art')?.id || ''}
          />
        ))}
      </div>
    </main>
  );
};

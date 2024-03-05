import React from 'react';

import styles from './FavoritesPages.module.scss';
import { useAppSelector } from '../../redux/hooks';
import { MangaBlock } from '../../components/common/MangaBlock';
import { favouriteMangaSelector } from '../../redux/favoriteSlice/selectors';

export const FavoritesPages = () => {
  const favoritedMangas = useAppSelector(favouriteMangaSelector);

  React.useEffect(() => {}, [favoritedMangas]);
  const ObjectData = [
    {
      items: favoritedMangas,
    },
  ];
  console.log(ObjectData);
  return (
    <div className={styles.layout}>
      {ObjectData?.map((props, index) => {
        return <MangaBlock {...props} key={index} />;
      })}
    </div>
  );
};

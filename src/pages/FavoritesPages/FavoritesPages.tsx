import React from 'react';

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
    <div>
      <div className="flex w-full flex-wrap justify-center gap-2">
        {ObjectData?.map((props, index) => {
          return <MangaBlock {...props} key={index} />;
        })}
      </div>
    </div>
  );
};

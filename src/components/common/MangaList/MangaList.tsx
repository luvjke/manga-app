import React from 'react';

import styles from './MangaList.module.scss';
import { MangaListItem } from './MangaListItem';
import { MangaCardProps } from '../MangaBlock/MangaBlock.props';

export const MangaList = ({ items }: MangaCardProps) => {
  React.useEffect(() => {}, [items]);
  return (
    <ul className={styles.container}>
      {items?.map((mangaData, index) => (
        <MangaListItem
          key={mangaData.id}
          id={mangaData.id}
          attributes={mangaData.attributes}
          coverId={mangaData.relationships.find(({ type }) => type === 'cover_art')?.id || ''}
          contentRating={mangaData.attributes?.contentRating}
          mangaData={mangaData}
          index={index}
        />
      ))}
    </ul>
  );
};

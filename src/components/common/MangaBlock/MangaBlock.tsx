import React from 'react';

import { MangaCardProps } from './MangaBlock.props';
import styles from './MangaBlock.module.scss';
import { MangaBlockItem } from '../MangaBlockItem';

export const MangaBlock = ({ items }: MangaCardProps) => {
  React.useEffect(() => {}, [items]);
  return (
    <ul className={styles.container}>
      {items?.map((mangaData, index) => (
        <MangaBlockItem
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

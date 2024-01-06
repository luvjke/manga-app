import React from 'react';

import { MangaCardProps } from './MangaBlock.props';
import styles from './MangaBlock.module.scss';
import { MangaBlockItem } from '../MangaBlockItem';

export const MangaBlock = ({ items }: MangaCardProps) => {
  console.log(items);
  return (
    <div className={styles.container}>
      {items?.map((mangaData) => (
        <MangaBlockItem
          key={mangaData.id}
          id={mangaData.id}
          attributes={mangaData.attributes}
          // @ts-ignore
          coverId={mangaData.relationships.find(({ type }) => type === 'cover_art')?.id || ''}
          contentRating={mangaData.attributes?.contentRating}
          mangaData={mangaData}
        />
      ))}
    </div>
  );
};

import React from 'react';

import { MangaCardProps } from './MangaBlock.props';
import styles from './MangaBlock.module.scss';
import { MangaBlockItem } from '../MangaBlockItem';

export const MangaBlock = ({ items }: MangaCardProps) => {
  return (
    <div className={styles.container}>
      {items?.map(({ id, attributes, relationships }) => (
        <MangaBlockItem
          key={id}
          id={id}
          attributes={attributes}
          // @ts-ignore
          coverId={relationships.find(({ type }) => type === 'cover_art')?.id || ''}
          contentRating={attributes?.contentRating}
        />
      ))}
    </div>
  );
};

import React from 'react';

import styles from './ChapterTape.module.scss';
import { Images } from '../ChapterImages/ChapterImages.props';

export const ChapterTape = ({ images, containerWidth }: Images) => {
  console.log(images);
  return (
    <div className={styles.container}>
      <div className={styles.solo_image} style={{ width: containerWidth }}>
        {images.map((chapter: string, id) => {
          return (
            <div>
              <img key={id} className={styles.content} src={chapter} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

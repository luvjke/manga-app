import React, { useState } from 'react';

import styles from './ChapterImages.module.scss';
import { Images } from './ChapterImages.props';

export const ChapterImages = (img: Images) => {
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = img.images.length;

  const imageUrl = img.images[currentPage];
  return (
    <div className={styles.container}>
      <div className={styles.solo_image}>
        {imageUrl && (
          <img
            className={styles.image}
            src={imageUrl}
            alt={`Page ${currentPage + 1}`}
            key={currentPage}
          />
        )}
      </div>
      <div className={styles.button_container}>
        {currentPage > 0 ? (
          <div className={styles.button_item} onClick={() => setCurrentPage(currentPage - 1)}></div>
        ) : (
          <div></div>
        )}
        <div></div>
        {totalPages && currentPage < totalPages - 1 && (
          <div className={styles.button_item} onClick={() => setCurrentPage(currentPage + 1)}></div>
        )}
      </div>
    </div>
  );
};

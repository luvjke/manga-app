import React, { useState } from 'react';

import styles from './ChapterImages.module.scss';
import { Images } from './ChapterImages.props';

export const ChapterImages = (img: Images) => {
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = img.images.length;

  const imageUrl = img.images[currentPage];
  return (
    <div className={styles.container}>
      <div className={styles.button_container}>
        {currentPage > 0 && (
          <button onClick={() => setCurrentPage(currentPage - 1)} className={styles.button}>
            Back
          </button>
        )}
      </div>
      <div className={styles.solo_image}>
        {imageUrl && (
          <img
            className={styles.image}
            src={imageUrl}
            alt={`Page ${currentPage + 1}`}
            key={currentPage}
            // width={512}
            // height={1080}
            // style={{
            //   width: 'auto',
            //   height: '100%',
            // }}
          />
        )}
      </div>
      <div className={styles.button_container}>
        {totalPages && currentPage < totalPages - 1 && (
          <button onClick={() => setCurrentPage(currentPage + 1)} className={styles.button}>
            Next
          </button>
        )}
      </div>
    </div>
  );
};

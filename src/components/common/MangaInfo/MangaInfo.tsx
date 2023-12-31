import React, { useState } from 'react';

import styles from './MangaInfo.module.scss';
import { MangaInfoProps } from './MangaInfo.props';

export const MangaInfo = ({ mangaData, coverFile }: MangaInfoProps) => {
  const [increaseDesc, setincreaseDesc] = useState(false);

  const showDesc = () => setincreaseDesc(!increaseDesc);

  const title =
    mangaData.attributes.title.en ||
    mangaData?.attributes.title['ja-ro'] ||
    mangaData?.attributes.title.ja ||
    mangaData?.attributes.title.ru ||
    mangaData?.attributes.title.ko;

  return (
    <div className={styles.container}>
      <div className={styles.summary_image}>
        <img
          className={styles.image}
          src={`https://uploads.mangadex.org/covers/${mangaData.id}/${coverFile}.512.jpg`}
          alt=""
        />
      </div>
      <div className={styles.summary_content}>
        <div className={styles.post_content}>
          <div className={styles.titles}>
            {<h2 className={styles.title_main}>{title}</h2>}
            <span className={styles.status}>[{mangaData?.attributes.status}]</span>
          </div>

          <div
            onClick={showDesc}
            className={increaseDesc ? styles.description_full : styles.description_hide}
          >
            <h3 className={styles.synopsis_title}>Synopsis of {title} </h3>
            {mangaData?.attributes.description.en || ' No Description here'}
          </div>
          <div className={styles.post_status}>
            <h3>Info</h3>
            <p className={styles.post_span}>
              <span>release {mangaData?.attributes.year || '?'}</span>
              <span>genre {mangaData?.attributes.publicationDemographic || '?'}</span>
            </p>
            <p className={styles.post_span}></p>
          </div>
          <div className={styles.post_category}>
            <h3>Category</h3>
            <div className={styles.post_tags}>
              {mangaData.attributes.tags.map((tag) => {
                if (tag.attributes.group === 'genre') {
                  return (
                    <p key={tag.id} className={styles.tag}>
                      {tag.attributes.name.en}
                    </p>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

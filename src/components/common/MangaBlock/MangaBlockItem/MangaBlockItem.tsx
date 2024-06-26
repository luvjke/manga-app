import React from 'react';
import { Link } from 'react-router-dom';

import styles from './MangaBlockItem.module.scss';
import { ItemBlock } from './MangaBlockItem.props';
import { useGetCoverQuery } from '../../../../redux/api/Services';
import luffypng from '../../../../assets/img/luffypng.png';
export const MangaBlockItem = ({ id, attributes, coverId, mangaData, index = 0 }: ItemBlock) => {
  const { data: cover, isSuccess, isFetching } = useGetCoverQuery(coverId);

  const BASE_ANIMATION_DELAY = 0.1;
  const animationDelay = index * BASE_ANIMATION_DELAY;
  const COVER_IMAGE = cover?.data.attributes.fileName;

  const titles =
    attributes.title.en ||
    attributes.title['ja-ro'] ||
    attributes.title.ja ||
    attributes.title.ru ||
    attributes.title.ko;

  return (
    <li style={{ animationDelay: `${animationDelay}s` }} className={styles.container}>
      {isFetching && (
        <div className={styles.item}>
          <div className={styles.image_block}>
            <img className={styles.image} src={luffypng} alt="" />
          </div>
        </div>
      )}
      {isSuccess && (
        <Link to={`/manga/${id}`} state={[mangaData, COVER_IMAGE]}>
          <div className={styles.item}>
            <div className={styles.image_block}>
              <img
                className={styles.image}
                src={`https://uploads.mangadex.org/covers/${id}/${COVER_IMAGE}.256.jpg`}
                alt=""
              />
            </div>
            <div className={styles.infocontainer}>
              <h2 className={styles.titlename}>{titles}</h2>
            </div>
          </div>
        </Link>
      )}
    </li>
  );
};

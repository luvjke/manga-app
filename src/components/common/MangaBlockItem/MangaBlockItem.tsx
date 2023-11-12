import React from 'react';
import { Link } from 'react-router-dom';

import styles from './MangaBlockItem.module.scss';
import { ItemBlock } from './MangaBlockItem.props';
import { useGetCoverQuery } from '../../../redux/api/Services';

export const MangaBlockItem = ({
  id,
  attributes,
  coverId,
  contentRating,
  mangaData,
}: ItemBlock) => {
  const { data: cover, isSuccess, isLoading } = useGetCoverQuery(coverId);
  const CoverImage = [cover?.data.attributes.fileName];

  return (
    <div>
      {isLoading && <h2>...Loading</h2>}
      {isSuccess && (
        <Link to={`/manga/${id}`} state={[mangaData, CoverImage]}>
          <div className={styles.item}>
            <img
              className={styles.image}
              src={`https://uploads.mangadex.org/covers/${id}/${CoverImage}.256.jpg`}
              alt=""
            />
            <div className={styles.infocontainer}>
              <h2 className={styles.titlename}>{attributes.title.en}</h2>
              <p className={styles.raiting}>{contentRating}</p>
            </div>
          </div>
        </Link>
      )}
    </div>
  );
};

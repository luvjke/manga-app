import React from 'react';
import { Link } from 'react-router-dom';

import styles from './MangaBlockItem.module.scss';
import { ItemBlock } from './MangaBlockItem.props';
import { useGetCoverQuery } from '../../../redux/api/Services';

export const MangaBlockItem = ({
  id,
  attributes,
  coverId,
  // contentRating,
  mangaData,
}: ItemBlock) => {
  const { data: cover, isSuccess, isLoading } = useGetCoverQuery(coverId);

  const CoverImage = [cover?.data.attributes.fileName];
  const titles =
    attributes.title.en ||
    attributes.title['ja-ro'] ||
    attributes.title.ja ||
    attributes.title.ru ||
    attributes.title.ko;
  return (
    <div>
      {isLoading && <h2>...Loading</h2>}
      {isSuccess && (
        <Link to={`/manga/${id}`} state={[mangaData, CoverImage]}>
          <div className={styles.item}>
            <div className={styles.image_block}>
              <img
                className={styles.image}
                src={`https://uploads.mangadex.org/covers/${id}/${CoverImage}.256.jpg`}
                alt=""
              />
            </div>
            <div className={styles.infocontainer}>
              {<h2 className={styles.titlename}>{titles}</h2>}
              {/* <p className={styles.raiting}>{contentRating}</p> */}
            </div>
          </div>
        </Link>
      )}
    </div>
  );
};

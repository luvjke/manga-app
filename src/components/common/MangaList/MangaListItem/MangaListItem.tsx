import React from 'react';
import { Link } from 'react-router-dom';

import styles from './MangaListItem.module.scss';
import { ItemList } from './MangaListItem.props';
import { useGetCoverQuery, useGetStatisticsQuery } from '../../../../redux/api/Services';
import luffypng from '../../../../assets/img/luffypng.png';
import { ReactComponent as FilledStar } from '../../../../assets/icons/StatsticStar.svg';
import { ReactComponent as FilledHearth } from '../../../../assets/icons/StatisticHearth.svg';

export const MangaListItem = ({
  id,
  attributes,
  coverId,
  contentRating,
  mangaData,
  index = 0,
}: ItemList) => {
  const { data: cover, isSuccess, isFetching } = useGetCoverQuery(coverId);
  const { data: statistic } = useGetStatisticsQuery(id);
  const BASE_ANIMATION_DELAY = 0.1;
  const animationDelay = index * BASE_ANIMATION_DELAY;
  const COVER_IMAGE = cover?.data.attributes.fileName;
  const AVERAGE_SCORE = statistic?.statistics[`${id}`].rating.average.toFixed(1);
  const FOLLOWS_COUNT = statistic?.statistics[`${id}`].follows;

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
              <div>
                <p className={styles.content_raiting}>{contentRating}</p>
                <h2 className={styles.titlename}>{titles}</h2>
                <div className={styles.statistic_containter}>
                  <span className={styles.stats}>
                    <FilledStar />
                    {AVERAGE_SCORE}
                  </span>
                  <span className={styles.stats}>
                    <FilledHearth />
                    {FOLLOWS_COUNT}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      )}
    </li>
  );
};

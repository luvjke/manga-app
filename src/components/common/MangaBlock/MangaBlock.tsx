import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { MangaCardProps } from './MangaBlock.props';
import styles from './MangaBlock.module.scss';
import { ApiRoutes } from '../../../common/constans';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { fetchMangaImages } from '../../../redux/MangaSlice/asyncAction';
import { coverData, status } from '../../../redux/MangaSlice/selectors';

export const MangaBlock = ({ title, mangaId, coverId }: MangaCardProps) => {
  const dispatch = useAppDispatch();
  const coverList = useAppSelector(coverData);
  const Status = useAppSelector(status);
  useEffect(() => {
    dispatch(fetchMangaImages(coverId));
  }, [dispatch]);
  console.log(coverList);

  return (
    <div className={styles.wrapper}>
      <div className={styles.block}>
        <Link to={`${ApiRoutes.MangaDetails}/${mangaId}`}>
          {/* <img src={`https://uploads.mangadex.org/covers/${mangaId}/${arrayCovers}`} alt="img" /> */}
          <h4 className={styles.title}>{title}</h4>
        </Link>
      </div>
    </div>
  );
};

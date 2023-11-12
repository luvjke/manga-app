import React from 'react';

import styles from './ChapterInfo.module.scss';
import { ChapterInfoProps } from './ChapterInfo.props';
import { useGetChaptersQuery } from '../../../redux/api/Services';

export const ChapterInfo = ({ id }: ChapterInfoProps) => {
  const { data, isSuccess } = useGetChaptersQuery(id);
  console.log(data);
  return (
    <>
      {isSuccess && (
        <div className={styles.container}>
          <h2 className={styles.h1}> LATEST MANGA RELEASES </h2>
        </div>
      )}
    </>
  );
};

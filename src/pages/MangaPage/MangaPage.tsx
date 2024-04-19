import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import styles from './MangaPage.module.scss';
import { MangaData } from '../../redux/api/types/manga';
import { ErrorComponent } from '../../components/common/ErrorComponent';
import { MangaInfo } from '../../components/common/MangaInfo';
import { ChapterList } from '../../components/common/ChapterList';
import { ReactComponent as BackStepButton } from '../../../src/assets/icons/BackStep.svg';
export const MangaPage = () => {
  const location = useLocation();
  const navigation = useNavigate();
  const mangaData: MangaData = location.state[0];
  const coverFile: string = location.state[1];

  const handleBackClick = () => {
    navigation(-1);
  };
  return (
    <div className={styles.wrapper}>
      {mangaData && coverFile ? (
        <div className={styles.container}>
          <div className={styles.backstep}>
            <BackStepButton onClick={handleBackClick} />
          </div>
          <MangaInfo mangaData={mangaData} coverFile={coverFile} />
          <ChapterList id={mangaData.id} />
        </div>
      ) : (
        <ErrorComponent />
      )}
    </div>
  );
};

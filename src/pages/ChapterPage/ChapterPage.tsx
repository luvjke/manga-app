import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import styles from './ChapterPage.module.scss';
import { ChapterItem } from '../../components/common/ChapterItem';
import { ErrorComponent } from '../../components/common/ErrorComponent';
import { ReactComponent as BackStepButton } from '../../../src/assets/icons/BackStep.svg';
export const ChapterPage = () => {
  const location = useLocation();
  const navigation = useNavigate();
  const chapterId: string = location.state[0];
  console.log(chapterId);

  const handleBackClick = () => {
    navigation(-1);
  };
  return (
    <main className={styles.main}>
      <div className={styles.backstep}>
        <BackStepButton onClick={handleBackClick} />
      </div>
      {chapterId ? <ChapterItem chapterId={chapterId} /> : <ErrorComponent />}
    </main>
  );
};

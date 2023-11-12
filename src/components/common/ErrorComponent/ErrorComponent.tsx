import React from 'react';

import styles from './ErrorComponent.module.scss';
import errorImg from '../../../assets/img/errorImg.png';
export const ErrorComponent = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.h404}>404</h2>
      <img className={styles.image} src={errorImg} alt="error" />

      <p>Sorry, an unexpected error has occurred.</p>
    </div>
  );
};

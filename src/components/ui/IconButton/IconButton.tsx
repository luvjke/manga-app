import React from 'react';

import styles from './IconButton.module.scss';
import { IconButtonProps } from './IconButton.props';
export const IconButton = ({ icon, onClick }: IconButtonProps) => {
  return (
    <button className={styles.icon_button} onClick={onClick}>
      {icon && <span className={styles.seacrspan}>{icon}</span>}
    </button>
  );
};

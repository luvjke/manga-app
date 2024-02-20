import React from 'react';
import classNames from 'classnames';

import styles from './IconButton.module.scss';
import { IconButtonProps } from './IconButton.props';
export const IconButton = ({ icon, version, onClick }: IconButtonProps) => {
  const buttonClassNames = classNames(
    styles.button,
    version && styles[version],
    icon && styles.icon_button
  );
  return (
    <button className={buttonClassNames} onClick={onClick}>
      {icon && <span className={styles.seacrspan}>{icon}</span>}
    </button>
  );
};

import React from 'react';
import classNames from 'classnames';

import { ButtonProps } from './Button.props';
import styles from './Button.module.scss';

export const Button = ({ onClick, isDisabled, label, icon, style }: ButtonProps) => {
  const buttonClassNames = classNames(
    styles.button,
    style && styles[style],
    icon && styles.icon_button
  );
  return (
    <button className={buttonClassNames} onClick={onClick} disabled={isDisabled}>
      {icon && <span className={styles.icon}>{icon}</span>}
      <span className={styles.label}>{label}</span>
    </button>
  );
};

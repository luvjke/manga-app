import React from 'react';
import classNames from 'classnames';

import { ButtonProps } from './Button.props';
import styles from './Button.module.scss';

export const Button = ({ onClick, disabled, label, icon, style }: ButtonProps) => {
  const buttonClassNames = classNames(
    styles.button,
    style && styles[style],
    icon && styles.icon_button
  );
  return (
    <button className={buttonClassNames} onClick={onClick} disabled={disabled}>
      {icon && <span className={styles.icon}>{icon}</span>}
      <span className={styles.label}>{label}</span>
    </button>
  );
};

import React from 'react';
import classNames from 'classnames';

import { InputProps } from './Input.props';
import styles from './Input.module.scss';

export const Input = ({ onChange, placeholder, icon, style, isDisabled }: InputProps) => {
  const InputClassNames = classNames(
    styles.input,
    style && styles[style],
    icon && styles.icon_button
  );
  return (
    <input
      className={InputClassNames}
      placeholder={placeholder}
      onChange={onChange}
      disabled={isDisabled}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
    </input>
  );
};

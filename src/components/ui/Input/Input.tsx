import React from 'react';
import classNames from 'classnames';

import { InputProps } from './Input.props';
import styles from './Input.module.scss';

export const Input = ({ onChange, value, placeholder, icon, isDisabled }: InputProps) => {
  const InputClassNames = classNames(styles.input, icon && styles.icon_input);
  return (
    <div className={styles.container}>
      <input
        className={InputClassNames}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={isDisabled}
      ></input>
      {icon && <span className={styles.icon}>{icon}</span>}
    </div>
  );
};

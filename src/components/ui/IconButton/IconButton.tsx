import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import styles from './IconButton.module.scss';
import { IconButtonProps } from './IconButton.props';
export const IconButton = ({
  icon,
  version,
  onClick,
  tag,
  href,
  state,
  target,
}: IconButtonProps) => {
  const buttonClassNames = classNames(
    styles.button,
    version && styles[version],
    icon && styles.icon_button
  );

  return tag === 'button' ? (
    <button className={buttonClassNames} onClick={onClick}>
      {icon && <>{icon}</>}
    </button>
  ) : (
    <Link to={href ?? ''} className={buttonClassNames} state={state} target={target}>
      {icon}
    </Link>
  );
};

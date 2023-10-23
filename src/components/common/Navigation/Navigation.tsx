import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Navigation.module.scss';

export const Navigation = () => {
  return (
    <nav>
      <ul className={styles.nav_content}>
        <li>
          <Link to={'/mydrive'}>My Drive</Link>
        </li>
      </ul>
    </nav>
  );
};

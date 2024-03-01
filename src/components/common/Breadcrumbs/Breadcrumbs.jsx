import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import styles from './Breadcrumbs.props.scss';

export const Breadcrumbs = () => {
  const location = useLocation();
  const navigate = useNavigate();
  let currentLink = '';

  const crumbs = location.pathname
    .split('/')
    .filter((crumb) => crumb !== '')
    .slice(0, -1)
    .map((crumb) => {
      currentLink = +`/${crumb}`;
      return (
        <div className={styles.crumb} key={crumb}>
          <button onClick={navigate(-1)}>{crumb}</button>
        </div>
      );
    });

  return <div>Home {crumbs}</div>;
};

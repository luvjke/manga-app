import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';
// import { Button } from '../../ui/Button';
import { ReactComponent as MainIcon } from '../../../assets/icons/Main.svg';
import { RoutesMap } from '../../../common/constans';
import { Search } from '../Search';

export const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.header_nav}>
        <div className={styles.icon}>
          <Link to={RoutesMap.MAIN}>
            <MainIcon />
          </Link>
        </div>
        <div className={styles.container_search}>
          <Search />
        </div>
        {/* <div className={styles.container_buttons}>
          <Button label="Log in" onClick={() => console.log('123')} style={'filled'} />
          <Button label="Sign Up" onClick={() => console.log('123')} style={'outline'} />
        </div> */}
      </nav>
    </header>
  );
};

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';
// import { Button } from '../../ui/Button';
import { ReactComponent as MainIcon } from '../../../assets/icons/Main.svg';
import { RoutesMap } from '../../../common/constans';
import { Search } from '../Search';
// import { Search } from '../Search';
import { ReactComponent as SearchIcon } from '../../../assets/icons/search-icon.svg';
import { IconButton } from '../../ui/IconButton';

export const Header = () => {
  const [isSearchOpen, IsSetSearchOpen] = useState(false);

  const handleClickSearchButton = () => {
    IsSetSearchOpen((prev) => !prev);
  };
  return (
    <header className={styles.header}>
      <div>
        <ul className={!isSearchOpen ? styles.search_close : styles.search_main}>
          <li className={styles.blog_search}>
            <form className={styles.post_search}>
              <Search />
            </form>
          </li>
        </ul>
        <nav className={styles.header_nav}>
          <div className={styles.icon}>
            <Link to={RoutesMap.MAIN}>
              <MainIcon />
            </Link>
          </div>
          <div className={styles.container_search}>
            <IconButton icon={<SearchIcon />} onClick={handleClickSearchButton} />
            {/* <button onClick={handleClickSearchButton}>dsdsds</button> */}
            {/* <Search /> */}
          </div>

          {/* <div className={styles.container_buttons}>
          <Button label="Log in" onClick={() => console.log('123')} style={'filled'} />
          <Button label="Sign Up" onClick={() => console.log('123')} style={'outline'} />
        </div> */}
        </nav>
      </div>
    </header>
  );
};

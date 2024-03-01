import React, { ChangeEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { debounce } from 'lodash';

import styles from './Header.module.scss';
import { ReactComponent as MainIcon } from '../../../assets/icons/Main.svg';
import { RoutesMap } from '../../../common/constans';
import { ReactComponent as SearchIcon } from '../../../assets/icons/search-icon.svg';
import { IconButton } from '../../ui/IconButton';
import { Button } from '../../ui/Button';
import { Input } from '../../ui/Input';

export const Header = () => {
  const [isSearchOpen, IsSetSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  // const URLSEARCH = new URLSearchParams();
  console.log(searchValue);

  const isButtonDisabled = searchValue === '';
  const DELAY = 300;

  const refreshStates = () => {
    IsSetSearchOpen(false);
  };
  const onChangeValue = (text: string) => {
    setSearchValue(text);
  };
  const updateSearchValue = debounce((str: string) => {
    onChangeValue(str);
  }, DELAY);
  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    updateSearchValue(event.target.value);
  };
  const handleClickSearchButton = () => {
    IsSetSearchOpen((prev) => !prev);
  };
  return (
    <header className={styles.header}>
      <div>
        <ul className={!isSearchOpen ? styles.search_close : styles.search_main}>
          <li className={styles.blog_search}>
            <form className={styles.post_search}>
              <div className={styles.container_search}>
                <Input placeholder="Search " onChange={onChangeSearch} version={'custom'} />
                <Link to={`/search/${searchValue}`} state={[searchValue]}>
                  <Button version={'custom'} label={'Search'} disabled={isButtonDisabled} />
                </Link>
              </div>
            </form>
          </li>
        </ul>
        <nav className={styles.header_nav}>
          <div className={styles.icon}>
            <Link to={RoutesMap.MAIN}>
              <MainIcon onClick={refreshStates} />
            </Link>
          </div>
          <div className={styles.container_search}>
            <IconButton
              icon={<SearchIcon />}
              onClick={handleClickSearchButton}
              version={'filled'}
            />
          </div>
          <div>
            <Link to={`/favorite`}>asjkdasdhaksjd</Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

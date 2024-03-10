import React, { ChangeEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { debounce } from 'lodash';

import styles from './Header.module.scss';
import { ReactComponent as MainIcon } from '../../../assets/icons/Main.svg';
import { RoutesMap } from '../../../common/constans';
import { ReactComponent as SearchIcon } from '../../../assets/icons/search-icon.svg';
import { ReactComponent as FilledIcon } from '../../../assets/icons/FillStar.svg';
import { IconButton } from '../../ui/IconButton';
import { Button } from '../../ui/Button';
import { Input } from '../../ui/Input';

export const Header = () => {
  const [isSearchOpen, IsSetSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const DELAY = 200;

  const refreshStates = () => {
    IsSetSearchOpen(false);
    setSearchValue('');
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
  const handleBlockInput = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Предотвращаем отправку формы
    }
  };
  return (
    <header className={styles.header}>
      <div>
        <ul className={!isSearchOpen ? styles.search_close : styles.search_main}>
          <li className={styles.blog_search}>
            <form className={styles.post_search}>
              <div className={styles.container_search}>
                <Input
                  placeholder="Search "
                  onChange={onChangeSearch}
                  version={'custom'}
                  onKeyDown={handleBlockInput}
                />

                <Button
                  version={'custom'}
                  label={'Search'}
                  href={`/search/${searchValue}`}
                  state={[searchValue]}
                  tag={'link'}
                />
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
          <div className={styles.right_container}>
            <div className={styles.nav_search}>
              <IconButton
                icon={<SearchIcon />}
                onClick={handleClickSearchButton}
                version={'filled'}
                tag="button"
              />
            </div>
            <div>
              <Button
                version={'advanced'}
                label={'Advanced'}
                tag={'link'}
                href={'/search'}
              ></Button>
            </div>
            <div className={styles.nav_favorite}>
              <IconButton icon={<FilledIcon />} href={`/favorite`} version={'filled'} tag="link" />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

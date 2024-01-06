import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';
import { Input } from '../../ui/Input';
import { ReactComponent as SearchIcon } from '../../../assets/icons/searchnormal1.svg';
// import { Button } from '../../ui/Button';
import { ReactComponent as MainIcon } from '../../../assets/icons/Main.svg';
import { RoutesMap } from '../../../common/constans';

export const Header = () => {
  const [value, setValue] = useState('');

  return (
    <header className={styles.header}>
      <nav className={styles.header_nav}>
        <div className={styles.icon}>
          <Link to={RoutesMap.MAIN}>
            <MainIcon />
          </Link>
        </div>
        <div className={styles.container_input}>
          <Input
            value={value}
            placeholder="Search "
            onChange={(event) => setValue(event.target.value)}
            icon={<SearchIcon />}
          />
        </div>
        {/* <div className={styles.container_buttons}>
          <Button label="Log in" onClick={() => console.log('123')} style={'filled'} />
          <Button label="Sign Up" onClick={() => console.log('123')} style={'outline'} />
        </div> */}
      </nav>
    </header>
  );
};

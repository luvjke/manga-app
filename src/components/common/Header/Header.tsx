import React, { useState } from 'react';

import styles from './Header.module.scss';
import { Input } from '../../ui/Input';
import { ReactComponent as SearchIcon } from '../../../assets/icons/searchnormal1.svg';
import { Button } from '../../ui/Button';

export const Header = () => {
  const [value, setValue] = useState('');

  return (
    <header className={styles.container}>
      <div className={styles.container_content}>
        <h1 className={styles.title}>CHAINSOW</h1>
        <div className={styles.container_input}>
          <Input
            value={value}
            placeholder="Search here"
            onChange={(event) => setValue(event.target.value)}
            icon={<SearchIcon />}
          />
        </div>
        <div className={styles.container_buttons}>
          <Button label="Log in" onClick={() => console.log('123')} style={'filled'} />
          <Button label="Sign Up" onClick={() => console.log('123')} style={'outline'} />
        </div>
      </div>
    </header>
  );
};

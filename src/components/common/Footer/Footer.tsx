import React from 'react';

import styles from './Footer.module.scss';
import { ReactComponent as GithubIcon } from '../../../assets/icons/gitHub.svg';
import { IconButton } from '../../ui/IconButton';
export const Footer = () => {
  return (
    <footer className={styles.footer_container}>
      <div className={styles.footer_box}>
        <nav className={styles.box_navigation}>
          <ul>
            <li>
              <IconButton
                icon={<GithubIcon />}
                version={'unfilled'}
                tag="link"
                href={`https://github.com/luvjke/manga-app`}
                target="_blank"
              />
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

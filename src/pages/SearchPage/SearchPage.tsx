import React from 'react';
import { useLocation } from 'react-router-dom';

import styles from './SearchPage.module.scss';
import { useGetSeachValueQuery } from '../../redux/api/Services';
import { MangaBlock } from '../../components/common/MangaBlock';
import { Header } from '../../components/common/Header';

export const SearchPage = () => {
  const location = useLocation();
  const searchValue: string = location.state[0];

  const { data: SearchArray } = useGetSeachValueQuery(searchValue);
  const ObjectData = [
    {
      items: SearchArray?.data,
    },
  ];
  return (
    <main>
      <Header />
      <div className={styles.layout}>
        {ObjectData?.map((props, index) => <MangaBlock {...props} key={index} />)}
      </div>
    </main>
  );
};

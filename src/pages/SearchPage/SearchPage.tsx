import React from 'react';
import { useLocation } from 'react-router-dom';

import styles from './SearchPage.module.scss';
import { useGetSeachValueQuery } from '../../redux/api/Services';
import { MangaBlock } from '../../components/common/MangaBlock';
import { AdvancedSearch } from '../../components/common/AdvancedSearch';

export const SearchPage = () => {
  const location = useLocation();
  const searchValue: string = location.state ? location.state[0] : '';
  const InputValues: string = location.state ? location.state[1] : '';
  console.log(location.state);

  const { data: SearchArray } = useGetSeachValueQuery({
    searchValue: searchValue,
    tags: InputValues,
  });
  const ObjectData = [
    {
      items: SearchArray?.data,
    },
  ];

  return (
    <main>
      <div className={styles.layout}>
        <div className={styles.wrapper}>
          <div className={styles.advanced}>
            <AdvancedSearch />
          </div>
          <div className={styles.layout}>
            {ObjectData?.map((props, index) => <MangaBlock {...props} key={index} />)}
          </div>
        </div>
      </div>
    </main>
  );
};

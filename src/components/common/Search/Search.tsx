import React, { ChangeEvent, useState } from 'react';
import { debounce } from 'lodash';
import { Link } from 'react-router-dom';

import styles from './Search.module.scss';
import { Input } from '../../ui/Input';
import { ReactComponent as SearchIcon } from '../../../assets/icons/searchnormal1.svg';
import { ReactComponent as ButtonIcon } from '../../../assets/icons/shuriken.svg';
import { IconButton } from '../../ui/IconButton';

// import { useGetSeachValueQuery } from '../../../redux/api/Services';

export const Search = () => {
  const [searchValue, setValue] = useState(' ');
  console.log(searchValue);
  // const { data } = useGetSeachValueQuery(searchValue);
  const delay = 400;

  const onChangeValue = (text: string) => {
    setValue(text);
  };
  const updateSearchValue = debounce((str: string) => {
    onChangeValue(str);
  }, delay);
  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    updateSearchValue(event.target.value);
  };

  // let dataSearch = data?.data;
  // let myClonedArray = dataSearch?.map((x) => Object.assign({}, x));

  console.log(searchValue);

  return (
    <div className={styles.container_search}>
      <Input placeholder="Search " onChange={onChangeSearch} icon={<SearchIcon />} />
      <Link to={`/search/${searchValue}`} state={[searchValue]}>
        <IconButton icon={<ButtonIcon />}></IconButton>
      </Link>
      {/* {isFetching ? (
        <p className={styles.loading}>Loading</p>
      ) : (
        !!myClonedArray?.length && (
          <div className={styles.data_container}>
            <div className={styles.data_box}>
              <ul className={styles.List}>
                {myClonedArray?.map((obj) => (
                  <li key={obj.id}>
                    <Link to={`/search/${obj.id}`}>
                      <p>{obj.attributes.title.en}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )
      )} */}
    </div>
  );
};

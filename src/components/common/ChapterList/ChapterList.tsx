import React from 'react';
import { Link } from 'react-router-dom';

import styles from './ChapterList.module.scss';
import { ChapterInfoProps } from './ChapterList.props';
import { useGetChaptersQuery } from '../../../redux/api/Services';
// import { IconButton } from '../../ui/IconButton';
// import { ReactComponent as IconSort } from '../../../assets/icons/sort.svg';
// import { ChapterData } from '../../../redux/api/types/chapter';

export const ChapterList = ({ id }: ChapterInfoProps) => {
  const { data: ChaptersArray, isSuccess, isFetching } = useGetChaptersQuery(id);

  let dataChapters = ChaptersArray?.data;
  // let myClonedArray: ChapterData[] = [];
  // dataChapters?.forEach((val) => myClonedArray.push(Object.assign({}, val)));
  let myClonedArray = dataChapters?.map((x) => Object.assign({}, x));

  // const handleClickSort = () => {
  //   myClonedArray?.sort((a, b) => {
  //     return parseInt(a.attributes.chapter) - parseInt(b.attributes.chapter);
  //   });
  // };

  const dateFilterFunc = (string: string) => {
    // eslint-disable-next-line no-useless-escape
    return string.replace(/\T.*/, '').split('-').reverse().join('.');
  };
  console.log(myClonedArray);
  return (
    <>
      {isFetching ? (
        <p className={styles.loading}>Loading</p>
      ) : (
        isSuccess && (
          <div className={styles.container}>
            <div className={styles.container_header}>
              <h2 className={styles.spec}> LATEST MANGA RELEASES </h2>
              {/* <IconButton onClick={() => handleClickSort()} icon={<IconSort />} /> */}
            </div>
            <div className={styles.chapters}>
              {!dataChapters?.length ? (
                <p className={styles.error}>No translated charapters on ENGLISH LANGUAGE</p>
              ) : (
                myClonedArray?.map((dataChapters) => {
                  return (
                    <Link
                      key={dataChapters.id}
                      to={`../manga/chapter/${dataChapters.id}`}
                      state={[dataChapters.id]}
                    >
                      <div className={styles.chapter}>
                        <p className={styles.title}>
                          Chapter {dataChapters.attributes.chapter} {dataChapters.attributes.title}
                        </p>
                        <p className={styles.date}>
                          {dateFilterFunc(dataChapters.attributes.publishAt)}
                        </p>
                      </div>
                    </Link>
                  );
                })
              )}
            </div>
          </div>
        )
      )}
    </>
  );
};

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import styles from './ChapterList.module.scss';
import { ChapterInfoProps } from './ChapterList.props';
import { useGetChaptersQuery } from '../../../redux/api/Services';
import { ChapterData } from '../../../redux/api/types/chapter';
import { IconButton } from '../../ui/IconButton';
import { ReactComponent as IconSort } from '../../../assets/icons/sort.svg';
// import { ChapterData } from '../../../redux/api/types/chapter';

export const ChapterList = ({ id }: ChapterInfoProps) => {
  const { data: ChaptersArray, isSuccess, isFetching } = useGetChaptersQuery(id);

  let dataChapters = ChaptersArray?.data;

  // dataChapters?.forEach((val) => myClonedArray.push(Object.assign({}, val)));

  const [clonedArray, setClonedArray] = React.useState<ChapterData[] | undefined>(undefined);
  const [ascending, setAscending] = React.useState(false);

  useEffect(() => {
    if (isSuccess) {
      let myClonedArray = ChaptersArray?.data?.map((x) => ({ ...x }));
      setClonedArray(myClonedArray);
    }
  }, [isSuccess, ChaptersArray]);

  const handleClickSort = () => {
    setAscending((prev) => !prev);
    if (clonedArray) {
      const sortedArray = [...clonedArray];
      sortedArray.sort((a, b) => {
        const chapterA = parseFloat(a.attributes.chapter);
        const chapterB = parseFloat(b.attributes.chapter);
        return ascending ? chapterA - chapterB : chapterB - chapterA;
      });
      setClonedArray(sortedArray);
    }
  };
  const dateFilterFunc = (string: string) => {
    return string.replace(/\T.*/, '').split('-').reverse().join('.');
  };

  return (
    <>
      {isFetching ? (
        <p className={styles.loading}>Loading</p>
      ) : (
        isSuccess && (
          <div className={styles.container}>
            <div className={styles.container_header}>
              <h2 className={styles.spec}> LATEST MANGA RELEASES </h2>
              <IconButton
                onClick={() => handleClickSort()}
                icon={<IconSort />}
                version={'custom'}
              />
            </div>
            <ul className={styles.chapters}>
              {!dataChapters?.length ? (
                <p className={styles.error}>No translated charapters on ENGLISH LANGUAGE</p>
              ) : (
                clonedArray?.map((dataChapters) => {
                  return (
                    <li key={dataChapters.id}>
                      <Link to={`../manga/chapter/${dataChapters.id}`} state={[dataChapters.id]}>
                        <div className={styles.chapter}>
                          <p className={styles.title}>
                            Chapter {dataChapters.attributes.chapter}{' '}
                            {dataChapters.attributes.title}
                          </p>
                          <p className={styles.date}>
                            {dateFilterFunc(dataChapters.attributes.publishAt)}
                          </p>
                        </div>
                      </Link>
                    </li>
                  );
                })
              )}
            </ul>
          </div>
        )
      )}
    </>
  );
};

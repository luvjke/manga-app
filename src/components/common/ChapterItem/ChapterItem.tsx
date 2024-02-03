import React from 'react';

import styles from './ChapterItem.module.scss';
import { ChapterItemProps } from './ChapterItem.props';
import { useGetChapterQuery } from '../../../redux/api/Services';

export const ChapterItem = ({ chapterId }: ChapterItemProps) => {
  const { data: dataObject, isLoading, isSuccess } = useGetChapterQuery(chapterId);
  console.log(dataObject);
  console.log(dataObject);
  return (
    <div className={styles.chapters}>
      {isLoading && <h2>...Loading</h2>}
      {isSuccess &&
        dataObject?.chapter.dataSaver.map((chapter, id) => {
          return (
            <div className={styles.container_content}>
              <img
                key={id}
                className={styles.content}
                src={`https://uploads.mangadex.org/data-saver/${dataObject.chapter.hash}/${chapter}`}
                alt=""
              />
            </div>
          );
        })}
    </div>
  );
};

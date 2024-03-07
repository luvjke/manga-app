import React from 'react';

import styles from './ChapterItem.module.scss';
import { ChapterItemProps } from './ChapterItem.props';
import { useGetChapterQuery } from '../../../redux/api/Services';
import { ChapterImages } from './components/ChapterImages';

export const ChapterItem = ({ chapterId }: ChapterItemProps) => {
  const { data: dataObject } = useGetChapterQuery(chapterId);

  const pagesUrl = dataObject?.chapter.data.map((fileName: string, index: number) => ({
    url: `https://uploads.mangadex.org/data/${dataObject.chapter.hash}/${fileName}`,
    pageIndex: index,
  }));
  console.log(pagesUrl);
  const images = pagesUrl?.map((page) => {
    return page.url;
  });
  console.log(images);

  // const totalPages = images?.length;

  // const imageUrl = images?.[currentPage];
  // console.log(imageUrl);
  return <div className={styles.chapters}>{images && <ChapterImages images={images} />}</div>;
};

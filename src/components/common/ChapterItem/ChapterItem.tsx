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
  return (
    <div className={styles.chapters}>
      {images && <ChapterImages images={images} />}
      {/* {isLoading && <h2>...Loading</h2>}
      {
        isSuccess && (
          <>
            <img
              src={`${images?.[currentPage]}`}
              alt={`Page ${currentPage + 1}`}
              key={currentPage}
              width={512}
              height={1080}
              style={{
                width: 'auto',
                height: '100%',
              }}
            />
            <div className="mt-4 flex justify-center">
              {currentPage > 0 && (
                <button
                  onClick={() => setCurrentPage(currentPage - 1)}
                  className="m-2 rounded-lg bg-slate-950 p-3"
                >
                  Bac
                </button>
              )}
              {totalPages && currentPage < totalPages - 1 && (
                <button
                  onClick={() => setCurrentPage(currentPage + 1)}
                  className="m-2 rounded-lg bg-slate-950 p-3"
                >
                  Next
                </button>
              )}
            </div>
          </>
        )
        // dataObject?.chapter.dataSaver.map((chapter, id) => {
        //   return (
        //     <div className={styles.container_content}>
        //       <img
        //         key={id}
        //         className={styles.content}
        //         src={`https://uploads.mangadex.org/data-saver/${dataObject.chapter.hash}/${chapter}`}
        //         alt=""
        //       />
        //     </div>
        //   );
        //  })
      } */}
    </div>
  );
};

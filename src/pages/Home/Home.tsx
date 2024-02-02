import React from 'react';
// import { useParams } from 'react-router-dom';

import styles from './Home.module.scss';
import { MangaBlock } from '../../components/common/MangaBlock';
import { useGetMangaQuery } from '../../redux/api/Services';
import { ErrorComponent } from '../../components/common/ErrorComponent';

export const Home = () => {
  // const { orderType } = useParams();

  let currentPage: string = 'latestUploadedChapter';
  // switch (orderType) {
  //   case 'rating':
  //     currentPage = 'Top Rated';
  //     break;
  //   case 'createdAt':
  //     currentPage = 'New Releases';
  //     break;
  //   case 'followedCount':
  //     currentPage = 'Most Popular';
  //     break;
  //   case 'latestUploadedChapter':
  //     currentPage = 'Latest Chapters';
  //     break;
  // }
  const {
    data: MangaArray,
    isLoading: mangaLoading,
    isError: mangaError,
  } = useGetMangaQuery(currentPage); //https://api.mangadex.org/manga?order[latestUploadedChapter]=desc&limit=12&includes[]=cover_art&&excludedTags%5B%5D=5920b825-4181-4a17-beeb-9918b0ff7a30&excludedTagsMode=AND&contentRating%5B%5D=safe&contentRating[]=safe

  // const { data: MangaClassic } = useGetMangaQuery('rating');
  const ObjectData = [
    {
      items: MangaArray?.data,
    },
  ];
  // const MostPopular = [
  //   {
  //     items: MangaClassic?.data,
  //   },
  // ];

  if (mangaLoading) {
    return <div>Загрузка...</div>;
  }
  if (mangaError) {
    return <ErrorComponent />;
  }
  return (
    <main>
      <div className={styles.layout}>
        {ObjectData?.map((props, index) => <MangaBlock {...props} key={index} />)}
      </div>
      {/* <div className={styles.layout2}>
        {MostPopular?.map((props, index) => <MangaBlock {...props} key={index} />)}
      </div> */}
    </main>
  );
};

import React from 'react';
// import { useParams } from 'react-router-dom';

import styles from './Home.module.scss';
import { MangaBlock } from '../../components/common/MangaBlock';
import { useGetMangaQuery } from '../../redux/api/Services';
import { ErrorComponent } from '../../components/common/ErrorComponent';
import { Footer } from '../../components/common/Footer';
import { MangaData } from '../../redux/api/types/manga';
import { Button } from '../../components/ui/Button';

export const Home = () => {
  // const { orderType } = useParams();
  const [mangaList, setMangaList] = React.useState<MangaData[]>([]);
  const [offset, setOffset] = React.useState(0);
  let orderType: string = 'latestUploadedChapter';

  // switch (orderType) {
  //   case 'rating':
  //     orderType = 'Top Rated';
  //     break;
  //   case 'createdAt':
  //     orderType = 'New Releases';
  //     break;
  //   case 'followedCount':
  //     orderType = 'Most Popular';
  //     break;
  //   case 'latestUploadedChapter':
  //     orderType = 'Latest Chapters';
  //     break;
  // }
  const handleLoadMore = () => {
    setOffset((prevOffset) => prevOffset + 15);
  };

  const {
    data: MangaArray,
    isLoading: mangaLoading,
    isError: mangaError,
  } = useGetMangaQuery({ listOrder: orderType, offset: offset });
  const ObjectData = [
    {
      items: mangaList,
    },
  ];

  React.useEffect(() => {
    if (MangaArray?.data) {
      setMangaList((prevList) => [...prevList, ...MangaArray.data]);
    }
  }, [MangaArray]);

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
      <div>
        {ObjectData?.length > 0 && (
          <div className={styles.pagination}>
            <Button
              onClick={handleLoadMore}
              version={'pagination'}
              tag={'button'}
              label="LOAD MORE..."
            />
          </div>
        )}
      </div>
      <Footer />
    </main>
  );
};

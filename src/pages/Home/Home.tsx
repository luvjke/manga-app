import React from 'react';
// import { useParams } from 'react-router-dom';

import styles from './Home.module.scss';
import { MangaBlock } from '../../components/common/MangaBlock';
import { useGetMangaQuery } from '../../redux/api/Services';
import { ErrorComponent } from '../../components/common/ErrorComponent';
import { Footer } from '../../components/common/Footer';
import { MangaData } from '../../redux/api/types/manga';
import { Button } from '../../components/ui/Button';
import { MangaList } from '../../components/common/MangaList';
import { DisplayType } from './Home.props';
import { IconButton } from '../../components/ui/IconButton';
import { ReactComponent as GridIcon } from '../../../src/assets/icons/gridIcon.svg';
import { ReactComponent as AlbumIcon } from '../../../src/assets/icons/albumIcon.svg';
export const Home = () => {
  // const { orderType } = useParams();
  const [mangaList, setMangaList] = React.useState<MangaData[]>([]);
  const [offset, setOffset] = React.useState(0);
  const [displayType, setDisplayType] = React.useState<DisplayType>(DisplayType.block);
  let orderType: string = 'latestUploadedChapter';

  const handleDisplayClick = (displayType: DisplayType) => {
    setDisplayType(displayType);
  };

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
      <div className={styles.container}>
        <div className={styles.upper}>sds</div>
        <div className={styles.wrapper}>
          {/* <h1 className={styles.mainh1}>Last updates</h1> */}
          <div className={styles.layout_selector}>
            <IconButton
              version={'unfilled'}
              onClick={() => handleDisplayClick(DisplayType.block)}
              icon={<GridIcon />}
              tag="button"
            ></IconButton>
            <IconButton
              version={'unfilled'}
              onClick={() => handleDisplayClick(DisplayType.list)}
              icon={<AlbumIcon />}
              tag="button"
            ></IconButton>
          </div>
          <div className={styles.layout}>
            {ObjectData?.map((props, index) =>
              displayType === DisplayType.block ? (
                <MangaBlock {...props} key={index} />
              ) : (
                <MangaList {...props} key={index} />
              )
            )}
          </div>
        </div>
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

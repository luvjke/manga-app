import React from 'react';
import { Link } from 'react-router-dom';

import styles from './ChapterItem.module.scss';
import { ChapterItemProps, DisplayMangaType } from './ChapterItem.props';
import { useGetChapterQuery } from '../../../redux/api/Services';
import { ChapterImages } from './components/ChapterImages';
import { IconButton } from '../../ui/IconButton';
import { ReactComponent as SettingsIcon } from '../../../assets/icons/SettingsIcon.svg';
import { ChapterTape } from './components/ChapterTape';
import { Button } from '../../ui/Button';
export const ChapterItem = ({ chapterId, otherChapters }: ChapterItemProps) => {
  const [containerWidth, setContainerWidth] = React.useState(400);
  const [isSettingsOpen, IsSetSettingsOpen] = React.useState(false);
  const [displayType, setDisplayType] = React.useState<DisplayMangaType>(DisplayMangaType.pages);
  const { data: dataObject } = useGetChapterQuery(chapterId);

  const pagesUrl = dataObject?.chapter.data.map((fileName: string, index: number) => ({
    url: `https://uploads.mangadex.org/data/${dataObject.chapter.hash}/${fileName}`,
    pageIndex: index,
  }));
  console.log(pagesUrl);
  const images = pagesUrl?.map((page) => {
    return page.url;
  });
  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContainerWidth(parseInt(event.target.value));
  };
  const handleClickAdvancedButton = () => {
    IsSetSettingsOpen((prev) => !prev);
  };
  const handleDisplayClick = (displayType: DisplayMangaType) => {
    setDisplayType(displayType);
  };
  // const totalPages = images?.length;

  // const imageUrl = images?.[currentPage];
  // console.log(imageUrl);
  return (
    <div className={styles.chapters}>
      <div className={styles.settings_buttons}>
        <IconButton
          onClick={handleClickAdvancedButton}
          version={'custom2'}
          icon={<SettingsIcon />}
          tag="button"
        />
      </div>
      {displayType === DisplayMangaType.pages ? (
        <div>{images && <ChapterImages images={images} containerWidth={containerWidth} />}</div>
      ) : (
        <div>{images && <ChapterTape images={images} containerWidth={containerWidth} />}</div>
      )}
      <div className={styles.setting_tab}>
        {!isSettingsOpen ? (
          <div className={styles.setting_close}></div>
        ) : (
          <div className={styles.setting_open}>
            <div className={styles.setting_tab}>
              <div>
                <Button
                  tag="button"
                  version={'unfilled'}
                  label={'X'}
                  onClick={handleClickAdvancedButton}
                />
              </div>
              <h1>Settings</h1>
              <span>Width container {containerWidth}</span>
              <input
                type="range"
                min="400"
                max="1400"
                step="100"
                value={containerWidth}
                onChange={handleSliderChange}
              />
              <div>
                <p>Display Type</p>
                <div>
                  <Button
                    tag="button"
                    version={'filled'}
                    label={'Page'}
                    onClick={() => handleDisplayClick(DisplayMangaType.pages)}
                  />
                  <Button
                    tag="button"
                    version={'filled'}
                    label={'Tape'}
                    onClick={() => handleDisplayClick(DisplayMangaType.tape)}
                  />
                </div>
              </div>
              <div>
                {otherChapters?.map((dataChapters) => {
                  return (
                    <li key={dataChapters.id}>
                      <Link
                        to={`../manga/chapter/${dataChapters.id}`}
                        state={[dataChapters.id, otherChapters]}
                      >
                        <div className={styles.chapter}>
                          <p className={styles.title}>
                            Chapter {dataChapters.attributes.chapter}{' '}
                            {dataChapters.attributes.title}
                          </p>
                        </div>
                      </Link>
                    </li>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

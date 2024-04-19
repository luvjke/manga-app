import React, { useState } from 'react';

import styles from './ChapterImages.module.scss';
import { Images } from './ChapterImages.props';
// import { IconButton } from '../../../../ui/IconButton';
// import { ReactComponent as SettingsIcon } from '../../../../../assets/icons/SettingsIcon.svg';
export const ChapterImages = ({ images, containerWidth }: Images) => {
  const [currentPage, setCurrentPage] = useState(0);
  // const [containerWidth, setContainerWidth] = useState(400);
  // const [isSettingsOpen, IsSetSettingsOpen] = React.useState(false);

  const totalPages = images.length;
  const imageUrl = images[currentPage];

  // const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setContainerWidth(parseInt(event.target.value));
  // };
  // const handleClickAdvancedButton = () => {
  //   IsSetSettingsOpen((prev) => !prev);
  // };
  return (
    <div className={styles.wrapper}>
      {/* <div className={styles.button_setting}>
        <IconButton
          onClick={handleClickAdvancedButton}
          version={'custom2'}
          icon={<SettingsIcon />}
          tag="button"
        />
      </div> */}
      <div className={styles.container}>
        <div className={styles.solo_image} style={{ width: containerWidth }}>
          {imageUrl && (
            <img
              className={styles.image}
              src={imageUrl}
              alt={`Page ${currentPage + 1}`}
              key={currentPage}
            />
          )}
        </div>
        <div className={styles.button_container}>
          {currentPage > 0 ? (
            <div
              className={styles.button_item}
              onClick={() => setCurrentPage(currentPage - 1)}
            ></div>
          ) : (
            <div></div>
          )}
          <div></div>
          {totalPages && currentPage < totalPages - 1 && (
            <div
              className={styles.button_item}
              onClick={() => setCurrentPage(currentPage + 1)}
            ></div>
          )}
        </div>
      </div>
      {/* <div>
        {!isSettingsOpen ? (
          <div className={styles.setting_close}></div>
        ) : (
          <div className={styles.setting_open}>
            <div className={styles.setting_tab}>
              <div className={styles.widthchanger}>
                <span>Width container {containerWidth}</span>
                <input
                  type="range"
                  min="400"
                  max="1400"
                  step="100"
                  value={containerWidth}
                  onChange={handleSliderChange}
                />
              </div>
            </div>
          </div>
        )}
      </div> */}
    </div>
  );
};

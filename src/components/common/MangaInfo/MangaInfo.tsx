/* eslint-disable array-callback-return */
import React from 'react';

import styles from './MangaInfo.module.scss';
import { MangaInfoProps } from './MangaInfo.props';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import {
  addFavouriteManga,
  removeFavouriteManga,
} from '../../../redux/favoriteSlice/favoriteSlice';
import { favouriteMangaSelector } from '../../../redux/favoriteSlice/selectors';

export const MangaInfo = ({ mangaData, coverFile }: MangaInfoProps) => {
  const filteredDesc = mangaData?.attributes.description.en.replace(/---[\s\S]*|(\*\*)[\s\S]*/, '');
  const isFavorited = React.useRef(false);
  const favoritedMangas = useAppSelector(favouriteMangaSelector);
  const dispatch = useAppDispatch();

  if (Array.isArray(favoritedMangas) && favoritedMangas.includes(mangaData)) {
    isFavorited.current = true;
  }

  const handleAddFavorite = () => {
    if (
      Array.isArray(favoritedMangas) &&
      favoritedMangas.map((data) => data.id).includes(mangaData.id)
    ) {
      dispatch(removeFavouriteManga(mangaData));
      isFavorited.current = false;
    } else {
      dispatch(addFavouriteManga(mangaData));
      isFavorited.current = true;
    }
  };
  console.log(favoritedMangas);
  const title =
    mangaData.attributes.title.en ||
    mangaData?.attributes.title['ja-ro'] ||
    mangaData?.attributes.title.ja ||
    mangaData?.attributes.title.ru ||
    mangaData?.attributes.title.ko;

  const genres = mangaData.attributes.tags.filter((tag) => tag.attributes.group === 'genre');
  const themes = mangaData.attributes.tags.filter((tag) => tag.attributes.group === 'theme');
  const formats = mangaData.attributes.tags.filter((tag) => tag.attributes.group === 'format');

  const manga_formats =
    formats.length > 0 ? (
      formats.map((tag) => {
        return (
          <p key={tag.id} className={styles.tag}>
            {tag.attributes.name.en}
          </p>
        );
      })
    ) : (
      <div>?</div>
    );
  const manga_genres =
    genres.length > 0 ? (
      genres.map((tag) => {
        return (
          <p key={tag.id} className={styles.tag}>
            {tag.attributes.name.en}
          </p>
        );
      })
    ) : (
      <div>?</div>
    );
  const manga_themes =
    themes.length > 0 ? (
      themes.map((tag) => {
        return (
          <p key={tag.id} className={styles.tag}>
            {tag.attributes.name.en}
          </p>
        );
      })
    ) : (
      <div>?</div>
    );
  return (
    <div className={styles.container}>
      <div className={styles.summary_image}>
        <img
          className={styles.image}
          src={`https://uploads.mangadex.org/covers/${mangaData.id}/${coverFile}.256.jpg`}
          alt=""
        />
      </div>
      <div className={styles.summary_content}>
        <div className={styles.post_content}>
          <div className={styles.titles}>
            {<h2 className={styles.title_main}>{title}</h2>}
            <span className={styles.status}>[{mangaData?.attributes.status}]</span>
            <button onClick={handleAddFavorite}>dsadhiuashjkd</button>
          </div>
          <div className={styles.post_status}>
            <h3>Info</h3>
            <p className={styles.post_span}>
              <span>release {mangaData?.attributes.year || '?'}</span>
              <span>demographic {mangaData?.attributes.publicationDemographic || '?'}</span>
            </p>
            <p className={styles.post_span}></p>
          </div>
          <div className={styles.post_category}>
            <h3>Format</h3>
            <div className={styles.post_genre}>{manga_formats}</div>
            <h3>Theme</h3>
            <div className={styles.post_genre}>{manga_themes}</div>
            <h3>Genre</h3>
            <div className={styles.post_genre}>{manga_genres}</div>
          </div>
        </div>
        <div className={styles.description_full}>
          <h3 className={styles.synopsis_title}>Synopsis of {title} </h3>
          {filteredDesc || ' No Description here'}
        </div>
      </div>
    </div>
  );
};

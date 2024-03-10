import React from 'react';

import styles from './AdvancedSearch.module.scss';
import { Input } from '../../ui/Input';
import { Button } from '../../ui/Button';

export const AdvancedSearch = () => {
  const [isAdvancedOpen, IsSetAdvancedOpen] = React.useState(false);

  const handleClickAdvancedButton = () => {
    IsSetAdvancedOpen((prev) => !prev);
  };
  return (
    <div className={styles.container}>
      <div className={styles.search_content}>
        <form className={styles.input_side}>
          <Input onChange={() => console.log()} version={'unfilled'} />
          <Button version={'outline'} label={'Search'} />
        </form>
        <div>
          <Button version={'outline'} label={'Advanced'} onClick={handleClickAdvancedButton} />
        </div>
      </div>
      <div className={!isAdvancedOpen ? styles.advanced_close : styles.advanced_inputs}>
        <form>
          <ul>
            <li>
              <ul className={styles.checkboxs}>
                <li>
                  <input id="Action" type="checkbox" />
                  <label htmlFor="action">Action</label>
                </li>
                <li>
                  <input id="Adventure" type="checkbox" />
                  <label htmlFor="Adventure">Adventure</label>
                </li>
                <li>
                  <input id="Comedy" type="checkbox" />
                  <label htmlFor="Comedy">Comedy</label>
                </li>
                <li>
                  <input id="Comic" type="checkbox" />
                  <label htmlFor="Comic">Comic</label>
                </li>
                <li>
                  <input id="Cooking" type="checkbox" />
                  <label htmlFor="Cooking">Cooking</label>
                </li>
                <li>
                  <input id="Doujinshi" type="checkbox" />
                  <label htmlFor="Doujinshi">Doujinshi</label>
                </li>
                <li>
                  <input id="Drama" type="checkbox" />
                  <label htmlFor="Drama">Drama</label>
                </li>
                <li>
                  <input id="Fantasy" type="checkbox" />
                  <label htmlFor="Fantasy">Fantasy</label>
                </li>
                <li>
                  <input id="Harem" type="checkbox" />
                  <label htmlFor="Harem">Harem</label>
                </li>
                <li>
                  <input id="Historical" type="checkbox" />
                  <label htmlFor="Historical">Historical</label>
                </li>
                <li>
                  <input id="Horror" type="checkbox" />
                  <label htmlFor="Horror">Horror</label>
                </li>
                <li>
                  <input id="Isekai" type="checkbox" />
                  <label htmlFor="Isekai">Isekai</label>
                </li>
                <li>
                  <input id="Magic" type="checkbox" />
                  <label htmlFor="Magic">Magic</label>
                </li>
                <li>
                  <input id="Martial Arts" type="checkbox" />
                  <label htmlFor="Martial Arts">Martial Arts</label>
                </li>
                <li>
                  <input id="Mecha" type="checkbox" />
                  <label htmlFor="Mecha">Mecha</label>
                </li>
                <li>
                  <input id="Military" type="checkbox" />
                  <label htmlFor="Military">Military</label>
                </li>
                <li>
                  <input id="Psychological" type="checkbox" />
                  <label htmlFor="Psychological">Psychological</label>
                </li>
                <li>
                  <input id="Reincarnation" type="checkbox" />
                  <label htmlFor="Reincarnation">Reincarnation</label>
                </li>
                <li>
                  <input id="Romance" type="checkbox" />
                  <label htmlFor="Romance">Romance</label>
                </li>
                <li>
                  <input id="School Life" type="checkbox" />
                  <label htmlFor="School Life">School Life</label>
                </li>
                <li>
                  <input id="Sci-fi" type="checkbox" />
                  <label htmlFor="Sci-fi">Sci-fi</label>
                </li>
                <li>
                  <input id="Slice of Life" type="checkbox" />
                  <label htmlFor="Slice of Life">Slice of Life</label>
                </li>
                <li>
                  <input id="Sports" type="checkbox" />
                  <label htmlFor="Sports">Sports</label>
                </li>
                <li>
                  <input id="Supernatural" type="checkbox" />
                  <label htmlFor="Supernatural">Supernatural</label>
                </li>
                <li>
                  <input id="Thriller" type="checkbox" />
                  <label htmlFor="Thriller">Thriller</label>
                </li>
                <li>
                  <input id="Tragedy" type="checkbox" />
                  <label htmlFor="Tragedy">Tragedy</label>
                </li>
              </ul>
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
};

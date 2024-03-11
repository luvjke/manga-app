import React, { ChangeEvent } from 'react';

import styles from './AdvancedSearch.module.scss';
import { Input } from '../../ui/Input';
import { Button } from '../../ui/Button';

export const AdvancedSearch = () => {
  const [isAdvancedOpen, IsSetAdvancedOpen] = React.useState(false);
  const [selectedGenres, setSelectedGenres] = React.useState<string[]>([]);

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;

    if (checked) {
      setSelectedGenres((prevSelectedGenres: any) => [...prevSelectedGenres, value]);
    } else {
      setSelectedGenres((prevSelectedGenres: any[]) =>
        prevSelectedGenres.filter((genre: string) => genre !== value)
      );
    }
  };

  const generateLink = () => {
    const selectedGenresString = selectedGenres.join('&includedTags%5B%5D=');
    return `&includedTags%5B%5D=${selectedGenresString}`;
  };
  console.log(selectedGenres);
  console.log(generateLink());
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
                  <input
                    className={styles.action}
                    id="Action"
                    type="checkbox"
                    onChange={handleCheckboxChange}
                    value="391b0423-d847-456f-aff0-8b0cfc03066b"
                  />
                  <label htmlFor="action">Action</label>
                </li>
                <li>
                  <input
                    id="Adventure"
                    type="checkbox"
                    onChange={handleCheckboxChange}
                    value="87cc87cd-a395-47af-b27a-93258283bbc6"
                  />
                  <label htmlFor="Adventure">Adventure</label>
                </li>
                <li>
                  <input
                    id="Comedy"
                    type="checkbox"
                    onChange={handleCheckboxChange}
                    value="4d32cc48-9f00-4cca-9b5a-a839f0764984"
                  />
                  <label htmlFor="Comedy">Comedy</label>
                </li>
                <li>
                  <input
                    id="Web Comic"
                    type="checkbox"
                    onChange={handleCheckboxChange}
                    value="e197df38-d0e7-43b5-9b09-2842d0c326dd"
                  />
                  <label htmlFor="Web Comic">Web Comic</label>
                </li>
                <li>
                  <input
                    id="Cooking"
                    type="checkbox"
                    onChange={handleCheckboxChange}
                    value="ea2bc92d-1c26-4930-9b7c-d5c0dc1b6869"
                  />
                  <label htmlFor="Cooking">Cooking</label>
                </li>
                <li>
                  <input
                    id="Doujinshi"
                    type="checkbox"
                    onChange={handleCheckboxChange}
                    value="b13b2a48-c720-44a9-9c77-39c9979373fb"
                  />
                  <label htmlFor="Doujinshi">Doujinshi</label>
                </li>
                <li>
                  <input
                    id="Drama"
                    type="checkbox"
                    onChange={handleCheckboxChange}
                    value="b9af3a63-f058-46de-a9a0-e0c13906197a"
                  />
                  <label htmlFor="Drama">Drama</label>
                </li>
                <li>
                  <input
                    id="Fantasy"
                    type="checkbox"
                    onChange={handleCheckboxChange}
                    value="cdc58593-87dd-415e-bbc0-2ec27bf404cc"
                  />
                  <label htmlFor="Fantasy">Fantasy</label>
                </li>
                <li>
                  <input
                    id="Harem"
                    type="checkbox"
                    onChange={handleCheckboxChange}
                    value="aafb99c1-7f60-43fa-b75f-fc9502ce29c7"
                  />
                  <label htmlFor="Harem">Harem</label>
                </li>
                <li>
                  <input
                    id="Historical"
                    type="checkbox"
                    onChange={handleCheckboxChange}
                    value="33771934-028e-4cb3-8744-691e866a923e"
                  />
                  <label htmlFor="Historical">Historical</label>
                </li>
                <li>
                  <input
                    id="Horror"
                    type="checkbox"
                    onChange={handleCheckboxChange}
                    value="cdad7e68-1419-41dd-bdce-27753074a640"
                  />
                  <label htmlFor="Horror">Horror</label>
                </li>
                <li>
                  <input
                    id="Isekai"
                    type="checkbox"
                    onChange={handleCheckboxChange}
                    value="ace04997-f6bd-436e-b261-779182193d3d"
                  />
                  <label htmlFor="Isekai">Isekai</label>
                </li>
                <li>
                  <input
                    id="Magic"
                    type="checkbox"
                    onChange={handleCheckboxChange}
                    value="a1f53773-c69a-4ce5-8cab-fffcd90b1565"
                  />
                  <label htmlFor="Magic">Magic</label>
                </li>
                <li>
                  <input
                    id="Martial Arts"
                    type="checkbox"
                    onChange={handleCheckboxChange}
                    value="799c202e-7daa-44eb-9cf7-8a3c0441531e"
                  />
                  <label htmlFor="Martial Arts">Martial Arts</label>
                </li>
                <li>
                  <input
                    id="Mecha"
                    type="checkbox"
                    onChange={handleCheckboxChange}
                    value="50880a9d-5440-4732-9afb-8f457127e836"
                  />
                  <label htmlFor="Mecha">Mecha</label>
                </li>
                <li>
                  <input
                    id="Military"
                    type="checkbox"
                    onChange={handleCheckboxChange}
                    value="ac72833b-c4e9-4878-b9db-6c8a4a99444a"
                  />
                  <label htmlFor="Military">Military</label>
                </li>
                <li>
                  <input
                    id="Psychological"
                    type="checkbox"
                    onChange={handleCheckboxChange}
                    value="3b60b75c-a2d7-4860-ab56-05f391bb889c"
                  />
                  <label htmlFor="Psychological">Psychological</label>
                </li>
                <li>
                  <input
                    id="Reincarnation"
                    type="checkbox"
                    onChange={handleCheckboxChange}
                    value="0bc90acb-ccc1-44ca-a34a-b9f3a73259d0"
                  />
                  <label htmlFor="Reincarnation">Reincarnation</label>
                </li>
                <li>
                  <input
                    id="Romance"
                    type="checkbox"
                    onChange={handleCheckboxChange}
                    value="423e2eae-a7a2-4a8b-ac03-a8351462d71d"
                  />
                  <label htmlFor="Romance">Romance</label>
                </li>
                <li>
                  <input
                    id="School Life"
                    type="checkbox"
                    onChange={handleCheckboxChange}
                    value="caaa44eb-cd40-4177-b930-79d3ef2afe87"
                  />
                  <label htmlFor="School Life">School Life</label>
                </li>
                <li>
                  <input
                    id="Sci-fi"
                    type="checkbox"
                    onChange={handleCheckboxChange}
                    value="256c8bd9-4904-4360-bf4f-508a76d67183"
                  />
                  <label htmlFor="Sci-fi">Sci-fi</label>
                </li>
                <li>
                  <input
                    id="Slice of Life"
                    type="checkbox"
                    onChange={handleCheckboxChange}
                    value="e5301a23-ebd9-49dd-a0cb-2add944c7fe9"
                  />
                  <label htmlFor="Slice of Life">Slice of Life</label>
                </li>
                <li>
                  <input
                    id="Sports"
                    type="checkbox"
                    onChange={handleCheckboxChange}
                    value="69964a64-2f90-4d33-beeb-f3ed2875eb4c"
                  />
                  <label htmlFor="Sports">Sports</label>
                </li>
                <li>
                  <input
                    id="Supernatural"
                    type="checkbox"
                    onChange={handleCheckboxChange}
                    value="eabc5b4c-6aff-42f3-b657-3e90cbd00b75"
                  />
                  <label htmlFor="Supernatural">Supernatural</label>
                </li>
                <li>
                  <input
                    id="Thriller"
                    type="checkbox"
                    onChange={handleCheckboxChange}
                    value="07251805-a27e-4d59-b488-f0bfbec15168"
                  />
                  <label htmlFor="Thriller">Thriller</label>
                </li>
                <li>
                  <input
                    id="Tragedy"
                    type="checkbox"
                    onChange={handleCheckboxChange}
                    value="f8f62932-27da-4fe4-8ee1-6779a8c5edba"
                  />
                  <label htmlFor="Tragedy">Tragedy</label>
                </li>
                <li>
                  <input
                    id="Video Games"
                    type="checkbox"
                    onChange={handleCheckboxChange}
                    value="9438db5a-7e2a-4ac0-b39e-e0d95a34b8a8"
                  />
                  <label htmlFor="Video Games">Video Games</label>
                </li>
                <li>
                  <input
                    id="Police"
                    type="checkbox"
                    onChange={handleCheckboxChange}
                    value="df33b754-73a3-4c54-80e6-1a74a8058539"
                  />
                  <label htmlFor="Police">Police</label>
                </li>
                <li>
                  <input
                    id="Music"
                    type="checkbox"
                    onChange={handleCheckboxChange}
                    value="f42fbf9e-188a-447b-9fdc-f19dc1e4d685"
                  />
                  <label htmlFor="Music">Music</label>
                </li>
                <li>
                  <input
                    id="Full Color"
                    type="checkbox"
                    onChange={handleCheckboxChange}
                    value="f5ba408b-0e7a-484d-8d49-4e9125ac96de"
                  />
                  <label htmlFor="Full Color">Full Color</label>
                </li>
              </ul>
            </li>
            <li>
              <Button
                version={'unfilled'}
                label={'Seacrh'}
                tag="link"
                onClick={generateLink}
              ></Button>
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
};

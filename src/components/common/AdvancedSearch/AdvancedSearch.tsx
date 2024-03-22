import React, { ChangeEvent } from 'react';
import { debounce } from 'lodash';

import styles from './AdvancedSearch.module.scss';
import { Input } from '../../ui/Input';
import { Button } from '../../ui/Button';

export const AdvancedSearch = () => {
  const [isAdvancedOpen, IsSetAdvancedOpen] = React.useState(false);
  const [selectedGenres, setSelectedGenres] = React.useState<string[]>([]);
  const [searchValue, setValue] = React.useState(' ');
  const delay = 400;

  const onChangeValue = (text: string) => {
    setValue(text);
  };
  const updateSearchValue = debounce((str: string) => {
    onChangeValue(str);
  }, delay);
  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    updateSearchValue(event.target.value);
  };

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

  const handleClickAdvancedButton = () => {
    IsSetAdvancedOpen((prev) => !prev);
  };
  const checkboxData = [
    {
      id: 'Action',
      label: 'Action',
      value: '391b0423-d847-456f-aff0-8b0cfc03066b',
    },
    {
      id: 'Adventure',
      label: 'Adventure',
      value: '87cc87cd-a395-47af-b27a-93258283bbc6',
    },
    {
      id: 'Comedy',
      label: 'Comedy',
      value: '4d32cc48-9f00-4cca-9b5a-a839f0764984',
    },
    {
      id: 'Web Comic',
      label: 'Web Comic',
      value: 'e197df38-d0e7-43b5-9b09-2842d0c326dd',
    },
    {
      id: 'Cooking',
      label: 'Cooking',
      value: 'ea2bc92d-1c26-4930-9b7c-d5c0dc1b6869',
    },
    {
      id: 'Doujinshi',
      label: 'Doujinshi',
      value: 'b13b2a48-c720-44a9-9c77-39c9979373fb',
    },
    {
      id: 'Drama',
      label: 'Drama',
      value: 'b9af3a63-f058-46de-a9a0-e0c13906197a',
    },
    {
      id: 'Fantasy',
      label: 'Fantasy',
      value: 'cdc58593-87dd-415e-bbc0-2ec27bf404cc',
    },
    {
      id: 'Harem',
      label: 'Harem',
      value: 'aafb99c1-7f60-43fa-b75f-fc9502ce29c7',
    },
    {
      id: 'Historical',
      label: 'Historical',
      value: '33771934-028e-4cb3-8744-691e866a923e',
    },
    {
      id: 'Horror',
      label: 'Horror',
      value: 'cdad7e68-1419-41dd-bdce-27753074a640',
    },
    {
      id: 'Isekai',
      label: 'Isekai',
      value: 'ace04997-f6bd-436e-b261-779182193d3d',
    },
    {
      id: 'Magic',
      label: 'Magic',
      value: 'a1f53773-c69a-4ce5-8cab-fffcd90b1565',
    },
    {
      id: 'Martial Arts',
      label: 'Martial Arts',
      value: '799c202e-7daa-44eb-9cf7-8a3c0441531e',
    },
    {
      id: 'Mecha',
      label: 'Mecha',
      value: '50880a9d-5440-4732-9afb-8f457127e836',
    },
    {
      id: 'Military',
      label: 'Military',
      value: 'ac72833b-c4e9-4878-b9db-6c8a4a99444a',
    },
    {
      id: 'Psychological',
      label: 'Psychological',
      value: '3b60b75c-a2d7-4860-ab56-05f391bb889c',
    },
    {
      id: 'Reincarnation',
      label: 'Reincarnation',
      value: '0bc90acb-ccc1-44ca-a34a-b9f3a73259d0',
    },
    {
      id: 'Romance',
      label: 'Romance',
      value: '423e2eae-a7a2-4a8b-ac03-a8351462d71d',
    },
    {
      id: 'School Life',
      label: 'School Life',
      value: 'caaa44eb-cd40-4177-b930-79d3ef2afe87',
    },
    {
      id: 'Sci-fi',
      label: 'Sci-fi',
      value: '256c8bd9-4904-4360-bf4f-508a76d67183',
    },
    {
      id: 'Slice of Life',
      label: 'Slice of Life',
      value: 'e5301a23-ebd9-49dd-a0cb-2add944c7fe9',
    },
    {
      id: 'Sports',
      label: 'Sports',
      value: '69964a64-2f90-4d33-beeb-f3ed2875eb4c',
    },
    {
      id: 'Supernatural',
      label: 'Supernatural',
      value: 'eabc5b4c-6aff-42f3-b657-3e90cbd00b75',
    },
    {
      id: 'Thriller',
      label: 'Thriller',
      value: '07251805-a27e-4d59-b488-f0bfbec15168',
    },
    {
      id: 'Tragedy',
      label: 'Tragedy',
      value: 'f8f62932-27da-4fe4-8ee1-6779a8c5edba',
    },
    {
      id: 'Video Games',
      label: 'Video Games',
      value: '9438db5a-7e2a-4ac0-b39e-e0d95a34b8a8',
    },
    {
      id: 'Police',
      label: 'Police',
      value: 'df33b754-73a3-4c54-80e6-1a74a8058539',
    },
    {
      id: 'Music',
      label: 'Music',
      value: 'f42fbf9e-188a-447b-9fdc-f19dc1e4d685',
    },
    {
      id: 'Full Color',
      label: 'Full Color',
      value: 'f5ba408b-0e7a-484d-8d49-4e9125ac96de',
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.search_content}>
        <form className={styles.input_side}>
          <Input onChange={onChangeSearch} version={'advanced'} />
          <Button
            version={'custom'}
            label={'Search'}
            href={`/search/${searchValue}`}
            state={[searchValue]}
            tag={'link'}
          />
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
                {checkboxData.map((data) => (
                  <li key={data.id}>
                    <input
                      id={data.id}
                      type="checkbox"
                      onChange={handleCheckboxChange}
                      value={data.value}
                    />
                    <label htmlFor={data.id}>{data.label}</label>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <Button
                version={'custom'}
                label={'Search'}
                href={`/search`}
                state={[generateLink()]}
                tag={'link'}
              />
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
};

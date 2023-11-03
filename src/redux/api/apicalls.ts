import axios from 'axios';

import { CoverData } from './types/cover';

export function getCoverById(id: string): Promise<CoverData> {
  const response: Promise<CoverData> = axios
    .get(`https://api.mangadex.org/cover/${id}`)
    .then((res) => res.data);
  return response;
}

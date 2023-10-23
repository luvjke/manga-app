export interface CoverObject {
  result: string;
  response: string;
  data: CoverData;
}

export interface CoverData {
  id: string;
  type: string;
  attributes: CoverAttributes;
}

interface CoverAttributes {
  description: string;
  volume?: string;
  filename: string;
  createdAt: string;
  updatedAt: string;
}

export interface CoverParams {
  coverId: any;
}

export interface DictionaryDTO {
  name: string;
  description?: string;
  words?: string;
}

export interface DictionaryModel {
  _id: string;
  name: string;
  description: string;
  words: any[];
  wordsCount: number;
}

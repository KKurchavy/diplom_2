import { ActionReducerMap } from '@ngrx/store';
import { wordsReducer } from './words/words.reducer';
import { dictionaryReducer } from './dictionary/dictionary.reducer';
import { sidebarReducer } from './sidebar/sidebar.reducer';

export const mainReducer: ActionReducerMap<any> = {
  words: wordsReducer,
  dictionaries: dictionaryReducer,
  sidebar: sidebarReducer,
};

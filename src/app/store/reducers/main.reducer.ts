import { ActionReducerMap } from '@ngrx/store';
import { wordsReducer } from './words/words.reducer';
import { dictionaryReducer } from './dictionary/dictionary.reducer';
import { sidebarReducer } from './sidebar/sidebar.reducer';
import { controlTestReducer } from './control-test/control-test.reducer';

export const mainReducer: ActionReducerMap<any> = {
  words: wordsReducer,
  dictionaries: dictionaryReducer,
  sidebar: sidebarReducer,
  controls: controlTestReducer
};

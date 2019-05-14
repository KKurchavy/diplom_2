import { createSelector, createFeatureSelector } from '@ngrx/store';
import { IWordsState } from '../../reducers/words/words.reducer';

const selectWords = createFeatureSelector<IWordsState>('words');

export const selectWordList = createSelector(
  selectWords,
  ({ all }: IWordsState) => all
);

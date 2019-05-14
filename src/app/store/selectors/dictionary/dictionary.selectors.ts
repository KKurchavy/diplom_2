import { createSelector, createFeatureSelector } from '@ngrx/store';
import { IDictionariesState } from '../../reducers/dictionary/dictionary.reducer';

const selectDictionaries = createFeatureSelector<IDictionariesState>('dictionaries');

export const selectDictionaryList = createSelector(
  selectDictionaries,
  ({ all }: IDictionariesState) => all
);

export const getSelectedDictionary = createSelector(
  selectDictionaries,
  ({ selected }: IDictionariesState) => selected
);

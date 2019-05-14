import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ITestState } from '../../reducers/test/test.reducer';

const selectTest = createFeatureSelector<ITestState>('test');

export const selectTestAvailableWords = createSelector(
  selectTest,
  ({ availableWords }: ITestState) => availableWords
);

export const selectTestWords = createSelector(
  selectTest,
  ({ words }: ITestState) => words
);

export const selectTestMode = createSelector(
  selectTest,
  ({ rusEng }: ITestState) => rusEng
);

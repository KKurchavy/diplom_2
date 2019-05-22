import { createSelector, createFeatureSelector } from '@ngrx/store';
import { IControlTestState } from '../../reducers/control-test/control-test.reducer';

const selectControlTests = createFeatureSelector<IControlTestState>('controls');

export const selectControlTestsByUserId = createSelector(
  selectControlTests,
  ({ controlTestByUserId }: IControlTestState) => controlTestByUserId
);

export const selectUserControlTests = createSelector(
  selectControlTests,
  ({ userControlTests }: IControlTestState) => userControlTests
);

export const getSelectedControlTest = createSelector(
  selectControlTests,
  ({ selectedControlTest }: IControlTestState) => selectedControlTest
);

export const getControlTests = createSelector(
  selectControlTests,
  ({ controlTests }: IControlTestState) => controlTests
);

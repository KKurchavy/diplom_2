import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ISidebarState } from '../../reducers/sidebar/sidebar.reducer';

const selectSidebar = createFeatureSelector<ISidebarState>('sidebar');

export const selectSidebarData = createSelector(
  selectSidebar,
  ({ data }: ISidebarState) => data
);

export const selectSidebarSelectedItem = createSelector(
  selectSidebar,
  ({ selectedItem }: ISidebarState) => selectedItem
);

export const selectSidebarButtonName = createSelector(
  selectSidebar,
  ({ buttonName }: ISidebarState) => buttonName
);

export const selectSidebarButtonClick = createSelector(
  selectSidebar,
  ({ buttonCLick }: ISidebarState) => buttonCLick
);

export const selectSidebarNavigationUrl = createSelector(
  selectSidebar,
  ({ navigationUrl }: ISidebarState) => navigationUrl
);

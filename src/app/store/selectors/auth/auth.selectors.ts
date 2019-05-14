import { createSelector, createFeatureSelector } from '@ngrx/store';
import { IAuthState } from '../../reducers/auth/auth.reducer';
import { User } from '../../../models/auth.models';

const selectAuth = createFeatureSelector<IAuthState>('auth');

export const selectAuthStatus = createSelector(
  selectAuth,
  ({ isLogged }: IAuthState): boolean => isLogged
);

export const selectAuthErrors = createSelector(
  selectAuth,
  ({ loginError: isError }: IAuthState): boolean => isError
);

export const selectUserProfile = createSelector(
  selectAuth,
  ({ userProfile }: IAuthState): User => userProfile
);

export const selectUsersList = createSelector(
  selectAuth,
  ({ usersList }: IAuthState): User[] => usersList
);

export const getSelectedUser = createSelector(
  selectAuth,
  ({ selectedUser }: IAuthState): User => selectedUser
);

export const getSelectedResult = createSelector(
  selectAuth,
  ({ selectedResult }: IAuthState): User => selectedResult
);

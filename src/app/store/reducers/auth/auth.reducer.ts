import { AuthActions, AuthActionTypes } from '../../actions/auth/auth.actions';
import { User } from '../../../models/auth.models';

export interface IAuthState {
  isLogged: boolean;
  userProfile: User;
  loginError: boolean;
  usersList: any[];
  selectedUser: any;
  selectedResult: any;
}

export const initialAuthState: IAuthState = {
  isLogged: false,
  userProfile: null,
  loginError: false,
  usersList: null,
  selectedUser: null,
  selectedResult: null,
};

export function authReducer(
  state = initialAuthState,
  action: AuthActions
): IAuthState {
  switch (action.type) {
    case AuthActionTypes.LoginSuccess:
    case AuthActionTypes.RefreshUserDataSuccess: {
      return {
        ...state,
        isLogged: true,
        userProfile: action.payload
      };
    }

    case AuthActionTypes.LoginFailed: {
      return {
        ... state,
        loginError: action.payload
      };
    }

    case AuthActionTypes.LogoutSuccess: {
      return {
        ...state,
        isLogged: false,
        userProfile: null
      };
    }

    case AuthActionTypes.LoadUsersSuccess: {
      return {
        ... state,
        usersList: action.payload
      };
    }

    case AuthActionTypes.LoadUserSuccess: {
      return {
        ... state,
        selectedUser: action.payload
      };
    }

    case AuthActionTypes.LoadTestResultSuccess: {
      return {
        ... state,
        selectedResult: action.payload
      };
    }

    default: {
      return state;
    }
  }
}

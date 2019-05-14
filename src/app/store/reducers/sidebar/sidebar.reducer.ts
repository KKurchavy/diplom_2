import { SidebarActions, SidebarActionTypes } from '../../actions/sidebar/sidebar.actions';

export interface ISidebarState {
  data: any[];
  selectedItem: any;
  buttonName: string;
  buttonCLick: boolean;
  navigationUrl: string;
}

export const initialSidebarState: ISidebarState = {
  data: null,
  selectedItem: null,
  buttonName: '',
  buttonCLick: null,
  navigationUrl: ''
};

export function sidebarReducer(
  state = initialSidebarState,
  action: SidebarActions
): ISidebarState {
  switch (action.type) {
    case SidebarActionTypes.SetSidebarData: {
      return {
        ...state,
        data: action.payload
      };
    }

    case SidebarActionTypes.SetSidebarNavigation: {
      return {
        ...state,
        navigationUrl: action.payload
      };
    }

    case SidebarActionTypes.SelectSidebarItem: {
      return {
        ... state,
        selectedItem: { ...action.payload }
      };
    }

    case SidebarActionTypes.SetSidebarButtonName: {
      return {
        ... state,
        buttonName: action.payload
      };
    }

    case SidebarActionTypes.ClickSidebarButton: {
      return {
        ... state,
        buttonCLick: action.payload
      };
    }

    default: {
      return state;
    }
  }
}

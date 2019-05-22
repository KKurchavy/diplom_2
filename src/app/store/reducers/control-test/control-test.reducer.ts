import { ControlTestActionTypes } from '../../actions/control-test/control-test.actions';

export interface IControlTestState {
  controlTests: any[];
  controlTestByUserId: any[];
  userControlTests: any[];
  selectedControlTest: any;
}

const initialControlTestState: IControlTestState = {
  controlTests: null,
  controlTestByUserId: null,
  userControlTests: null,
  selectedControlTest: null,
};

export function controlTestReducer(state = initialControlTestState, action: any ): IControlTestState {
  switch (action.type) {
    case ControlTestActionTypes.GetControlTestsByUserIdSuccess: {
      return {
        ...state,
        controlTestByUserId: [...action.payload],
      };
    }

    case ControlTestActionTypes.GetUserControlTestsSuccess: {
      return {
        ...state,
        controlTestByUserId: [...action.payload],
      };
    }

    case ControlTestActionTypes.GetControlTestByIdSuccess: {
      return {
        ...state,
        selectedControlTest: {
          ...action.payload
        },
      };
    }

    case ControlTestActionTypes.GetControlTestsSuccess: {
      return {
        ...state,
        controlTests: [...action.payload],
      };
    }

    default: {
      return state;
    }
  }
}

import { ControlTestActionTypes } from '../../actions/control-test/control-test.actions';

export interface IControlTestState {
  controlTestByUserId: any[];
  userControlTests: any[];
}

const initialControlTestState: IControlTestState = {
  controlTestByUserId: null,
  userControlTests: null,
};

export function controlTestReducer(state = initialControlTestState, action: any ): IControlTestState {
  switch (action.type) {
    case ControlTestActionTypes.GetControlTestsByUserIdSuccess: {
      return {
        ...state,
        controlTestByUserId: action.payload,
      };
    }

    case ControlTestActionTypes.GetUserControlTestsSuccess: {
      return {
        ...state,
        controlTestByUserId: action.payload,
      };
    }

    default: {
      return state;
    }
  }
}

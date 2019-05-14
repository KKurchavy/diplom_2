import { TestActions, TestActionTypes } from '../../actions/test/test.actions';

export interface ITestState {
  availableWords: any[];
  words: any[];
  rusEng: boolean;
}

export const initialTestState: ITestState = {
  availableWords: [],
  rusEng: false,
  words: [],
};

export function testReducer(state = initialTestState, action: TestActions): ITestState {
  switch (action.type) {
    case TestActionTypes.SetTestAvailableWords: {
      return {
        ...state,
        availableWords: [...action.payload]
      };
    }

    case TestActionTypes.SetTestWords: {
      return {
        ...state,
        words: [...action.payload]
      };
    }

    case TestActionTypes.SetTestMode: {
      return {
        ...state,
        rusEng: action.payload
      };
    }

    default: {
      return state;
    }
  }
}

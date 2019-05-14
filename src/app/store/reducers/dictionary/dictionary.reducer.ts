import { DictionaryActionTypes, DictionaryActions } from '../../actions/dictionary/dictionary.actions';
import { DictionaryModel } from '../../../models/dictionary.models';

export interface IDictionariesState {
  all: DictionaryModel[];
  selected: DictionaryModel;
}

export const initialDictionariesState: IDictionariesState = {
  all: [],
  selected: null,
};

export function dictionaryReducer(state = initialDictionariesState, action: DictionaryActions): IDictionariesState {
  switch (action.type) {
    case DictionaryActionTypes.LoadDictionariesSuccess: {
      return {
        ...state,
        all: action.payload
      };
    }

    case DictionaryActionTypes.LoadDictionarySuccess: {
      return {
        ...state,
        selected: action.payload
      };
    }

    default: {
      return { ...state };
    }
  }
}

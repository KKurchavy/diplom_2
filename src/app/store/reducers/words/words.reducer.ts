import { WordsActionTypes, WordsActions } from '../../actions/words/words.actions';
import { WordModel } from '../../../models/word.models';

export interface IWordsState {
  all: WordModel[];
}

export const initialWordsState: IWordsState = {
  all: [],
};

export function wordsReducer(state = initialWordsState, action: WordsActions): IWordsState {
  switch (action.type) {
    case WordsActionTypes.LoadWordsSuccess: {
      return {
        ...state,
        all: action.payload
      };
    }

    default: {
      return state;
    }
  }
}

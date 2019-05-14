import { Action } from '@ngrx/store';
import { WordDTO, WordModel } from '../../../models/word.models';

export enum WordsActionTypes {
  LoadWords = '[Words] Load Words',
  LoadWordsSuccess = '[Words] Load Words Success',
  LoadWordsFailed = '[Words] Load Words Failed',
  CreateWord = '[Words] Create Word',
  CreateWordSuccess = '[Words] Create Word Success',
  CreateWordFailed = '[Words] Create Word Failed',
  UpdateWord = '[Words] Update Word',
  UpdateWordSuccess = '[Words] Update Word Success',
  UpdateWordFailed = '[Words] Update Word Failed',
  DeleteWord = '[Words] Delete Word',
  DeleteWordSuccess = '[Words] Delete Word Success',
  DeleteWordFailed = '[Words] Delete Word Failed',
}

export class LoadWords implements Action {
  public readonly type = WordsActionTypes.LoadWords;
}

export class LoadWordsSuccess implements Action {
  public readonly type = WordsActionTypes.LoadWordsSuccess;
  constructor(public payload: WordModel[]) {}
}

export class LoadWordsFailed implements Action {
  public readonly type = WordsActionTypes.LoadWordsFailed;
}

export class CreateWord implements Action {
  public readonly type = WordsActionTypes.CreateWord;
  constructor(public payload: WordDTO) {}
}

export class CreateWordSuccess implements Action {
  public readonly type = WordsActionTypes.CreateWordSuccess;
}

export class CreateWordFailed implements Action {
  public readonly type = WordsActionTypes.CreateWordFailed;
}

export class UpdateWord implements Action {
  public readonly type = WordsActionTypes.UpdateWord;
  constructor(public payload: { id: string, data: WordDTO }) {}
}

export class UpdateWordSuccess implements Action {
  public readonly type = WordsActionTypes.UpdateWordSuccess;
}

export class UpdateWordFailed implements Action {
  public readonly type = WordsActionTypes.UpdateWordFailed;
}

export class DeleteWord implements Action {
  public readonly type = WordsActionTypes.DeleteWord;
  constructor(public payload: string) {}
}

export class DeleteWordSuccess implements Action {
  public readonly type = WordsActionTypes.DeleteWordSuccess;
}

export class DeleteWordFailed implements Action {
  public readonly type = WordsActionTypes.DeleteWordFailed;
}

export type WordsActions =
  | LoadWords
  | LoadWordsSuccess
  | LoadWordsFailed
  | CreateWord
  | CreateWordSuccess
  | CreateWordFailed
  | UpdateWord
  | UpdateWordSuccess
  | UpdateWordFailed
  | DeleteWord
  | DeleteWordSuccess
  | DeleteWordFailed;

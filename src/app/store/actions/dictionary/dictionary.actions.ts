import { Action } from '@ngrx/store';
import { DictionaryDTO, DictionaryModel } from '../../../models/dictionary.models';
import { WordModel } from '../../../models/word.models';

export enum DictionaryActionTypes {
  LoadDictionaries = '[Dictionary] Load Dictionaries',
  LoadDictionariesSuccess = '[Dictionary] Load Dictionaries Success',
  LoadDictionariesFailed = '[Dictionary] Load Dictionaries Failed',
  LoadDictionary = '[Dictionary] Load Dictionary',
  LoadDictionarySuccess = '[Dictionary] Load Dictionary Success',
  LoadDictionaryFailed = '[Dictionary] Load Dictionary Failed',
  CreateDictionary = '[Dictionary] Create Dictionary',
  CreateDictionarySuccess = '[Dictionary] Create Dictionary Success',
  CreateDictionaryFailed = '[Dictionary] Create Dictionary Failed',
  AddWordInDictionary = '[Dictionary] Add Word In Dictionary',
  AddWordInDictionarySuccess = '[Dictionary] Add Word In Dictionary Success',
  AddWordInDictionaryFailed = '[Dictionary] Add Word In Dictionary Failed',
  UpdateDictionary = '[Dictionary] Update Dictionary',
  UpdateDictionarySuccess = '[Dictionary] Update Dictionary Success',
  UpdateDictionaryFailed = '[Dictionary] Update Dictionary Failed',
  DeleteDictionary = '[Dictionary] Delete Dictionary',
  DeleteDictionarySuccess = '[Dictionary] Delete Dictionary Success',
  DeleteDictionaryFailed = '[Dictionary] Delete Dictionary Failed',
  DeleteWordFromDictionary = '[Dictionary] Delete Word From Dictionary',
  DeleteWordFromDictionarySuccess = '[Dictionary] Delete Word From Dictionary Success',
  DeleteWordFromDictionaryFailed = '[Dictionary] Delete Word From Dictionary Failed',
}

export class LoadDictionaries implements Action {
  public readonly type = DictionaryActionTypes.LoadDictionaries;
}

export class LoadDictionariesSuccess implements Action {
  public readonly type = DictionaryActionTypes.LoadDictionariesSuccess;
  constructor(public payload: DictionaryModel[]) {}
}

export class LoadDictionariesFailed implements Action {
  public readonly type = DictionaryActionTypes.LoadDictionariesFailed;
}

export class LoadDictionary implements Action {
  public readonly type = DictionaryActionTypes.LoadDictionary;
  constructor(public payload: string) {}
}

export class LoadDictionarySuccess implements Action {
  public readonly type = DictionaryActionTypes.LoadDictionarySuccess;
  constructor(public payload: DictionaryModel) {}
}

export class LoadDictionaryFailed implements Action {
  public readonly type = DictionaryActionTypes.LoadDictionaryFailed;
}

export class CreateDictionary implements Action {
  public readonly type = DictionaryActionTypes.CreateDictionary;
  constructor(public payload: DictionaryDTO) {}
}

export class CreateDictionarySuccess implements Action {
  public readonly type = DictionaryActionTypes.CreateDictionarySuccess;
}

export class CreateDictionaryFailed implements Action {
  public readonly type = DictionaryActionTypes.CreateDictionaryFailed;
}

export class AddWordInDictionary implements Action {
  public readonly type = DictionaryActionTypes.AddWordInDictionary;
  constructor(public payload: { id: string, word: string }) {}
}

export class AddWordInDictionarySuccess implements Action {
  public readonly type = DictionaryActionTypes.AddWordInDictionarySuccess;
}

export class AddWordInDictionaryFailed implements Action {
  public readonly type = DictionaryActionTypes.AddWordInDictionaryFailed;
}

export class DeleteWordFromDictionary implements Action {
  public readonly type = DictionaryActionTypes.DeleteWordFromDictionary;
  constructor(public payload: { id: string, word: string }) {}
}

export class DeleteWordFromDictionarySuccess implements Action {
  public readonly type = DictionaryActionTypes.DeleteWordFromDictionarySuccess;
}

export class DeleteWordFromDictionaryFailed implements Action {
  public readonly type = DictionaryActionTypes.DeleteWordFromDictionaryFailed;
}

export class UpdateDictionary implements Action {
  public readonly type = DictionaryActionTypes.UpdateDictionary;
  constructor(public payload: { id: string, data: DictionaryDTO}) {}
}

export class UpdateDictionarySuccess implements Action {
  public readonly type = DictionaryActionTypes.UpdateDictionarySuccess;
}

export class UpdateDictionaryFailed implements Action {
  public readonly type = DictionaryActionTypes.UpdateDictionaryFailed;
}

export class DeleteDictionary implements Action {
  public readonly type = DictionaryActionTypes.DeleteDictionary;
  constructor(public payload: string) {}
}

export class DeleteDictionarySuccess implements Action {
  public readonly type = DictionaryActionTypes.DeleteDictionarySuccess;
}

export class DeleteDictionaryFailed implements Action {
  public readonly type = DictionaryActionTypes.DeleteDictionaryFailed;
}

export type DictionaryActions =
  | LoadDictionaries
  | LoadDictionariesSuccess
  | LoadDictionariesFailed
  | LoadDictionary
  | LoadDictionarySuccess
  | LoadDictionaryFailed
  | CreateDictionary
  | CreateDictionarySuccess
  | CreateDictionaryFailed
  | AddWordInDictionary
  | AddWordInDictionarySuccess
  | AddWordInDictionaryFailed
  | UpdateDictionary
  | UpdateDictionarySuccess
  | UpdateDictionaryFailed
  | DeleteDictionary
  | DeleteDictionarySuccess
  | DeleteDictionaryFailed
  | DeleteWordFromDictionary
  | DeleteWordFromDictionarySuccess
  | DeleteWordFromDictionaryFailed;

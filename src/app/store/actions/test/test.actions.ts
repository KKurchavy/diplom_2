import { Action } from '@ngrx/store';

export enum TestActionTypes {
  SetTestAvailableWords = '[Test] Set Test Available Words',
  SetTestWords = '[Test] Set Test Words',
  SetTestMode = '[Test] Set Test Mode',
}

export class SetTestAvailableWords implements Action {
  public readonly type = TestActionTypes.SetTestAvailableWords;
  constructor(public payload: any[]) {}
}

export class SetTestMode implements Action {
  public readonly type = TestActionTypes.SetTestMode;
  constructor(public payload: boolean) {}
}

export class SetTestWords implements Action {
  public readonly type = TestActionTypes.SetTestWords;
  constructor(public payload: any[]) {}
}

export type TestActions =
  | SetTestMode
  | SetTestAvailableWords
  | SetTestWords;

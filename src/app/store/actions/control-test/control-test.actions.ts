import { Action } from '@ngrx/store';

export enum ControlTestActionTypes {
  CreateControlTest = '[ControlTest] Create Control Test',
  CreateControlTestSuccess = '[ControlTest] Create Control Test Success',
  CreateControlTestFailed = '[ControlTest] Create Control Test Failed',
  GetControlTestsByUserId = '[ControlTest] Get Control Tests By User Id',
  GetControlTestsByUserIdSuccess = '[ControlTest] Get Control Tests By User Id Success',
  GetControlTestsByUserIdFailed = '[ControlTest] Get Control Tests By User Id Failed',
  GetControlTestById = '[ControlTest] Get Control Tests By Id',
  GetControlTestByIdSuccess = '[ControlTest] Get Control Tests By Id Success',
  GetControlTestByIdFailed = '[ControlTest] Get Control Tests By Id Failed',
  GetControlTests = '[ControlTest] Get Control Tests',
  GetControlTestsSuccess = '[ControlTest] Get Control Tests Success',
  GetControlTestsFailed = '[ControlTest] Get Control Tests Failed',
  GetUserControlTests = '[ControlTest] Get User Control Tests',
  GetUserControlTestsSuccess = '[ControlTest] Get User Control Tests Success',
  GetUserControlTestsFailed = '[ControlTest] Get User Control Tests Failed',
  UpdateControlTest = '[ControlTest] Update Control Test',
  UpdateControlTestSuccess = '[ControlTest] Update Control Test Success',
  UpdateControlTestFailed = '[ControlTest] Update Control Test Failed',
}

export class CreateControlTest implements Action {
  public type = ControlTestActionTypes.CreateControlTest;
  constructor(public payload: any) {}
}

export class CreateControlTestSuccess implements Action {
  public type = ControlTestActionTypes.CreateControlTestSuccess;
}

export class CreateControlTestFailed implements Action {
  public type = ControlTestActionTypes.CreateControlTestFailed;
}

export class GetControlTestsByUserId implements Action {
  public type = ControlTestActionTypes.GetControlTestsByUserId;
  constructor(public payload: string) {}
}

export class GetControlTestsByUserIdSuccess implements Action {
  public type = ControlTestActionTypes.GetControlTestsByUserIdSuccess;
  constructor(public payload: any[]) {}
}

export class GetControlTestsByUserIdFailed implements Action {
  public type = ControlTestActionTypes.GetControlTestsByUserIdFailed;
}

export class GetControlTestById implements Action {
  public type = ControlTestActionTypes.GetControlTestById;
  constructor(public payload: string) {}
}

export class GetControlTestByIdSuccess implements Action {
  public type = ControlTestActionTypes.GetControlTestByIdSuccess;
  constructor(public payload: any[]) {}
}

export class GetControlTestByIdFailed implements Action {
  public type = ControlTestActionTypes.GetControlTestByIdFailed;
}

export class GetControlTests implements Action {
  public type = ControlTestActionTypes.GetControlTests;
}

export class GetControlTestsSuccess implements Action {
  public type = ControlTestActionTypes.GetControlTestsSuccess;
  constructor(public payload: any[]) {}
}

export class GetControlTestsFailed implements Action {
  public type = ControlTestActionTypes.GetControlTestsFailed;
}

export class GetUserControlTests implements Action {
  public type = ControlTestActionTypes.GetUserControlTests;
}

export class GetUserControlTestsSuccess implements Action {
  public type = ControlTestActionTypes.GetUserControlTestsSuccess;
  constructor(public payload: any[]) {}
}

export class GetUserControlTestsFailed implements Action {
  public type = ControlTestActionTypes.GetUserControlTestsFailed;
}

export class UpdateControlTest implements Action {
  public type = ControlTestActionTypes.UpdateControlTest;
  constructor(public payload: any) {}
}

export class UpdateControlTestSuccess implements Action {
  public type = ControlTestActionTypes.UpdateControlTestSuccess;
}

export class UpdateControlTestFailed implements Action {
  public type = ControlTestActionTypes.UpdateControlTestFailed;
}

export type ControlTestActions =
  | GetControlTestsByUserId
  | GetControlTestsByUserIdSuccess
  | GetControlTestsByUserIdFailed
  | GetUserControlTests
  | GetUserControlTestsSuccess
  | GetUserControlTestsFailed
  | CreateControlTest
  | CreateControlTestSuccess
  | CreateControlTestFailed
  | UpdateControlTest
  | UpdateControlTestSuccess
  | UpdateControlTestFailed;

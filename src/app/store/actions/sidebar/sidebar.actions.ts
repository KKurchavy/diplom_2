import { Action } from '@ngrx/store';

export enum SidebarActionTypes {
  SetSidebarData = '[Sidebar] Set Sidebar Data',
  SetSidebarNavigation = '[Sidebar] Set Sidebar Navigation',
  SelectSidebarItem = '[Sidebar] Select Sidebar Item',
  SetSidebarButtonName = '[Sidebar] Set Sidebar Button Name',
  ClickSidebarButton = '[Sidebar] Click Sidebar Button',
}

export class SetSidebarData implements Action {
  public readonly type = SidebarActionTypes.SetSidebarData;
  constructor(public payload: any[]) {}
}

export class SetSidebarNavigation implements Action {
  public readonly type = SidebarActionTypes.SetSidebarNavigation;
  constructor(public payload: string) {}
}

export class SelectSidebarItem implements Action {
  public readonly type = SidebarActionTypes.SelectSidebarItem;
  constructor(public payload: any) {}
}

export class SetSidebarButtonName implements Action {
  public readonly type = SidebarActionTypes.SetSidebarButtonName;
  constructor(public payload: string) {}
}

export class ClickSidebarButton implements Action {
  public readonly type = SidebarActionTypes.ClickSidebarButton;
  constructor(public payload: boolean) {}
}

export type SidebarActions =
  | SetSidebarData
  | SetSidebarNavigation
  | SelectSidebarItem
  | SetSidebarButtonName
  | ClickSidebarButton;

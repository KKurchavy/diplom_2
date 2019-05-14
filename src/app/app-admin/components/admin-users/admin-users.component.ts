import { ChangeDetectionStrategy, Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { LoadTestResult, LoadUser, LoadUsers, AddTestResult, CreateUser, UpdateUser, DeleteUser } from '../../../store/actions/auth/auth.actions';
import {
  ClickSidebarButton, SetSidebarButtonName, SetSidebarData,
  SetSidebarNavigation
} from '../../../store/actions/sidebar/sidebar.actions';
import { getSelectedUser, selectUsersList, getSelectedResult } from '../../../store/selectors/auth/auth.selectors';
import { selectSidebarSelectedItem, selectSidebarButtonClick } from '../../../store/selectors/sidebar/sidebar.selectors';
import { MatDialog } from '@angular/material';
import { UserModalComponent } from '../../../shared/modals/user-modal/user-modal.component';
import { ConfirmDialogComponent } from '../../../shared/modals/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminUsersComponent implements OnInit, OnDestroy {
  public user$: Observable<any>;
  public result$: Observable<any>;
  public destroy$: Subject<any>;

  constructor(
    private store: Store<any>,
    private dialog: MatDialog,
  ) { }

  public ngOnInit(): void {
    this.destroy$ = new Subject<any>();
    this.initSidebarData();
    this.initUserData();
  }

  public ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  private initSidebarData(): void {
    this.store.dispatch(new LoadUsers());
    this.store.dispatch(new ClickSidebarButton(null));
    this.store.dispatch(new SetSidebarButtonName('New User'));
    this.store.dispatch(new SetSidebarNavigation('admin/users'));
    this.store.select(selectUsersList)
      .pipe(takeUntil(this.destroy$))
      .subscribe(users => this.store.dispatch(new SetSidebarData(users)));

    this.store.select(selectSidebarButtonClick)
      .pipe(filter(Boolean))
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.store.dispatch(new ClickSidebarButton(null));
        this.dialog.open(UserModalComponent, {
          width: '450px',
        }).afterClosed()
          .pipe(filter(Boolean))
          .pipe(takeUntil(this.destroy$))
          .subscribe(user => this.store.dispatch(new CreateUser(user)));
      });
  }

  private initUserData(): void {
    this.result$ = this.store.select(getSelectedResult);
    this.user$ = this.store.select(getSelectedUser);
    this.store.select(selectSidebarSelectedItem)
      .pipe(filter(Boolean))
      .pipe(takeUntil(this.destroy$))
      .subscribe(({ _id }) => this.store.dispatch(new LoadUser(_id)));
  }

  public onEdit(user: any): void {
    this.dialog.open(UserModalComponent, {
      width: '450px',
      data: {
        ...user,
        isEditable: true,
      }
    }).afterClosed()
      .pipe(filter(Boolean))
      .pipe(takeUntil(this.destroy$))
      .subscribe(userData => this.store.dispatch(new UpdateUser({
        userId: user._id,
        data: userData
      })));
  }

  public onDelete({ _id }: any): void {
    this.dialog.open(ConfirmDialogComponent, {
      width: '400px',
      data: { text: 'Are you sure you want to delete the user?' }
    }).afterClosed()
      .pipe(filter(Boolean))
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => this.store.dispatch(new DeleteUser(_id)));
  }

  public onTestItemClick({ _id }: any): void {
    this.store.dispatch(new LoadTestResult(_id));
  }
}

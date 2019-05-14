import { Component, ChangeDetectionStrategy, Output, EventEmitter, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectUserProfile } from '../../../store/selectors/auth/auth.selectors';
import { Logout } from '../../../store/actions/auth/auth.actions';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminHeaderComponent implements OnInit {
  @Output() menuClick = new EventEmitter<boolean>();
  public currentUser$: Observable<any>;

  constructor(private store: Store<any>) { }

  public ngOnInit(): void {
    this.initBasicData();
  }

  public initBasicData(): void {
    this.currentUser$ = this.store.select(selectUserProfile);
  }

  public onMenuClick(): void {
    this.menuClick.emit(true);
  }

  public logout(): void {
    this.store.dispatch(new Logout());
  }
}

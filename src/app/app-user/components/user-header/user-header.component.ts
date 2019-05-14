import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Logout } from '../../../store/actions/auth/auth.actions';
import { selectUserProfile } from '../../../store/selectors/auth/auth.selectors';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserHeaderComponent implements OnInit {
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

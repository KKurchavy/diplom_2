import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { RefreshUserData } from '../../../store/actions/auth/auth.actions';

@Component({
  selector: 'app-user-core',
  templateUrl: './user-core.component.html',
  styleUrls: ['./user-core.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserCoreComponent implements OnInit {
  constructor(private store: Store<any>) {}

  public ngOnInit(): void {
    this.store.dispatch(new RefreshUserData());
  }
}

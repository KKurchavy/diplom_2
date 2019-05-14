import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { RefreshUserData } from '../../../store/actions/auth/auth.actions';

@Component({
  selector: 'app-admin-core',
  templateUrl: './admin-core.component.html',
  styleUrls: ['./admin-core.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminCoreComponent implements OnInit {
  constructor(private store: Store<any>) {}

  public ngOnInit(): void {
    this.store.dispatch(new RefreshUserData());
  }
}

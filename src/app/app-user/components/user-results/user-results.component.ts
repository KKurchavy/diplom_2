import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LoadTestResult } from '../../../store/actions/auth/auth.actions';
import { selectUserProfile, getSelectedResult } from '../../../store/selectors/auth/auth.selectors';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-user-results',
  templateUrl: './user-results.component.html',
  styleUrls: ['./user-results.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserResultsComponent implements OnInit {
  public tests$: Observable<any>;
  public result$: Observable<any>;

  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.initData();
  }

  private initData(): void {
    this.result$ = this.store.select(getSelectedResult);
    this.tests$ = this.store
      .pipe(select(selectUserProfile))
      .pipe(filter(Boolean))
      .pipe(map(({ tests }) => tests));
  }

  public onTestItemClick({ _id }: any): void {
    this.store.dispatch(new LoadTestResult(_id));
  }
}

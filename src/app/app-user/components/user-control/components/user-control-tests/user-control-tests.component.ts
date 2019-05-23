import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { GetControlTestById, GetUserControlTests } from '../../../../../store/actions/control-test/control-test.actions';
import { selectUserControlTests, getSelectedControlTest } from '../../../../../store/selectors/control-test/control-test.selectors';
import { filter } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-control-tests',
  templateUrl: './user-control-tests.component.html',
  styleUrls: ['./user-control-tests.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserControlTestsComponent implements OnInit {
  public tests$: Observable<any[]>;
  public selectedTest$: Observable<any>;

  constructor(
    private store: Store<any>,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.initBasicData();
  }

  public onItemClick({ _id }: any): void {
    this.store.dispatch(new GetControlTestById(_id));
  }

  public onStart({ _id }: any): void {
    this.router.navigate(['../control-test'], {
      relativeTo: this.route,
      queryParams: {
        testId: _id
      },
    });
  }

  private initBasicData(): void {
    this.store.dispatch(new GetUserControlTests());
    this.tests$ = this.store
      .select(selectUserControlTests)
      .pipe(filter(Boolean));

    this.selectedTest$ = this.store
      .select(getSelectedControlTest)
      .pipe(filter(Boolean));
  }
}

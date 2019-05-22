import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { GetControlTestById, GetControlTests } from '../../../store/actions/control-test/control-test.actions';
import { getControlTests, getSelectedControlTest } from '../../../store/selectors/control-test/control-test.selectors';

@Component({
  selector: 'app-admin-tests',
  templateUrl: './admin-tests.component.html',
  styleUrls: ['./admin-tests.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminTestsComponent implements OnInit {
  public tests$: Observable<any[]>;
  public selectedTest$: Observable<any>;

  constructor(
    private store: Store<any>,
  ) { }

  ngOnInit() {
    this.initBasicData();
  }

  public onItemClick({ _id }: any): void {
    this.store.dispatch(new GetControlTestById(_id));
  }

  private initBasicData(): void {
    this.store.dispatch(new GetControlTests());
    this.tests$ = this.store
      .select(getControlTests)
      .pipe(filter(Boolean));
    
    this.selectedTest$ = this.store
      .select(getSelectedControlTest)
      .pipe(filter(Boolean));
  }
}

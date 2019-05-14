import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { SetTestMode } from '../../../../../store/actions/test/test.actions';

@Component({
  selector: 'app-test-rus-eng',
  templateUrl: './test-rus-eng.component.html',
  styleUrls: ['./test-rus-eng.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestRusEngComponent implements OnInit {
  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.store.dispatch(new SetTestMode(true));
  }
}

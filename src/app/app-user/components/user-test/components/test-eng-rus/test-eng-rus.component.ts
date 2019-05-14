import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { SetTestMode } from '../../../../../store/actions/test/test.actions';

@Component({
  selector: 'app-test-eng-rus',
  templateUrl: './test-eng-rus.component.html',
  styleUrls: ['./test-eng-rus.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestEngRusComponent implements OnInit {
  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.store.dispatch(new SetTestMode(false));
  }
}

import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectWordList } from '../../../../../store/selectors/words/words.selectors';
import { filter, map } from 'rxjs/operators';
import { getSelectedControlTest } from '../../../../../store/selectors/control-test/control-test.selectors';
import { LoadWords } from '../../../../../store/actions/words/words.actions';
import { GetControlTestById } from '../../../../../store/actions/control-test/control-test.actions';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-control-test-wrapper',
  templateUrl: './user-control-test-wrapper.component.html',
  styleUrls: ['./user-control-test-wrapper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserControlTestWrapperComponent implements OnInit {
  public words$: Observable<any>;
  public testWords$: Observable<any>;
  public correctWords$: Subject<any> = new BehaviorSubject([]);
  public incorrectWords$: Subject<any> = new BehaviorSubject([]);
  public currentTabIndex$: Subject<any> = new BehaviorSubject(0);
  public testId: string;

  constructor(
    private store: Store<any>,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.testId = this.route
      .snapshot
      .queryParamMap
      .get('testId');

    this.initBasicData();
  }

  private initBasicData(): void {
    this.store.dispatch(new LoadWords());
    this.store.dispatch(new GetControlTestById(this.testId));

    this.words$ = this.store
      .select(selectWordList)
      .pipe(filter(Boolean));

    this.testWords$ = this.store
      .select(getSelectedControlTest)
      .pipe(filter(Boolean))
      .pipe(map(({ words }) => words));
  }

  public onNext(words: { correctWords: any[], incorrectWords: any[] }): void {
    this.correctWords$.next(words.correctWords);
    this.incorrectWords$.next(words.incorrectWords);
    this.currentTabIndex$.next(1);
  }
}

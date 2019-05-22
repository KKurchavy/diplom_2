import { Component, OnInit, ChangeDetectionStrategy, Output } from '@angular/core';
import { SetTestWords } from '../../../../../store/actions/test/test.actions';
import { ConfirmDialogComponent } from '../../../../../shared/modals/confirm-dialog/confirm-dialog.component';
import { selectTestAvailableWords } from '../../../../../store/selectors/test/test.selectors';
import { map, filter, takeUntil } from 'rxjs/operators';
import { BehaviorSubject, Subject, Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { Store } from '@ngrx/store';
import { CreateControlTest } from '../../../../../store/actions/control-test/control-test.actions';

@Component({
  selector: 'app-admin-test-words',
  templateUrl: './admin-test-words.component.html',
  styleUrls: ['./admin-test-words.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminTestWordsComponent implements OnInit {
  @Output() public goBack = new Subject<any>();
  @Output() public create = new Subject<string[]>();
  public availableWords$: Observable<any[]>;
  public destroy$: Subject<any>;
  public words$: Subject<any[]>;
  private words: any[] = [];

  constructor(
    private store: Store<any>,
    private dialog: MatDialog,
  ) { }

  public ngOnInit(): void {
    this.destroy$ = new Subject<any>();
    this.initBasicData();
  }

  public ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  public initBasicData(): void {
    this.words$ = new BehaviorSubject<any>(this.words);
    this.availableWords$ = this.store.select(selectTestAvailableWords);

    this.words$
      .pipe(takeUntil(this.destroy$))
      .pipe(filter(Boolean))
      .subscribe((words) => {
        this.availableWords$ = this.store
          .select(selectTestAvailableWords)
          .pipe(map((items) => {
            return items.filter(({ _id }) => !words.find(value => value._id === _id));
          }));
      });
  }

  public addWord(word: any): void {
    this.words.push(word);
    this.words$.next(this.words);
  }

  public deleteWord(id: any): void {
    const dictionaryIndex = this.words.findIndex(({ _id }) => _id === id);
    if (dictionaryIndex >= 0) {
      this.words.splice(dictionaryIndex, 1);
      this.words$.next(this.words);
    }
  }

  public onCreate(): void {
    if (!this.words.length) {
      this.dialog.open(ConfirmDialogComponent, {
        width: '400px',
        data: { text: 'You have not selected words to test' }
      });

      return;
    }

    this.create.next(this.testWords);
  }

  public get testWords(): string[] {
    return this.words.map(({ _id }) => _id);
  }

  public onPrevious(): void {
    this.goBack.next(null);
  }
}

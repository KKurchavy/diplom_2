import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { Store } from '@ngrx/store';
import { MatDialog } from '@angular/material';
import { selectTestAvailableWords } from '../../../../../store/selectors/test/test.selectors';
import { takeUntil, filter, map } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { ConfirmDialogComponent } from '../../../../../shared/modals/confirm-dialog/confirm-dialog.component';
import { SetTestWords } from '../../../../../store/actions/test/test.actions';

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WordsComponent implements OnInit, OnDestroy {
  public availableWords$: Observable<any[]>;
  public destroy$: Subject<any>;
  public words$: Subject<any[]>;
  private words: any[] = [];

  constructor(
    private store: Store<any>,
    private dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
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

  public onNextClick(): void {
    if (!this.words.length) {
      this.dialog.open(ConfirmDialogComponent, {
        width: '400px',
        data: { text: 'You have not selected words to test' }
      });

      return;
    }

    this.store.dispatch(new SetTestWords(this.words));
    this.router.navigate(['../step-3'], { relativeTo: this.route });
  }
}

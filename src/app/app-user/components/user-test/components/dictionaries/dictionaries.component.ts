import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, Output, EventEmitter } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { filter, map, takeUntil } from 'rxjs/operators';
import { colors } from '../../../../../data/colors';
import { selectUserProfile } from '../../../../../store/selectors/auth/auth.selectors';
import { MatDialog } from '@angular/material';
import { ConfirmDialogComponent } from '../../../../../shared/modals/confirm-dialog/confirm-dialog.component';
import { selectTestMode } from '../../../../../store/selectors/test/test.selectors';
import { SetTestAvailableWords } from '../../../../../store/actions/test/test.actions';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dictionaries',
  templateUrl: './dictionaries.component.html',
  styleUrls: ['./dictionaries.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DictionariesComponent implements OnInit, OnDestroy {
  @Output() next: EventEmitter<any[]>;
  public availableDictionaries$: Observable<any>;
  public addedDictionaries$: Subject<any>;
  private addedDictionaries: any[] = [];
  private destroy$: Subject<any>;

  constructor(
    private store: Store<any>,
    private dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  public ngOnInit(): void {
    this.destroy$ = new Subject<any>();
    this.initData();
  }

  public ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  private initData(): void {
    this.addedDictionaries$ = new BehaviorSubject<any[]>(this.addedDictionaries);
    this.availableDictionaries$ = this.store
      .pipe(select(selectUserProfile))
      .pipe(filter(Boolean))
      .pipe(map(({ dictionaries }) => dictionaries));

    this.addedDictionaries$
      .pipe(takeUntil(this.destroy$))
      .pipe(filter(Boolean))
      .subscribe((dictionaries) => {
        this.availableDictionaries$ = this.store
          .pipe(select(selectUserProfile))
          .pipe(filter(Boolean))
          .pipe(map(({ dictionaries }) => dictionaries))
          .pipe(map((items) => {
            return items.filter(({ _id }) => !dictionaries.find(value => value._id === _id));
          }));
      });
  }

  public onDelete(id): void {
    const dictionaryIndex = this.addedDictionaries.findIndex(({ _id }) => _id === id);
    if (dictionaryIndex >= 0) {
      this.addedDictionaries.splice(dictionaryIndex, 1);
      this.addedDictionaries$.next(this.addedDictionaries);
    }
  }

  public onAdd(dictionary: any): void {
    this.addedDictionaries.push(dictionary);
    this.addedDictionaries$.next(this.addedDictionaries);
  }

  public get randomNumber(): number {
    return Math.floor(Math.random() * (4 - 1) + 1);
  }

  public get randomColor(): string {
    return colors[this.randomNumber - 1];
  }

  public getBackground(url: string): string {
    return url
      ? `url(${url})`
      : this.randomColor;
  }

  public onNextClick(): void {
    if (!this.addedDictionaries.length) {
      this.dialog.open(ConfirmDialogComponent, {
        width: '400px',
        data: { text: 'You have not selected dictionaries to test' }
      });

      return;
    }

    this.setWordsForTest();
    this.router.navigate(['../step-2'], { relativeTo: this.route });
  }

  private setWordsForTest(): void {
    const words = this.addedDictionaries.reduce((prev, curr) => {
      return [...prev, ...curr.words];
    }, []);

    this.store.select(selectTestMode)
      .pipe(takeUntil(this.destroy$))
      .subscribe((rusEng) => {
        this.store.dispatch(new SetTestAvailableWords(
          rusEng ? this.convertWords(words) : words
        ));
      });
  }

  private convertWords(words: any[]): any[] {
    return words.map(word => ({
      ...word,
      word: word.translation,
      translation: word.word,
    }));
  }
}

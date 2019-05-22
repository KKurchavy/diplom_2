import { ChangeDetectionStrategy, Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material';
import { select, Store } from '@ngrx/store';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { filter, map, takeUntil } from 'rxjs/operators';
import { colors } from '../../../../../data/colors';
import { ConfirmDialogComponent } from '../../../../../shared/modals/confirm-dialog/confirm-dialog.component';
import { LoadDictionaries } from '../../../../../store/actions/dictionary/dictionary.actions';
import { SetTestAvailableWords } from '../../../../../store/actions/test/test.actions';
import { selectDictionaryList } from '../../../../../store/selectors/dictionary/dictionary.selectors';

@Component({
  selector: 'app-admin-test-dictionaries',
  templateUrl: './admin-test-dictionaries.component.html',
  styleUrls: ['./admin-test-dictionaries.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminTestDictionariesComponent implements OnInit, OnDestroy {
  @Output() public next = new EventEmitter<any[]>();
  public availableDictionaries$: Observable<any>;
  public addedDictionaries$: Subject<any>;
  private addedDictionaries: any[] = [];
  private destroy$: Subject<any>;

  constructor(
    private store: Store<any>,
    private dialog: MatDialog,
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
    this.store.dispatch(new LoadDictionaries());
    this.addedDictionaries$ = new BehaviorSubject<any[]>(this.addedDictionaries);
    this.availableDictionaries$ = this.store.select(selectDictionaryList);

    this.addedDictionaries$
      .pipe(takeUntil(this.destroy$))
      .pipe(filter(Boolean))
      .subscribe((dictionaries) => {
        this.availableDictionaries$ = this.store
          .pipe(select(selectDictionaryList))
          .pipe(filter(Boolean))
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
    this.next.next();
  }

  private setWordsForTest(): void {
    const words = this.addedDictionaries.reduce((prev, curr) => {
      return [...prev, ...curr.words];
    }, []);

    this.store.dispatch(new SetTestAvailableWords(words));
  }
}

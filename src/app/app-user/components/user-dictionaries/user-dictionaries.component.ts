import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { colors } from '../../../data/colors';
import { Observable, Subject } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { selectDictionaryList } from '../../../store/selectors/dictionary/dictionary.selectors';
import { selectUserProfile } from '../../../store/selectors/auth/auth.selectors';
import { map, takeUntil, filter } from 'rxjs/operators';
import { LoadDictionaries, LoadDictionariesSuccess } from '../../../store/actions/dictionary/dictionary.actions';
import { AddDictionary, DeleteDictionary } from '../../../store/actions/auth/auth.actions';

@Component({
  selector: 'app-user-dictionaries',
  templateUrl: './user-dictionaries.component.html',
  styleUrls: ['./user-dictionaries.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserDictionariesComponent implements OnInit, OnDestroy {
  public availableDictionaries$: Observable<any>;
  public addedDictionaries$: Observable<any>;
  private destroy$: Subject<any>;

  constructor(private store: Store<any>) { }

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
    this.availableDictionaries$ = this.store
      .pipe(select(selectDictionaryList))
      .pipe(filter(Boolean));
    this.addedDictionaries$ = this.store
      .pipe(select(selectUserProfile))
      .pipe(filter(Boolean))
      .pipe(map(({ dictionaries }) => dictionaries));

    this.addedDictionaries$
      .pipe(takeUntil(this.destroy$))
      .pipe(filter(Boolean))
      .subscribe((dictionaries) => {
        this.availableDictionaries$ = this.store.select(selectDictionaryList)
          .pipe(filter(Boolean))
          .pipe(map((items) => {
            return items.filter(({ _id }) => !dictionaries.find(value => value._id === _id));
          }));
      });
  }

  public onDelete({ _id }): void {
    this.store.dispatch(new DeleteDictionary(_id));
  }

  public onAdd({ _id }): void {
    this.store.dispatch(new AddDictionary(_id));
    this.store.dispatch(new LoadDictionariesSuccess(null));
    this.store.dispatch(new LoadDictionaries());
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
}

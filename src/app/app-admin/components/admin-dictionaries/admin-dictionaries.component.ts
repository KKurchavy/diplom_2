import { ChangeDetectionStrategy, Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material';
import { select, Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { filter, map, takeUntil } from 'rxjs/operators';
import { DictionaryModel } from '../../../models/dictionary.models';
import { ConfirmDialogComponent } from '../../../shared/modals/confirm-dialog/confirm-dialog.component';
import { DictionaryModalComponent } from '../../../shared/modals/dictionary-modal/dictionary-modal.component';
import {
  AddWordInDictionary, CreateDictionary, DeleteDictionary, DeleteWordFromDictionary,
  LoadDictionaries, LoadDictionary, LoadDictionarySuccess, UpdateDictionary
} from '../../../store/actions/dictionary/dictionary.actions';
import { LoadWords } from '../../../store/actions/words/words.actions';
import { selectWordList } from '../../../store/selectors/words/words.selectors';
import { getSelectedDictionary, selectDictionaryList } from '../../../store/selectors/dictionary/dictionary.selectors';
import { selectSidebarButtonClick, selectSidebarSelectedItem } from '../../../store/selectors/sidebar/sidebar.selectors';
import {
  ClickSidebarButton, SetSidebarButtonName,
  SetSidebarData, SetSidebarNavigation
} from '../../../store/actions/sidebar/sidebar.actions';

@Component({
  selector: 'app-admin-dictionaries',
  templateUrl: './admin-dictionaries.component.html',
  styleUrls: ['./admin-dictionaries.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminDictionariesComponent implements OnInit, OnDestroy {
  public dictionary$: Observable<any>;
  public destroy$: Subject<any>;
  public words$: Observable<any>;

  constructor(
    private store: Store<any>,
    private dialog: MatDialog,
  ) { }

  public ngOnInit(): void {
    this.destroy$ = new Subject<any>();
    this.initSidebarData();
    this.initBasicData();
  }

  public ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  private initSidebarData(): void {
    this.store.dispatch(new LoadDictionaries());
    this.store.dispatch(new ClickSidebarButton(null));
    this.store.dispatch(new SetSidebarButtonName('Add Dictionary'));
    this.store.dispatch(new SetSidebarNavigation('admin/dictionaries'));

    this.store.select(selectSidebarSelectedItem)
      .pipe(filter(Boolean))
      .pipe(takeUntil(this.destroy$))
      .subscribe(({ _id }) => this.store.dispatch(new LoadDictionary(_id)));
    this.store.select(selectDictionaryList)
      .pipe(takeUntil(this.destroy$))
      .subscribe(dictionaries => this.store.dispatch(new SetSidebarData(dictionaries)));

    this.store.pipe(
      select(selectSidebarButtonClick),
      filter(Boolean),
      takeUntil(this.destroy$)
    ).subscribe(() => {
      this.store.dispatch(new ClickSidebarButton(null));
      this.dialog.open(DictionaryModalComponent, {
        width: '450px'
      }).afterClosed()
        .pipe(filter(Boolean))
        .pipe(takeUntil(this.destroy$))
        .subscribe(dictionary => this.store.dispatch(new CreateDictionary(dictionary)));
    });
  }

  public initBasicData(): void {
    this.store.dispatch(new LoadWords());
    this.words$ = this.store.select(selectWordList);
    this.dictionary$ = this.store.select(getSelectedDictionary);
    this.dictionary$.pipe(filter(Boolean))
      .pipe(takeUntil(this.destroy$))
      .subscribe(({ words }) => {
        this.words$ = this.store.select(selectWordList).pipe(map((items) => {
          return items.filter(({ _id }) => !words.find(value => value._id === _id));
        }));
      });
  }

  public addWordInDictionary(id: string, word: any): void {
    this.store.dispatch(new LoadDictionarySuccess(null));
    this.store.dispatch(new AddWordInDictionary({ id, word: word._id }));
    this.words$ = this.words$.pipe(map(items => items.filter(item => item._id !== word._id)));
  }

  public deleteWordFromDictionary(id: string, word: any): void {
    this.store.dispatch(new LoadDictionarySuccess(null));
    this.store.dispatch(new DeleteWordFromDictionary({ id, word: word._id }));
    this.words$ = this.words$.pipe(map(items => [...items, word]));
  }

  public onDelete(id: string): void {
    this.dialog.open(ConfirmDialogComponent, {
      width: '400px',
      data: { text: 'Are you sure you want to delete the dictionary?' }
    }).afterClosed()
      .pipe(filter(Boolean))
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => this.store.dispatch(new DeleteDictionary(id)));
  }

  public onEdit(dictionary: DictionaryModel): void {
    this.dialog.open(DictionaryModalComponent, {
      width: '400px',
      data: { ...dictionary },
    }).afterClosed()
      .pipe(takeUntil(this.destroy$))
      .subscribe(data => this.store.dispatch(
        new UpdateDictionary({ data, id: dictionary._id })
      ));
  }
}

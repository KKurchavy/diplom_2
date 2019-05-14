import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { exhaustMap, map, catchError, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { DictionaryService } from '../../../services/dictionary.service';
import {
  CreateDictionary, DictionaryActionTypes, CreateDictionarySuccess, CreateDictionaryFailed,
  LoadDictionary, LoadDictionarySuccess, LoadDictionaryFailed, LoadDictionaries,
  LoadDictionariesSuccess, LoadDictionariesFailed, UpdateDictionary, UpdateDictionarySuccess,
  UpdateDictionaryFailed, AddWordInDictionary, AddWordInDictionarySuccess, AddWordInDictionaryFailed,
  DeleteDictionary, DeleteDictionarySuccess, DeleteDictionaryFailed, DeleteWordFromDictionary, DeleteWordFromDictionarySuccess, DeleteWordFromDictionaryFailed
} from '../../actions/dictionary/dictionary.actions';



@Injectable()
export class DictionaryEffects {

  @Effect()
  public createDictionary$ = this.actions$.pipe(
    ofType<CreateDictionary>(DictionaryActionTypes.CreateDictionary),
    exhaustMap(({ payload }) => {
      return this.wordService.createDictionary(payload).pipe(
        switchMap(() => [new CreateDictionarySuccess(), new LoadDictionaries()]),
        catchError(() => of(new CreateDictionaryFailed()))
      );
    })
  );

  @Effect()
  public loadDictionary$ = this.actions$.pipe(
    ofType<LoadDictionary>(DictionaryActionTypes.LoadDictionary),
    exhaustMap(({ payload }) => {
      return this.wordService.getDictionaryById(payload).pipe(
        map(({ body }) => new LoadDictionarySuccess(body)),
        catchError(() => of(new LoadDictionaryFailed()))
      );
    })
  );

  @Effect()
  public loadDictionaries$ = this.actions$.pipe(
    ofType<LoadDictionaries>(DictionaryActionTypes.LoadDictionaries),
    exhaustMap(() => {
      return this.wordService.getDictionaries().pipe(
        map(({ body }) => new LoadDictionariesSuccess(body)),
        catchError(() => of(new LoadDictionariesFailed()))
      );
    })
  );

  @Effect()
  public updateDictionary$ = this.actions$.pipe(
    ofType<UpdateDictionary>(DictionaryActionTypes.UpdateDictionary),
    exhaustMap(({ payload }) => {
      return this.wordService.updateDictionary(payload.id, payload.data).pipe(
        switchMap(() => [new UpdateDictionarySuccess(), new LoadDictionaries(), new LoadDictionary(payload.id)]),
        catchError(() => of(new UpdateDictionaryFailed()))
      );
    })
  );

  @Effect()
  public addWordInDictionary$ = this.actions$.pipe(
    ofType<AddWordInDictionary>(DictionaryActionTypes.AddWordInDictionary),
    exhaustMap(({ payload }) => {
      return this.wordService.addWordInDictionary(payload.id, payload.word).pipe(
        switchMap(() => [new AddWordInDictionarySuccess(), new LoadDictionary(payload.id)]),
        catchError(() => of(new AddWordInDictionaryFailed()))
      );
    })
  );

  @Effect()
  public deleteWordFromDictionary$ = this.actions$.pipe(
    ofType<DeleteWordFromDictionary>(DictionaryActionTypes.DeleteWordFromDictionary),
    exhaustMap(({ payload }) => {
      return this.wordService.deleteWordFromDictionary(payload.id, payload.word).pipe(
        switchMap(() => [new DeleteWordFromDictionarySuccess(), new LoadDictionary(payload.id)]),
        catchError(() => of(new DeleteWordFromDictionaryFailed()))
      );
    })
  );

  @Effect()
  public deleteDictionary$ = this.actions$.pipe(
    ofType<DeleteDictionary>(DictionaryActionTypes.DeleteDictionary),
    exhaustMap(({ payload }) => {
      return this.wordService.deleteDictionary(payload).pipe(
        switchMap(() => [new DeleteDictionarySuccess(), new LoadDictionaries(), new LoadDictionarySuccess(null)]),
        catchError(() => of(new DeleteDictionaryFailed()))
      );
    })
  );

  constructor(
    private actions$: Actions,
    private wordService: DictionaryService,
  ) {}
}

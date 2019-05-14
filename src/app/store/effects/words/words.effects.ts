import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { exhaustMap, map, catchError, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { WordsService } from '../../../services/words.service';
import {
  CreateWord, WordsActionTypes, CreateWordFailed, CreateWordSuccess,
  LoadWords, LoadWordsSuccess, LoadWordsFailed, UpdateWord, 
  UpdateWordSuccess, UpdateWordFailed, DeleteWord, DeleteWordSuccess, DeleteWordFailed
} from '../../actions/words/words.actions';



@Injectable()
export class WordsEffects {

  @Effect()
  public createWord$ = this.actions$.pipe(
    ofType<CreateWord>(WordsActionTypes.CreateWord),
    exhaustMap(({ payload }) => {
      return this.wordService.createWord(payload).pipe(
        switchMap(() => [new CreateWordSuccess(), new LoadWords()]),
        catchError(() => of(new CreateWordFailed()))
      );
    })
  );

  @Effect()
  public loadWords$ = this.actions$.pipe(
    ofType<LoadWords>(WordsActionTypes.LoadWords),
    exhaustMap(() => {
      return this.wordService.getWords().pipe(
        map(({ body }) => new LoadWordsSuccess(body)),
        catchError(() => of(new LoadWordsFailed()))
      );
    })
  );

  @Effect()
  public updateWord$ = this.actions$.pipe(
    ofType<UpdateWord>(WordsActionTypes.UpdateWord),
    exhaustMap(({ payload }) => {
      return this.wordService.updateWord(payload.id, payload.data).pipe(
        switchMap(() => [new UpdateWordSuccess(), new LoadWords()]),
        catchError(() => of(new UpdateWordFailed()))
      );
    })
  );

  @Effect()
  public deleteWord$ = this.actions$.pipe(
    ofType<DeleteWord>(WordsActionTypes.DeleteWord),
    exhaustMap(({ payload }) => {
      return this.wordService.deleteWord(payload).pipe(
        switchMap(() => [new DeleteWordSuccess(), new LoadWords()]),
        catchError(() => of(new DeleteWordFailed()))
      );
    })
  );

  constructor(
    private actions$: Actions,
    private wordService: WordsService,
  ) {}
}

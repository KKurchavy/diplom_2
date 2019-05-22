import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {
  GetControlTestsByUserId, ControlTestActionTypes, GetControlTestsByUserIdFailed,
  GetControlTestsByUserIdSuccess, 
  GetUserControlTests,
  GetUserControlTestsSuccess,
  GetUserControlTestsFailed,
  CreateControlTest,
  CreateControlTestSuccess,
  CreateControlTestFailed,
  UpdateControlTest,
  UpdateControlTestSuccess} from '../../actions/control-test/control-test.actions';
import { exhaustMap, map, catchError, switchMap } from 'rxjs/operators';
import { ControlTestService } from '../../../services/control-test.service';

@Injectable()
export class ControlTestEffects {
  @Effect()
  public getTestsByUserId$ = this.actions$
    .pipe(
      ofType<GetControlTestsByUserId>(ControlTestActionTypes.GetControlTestsByUserId),
      exhaustMap(({ payload }) => {
        return this.controlTestService.getControlTestsByUserId(payload).pipe(
            map(({ body }) => new GetControlTestsByUserIdSuccess(body)),
            catchError(() => of(new GetControlTestsByUserIdFailed()))
          );
      })
    );

  @Effect()
  public getUserControlTests$ = this.actions$
    .pipe(
      ofType<GetUserControlTests>(ControlTestActionTypes.GetUserControlTests),
      exhaustMap(() => {
        return this.controlTestService.getUserControlTests().pipe(
            map(({ body }) => new GetUserControlTestsSuccess(body)),
            catchError(() => of(new GetUserControlTestsFailed()))
          );
      })
    );

  @Effect()
  public createControlTest$ = this.actions$
    .pipe(
      ofType<CreateControlTest>(ControlTestActionTypes.CreateControlTest),
      exhaustMap(({ payload }) => {
        return this.controlTestService.createControlTest(payload).pipe(
            switchMap(() => [new CreateControlTestSuccess(), new GetControlTestsByUserId(payload.executor)]),
            catchError(() => of(new CreateControlTestFailed()))
          );
      })
    );

  @Effect()
  public updateControlTest$ = this.actions$
    .pipe(
      ofType<UpdateControlTest>(ControlTestActionTypes.UpdateControlTest),
      exhaustMap(({ payload: { id, data } }) => {
        return this.controlTestService.updateControlTestById(id, data).pipe(
            switchMap(({ body: { executor } }) => [
              new UpdateControlTestSuccess(),
              new GetControlTestsByUserId(executor)
            ]),
            catchError(() => of(new CreateControlTestFailed()))
          );
      })
    );

  constructor(
    private actions$: Actions,
    private controlTestService: ControlTestService
  ) {}
}

import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {finalize, map, switchMap, tap} from 'rxjs/operators';
import * as AppActions from './actions';
import {JobService} from '../shared/job.service';


@Injectable()
export class AppEffects {
  getJobs$ = createEffect(
    () => this.actions$.pipe(
      ofType(AppActions.LOAD_JOBS),
      tap(() => new AppActions.ToggleLoading(true)),
      switchMap(() => this.jobService.getJobs().pipe(
        map(jobs => new AppActions.GetJobs(jobs)))
      ),
      finalize(() => new AppActions.ToggleLoading(false))
    )
  );

  constructor(private actions$: Actions,
              private jobService: JobService) {
  }
}
